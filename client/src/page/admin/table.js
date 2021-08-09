import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paginations from '../../common/pagination/pagination'
import SearchInput from '../../common/searchInput/searchInput'
import axios from 'axios'
import { Box, Button } from '@material-ui/core'
import AlertDialog from '../../common/dialog/alertDialog'

function preventDefault(event) {
	event.preventDefault()
}

const useStyles = makeStyles((theme) => ({
	seeMore: {
		marginTop: theme.spacing(3),
	},
}))

export default function TableCompetition() {
	const classes = useStyles()
	const [competes, setCompetes] = useState([])
	const [open, setOpen] = useState(false)
	const [dataEdit, setDataEdit] = useState({})

	const handleClose = () => {
		setOpen(false)
	}
	const handleClickOpen = (e) => {
		console.log(e.target.offsetParent.attributes.id.value)
		const id = e.target.offsetParent.attributes.id.value
		setDataEdit(competes[id - 1])
		setOpen(true)
	}

	useEffect(() => {
		async function getApi() {
			try {
				const reponses = await axios.get(
					'https://60fb691891156a0017b4c801.mockapi.io/api/user/competitions'
				)
				setCompetes(reponses.data)
				console.log(reponses.data)
			} catch (error) {
				console.log(error)
			}
		}

		getApi()
	}, [])

	const handDelete = (e) => {
		console.log(e)
	}

	return (
		<React.Fragment>
			{/* <Title>Recent Orders</Title> */}
			<SearchInput />
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell>Department</TableCell>
						<TableCell>Compete</TableCell>
						<TableCell>Date</TableCell>
						<TableCell align="right">Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{competes.map((compete) => (
						<TableRow key={compete.id}>
							<TableCell>{compete.id}</TableCell>
							<TableCell>{compete.department}</TableCell>
							<TableCell>{compete.compete}</TableCell>
							<TableCell>{compete.date}</TableCell>
							<TableCell align="right">
								<Box component="span" mr={1}>
									<Button
										onClick={handDelete}
										key={compete.id}
										variant="contained"
										id={compete.id}
										color="primary"
									>
										Edit
									</Button>
								</Box>

								<Button
									onClick={handDelete}
									key={compete.id}
									variant="contained"
									id={compete.id}
									color="secondary"
								>
									Delete
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className={classes.seeMore}>
				<Paginations />
			</div>
		</React.Fragment>
	)
}
