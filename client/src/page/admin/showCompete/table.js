import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paginations from '../../../common/pagination/pagination'
import SearchInput from '../../../common/searchInput/searchInput'
import competeApi from '../../../api/competeApi'
import { Box, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	seeMore: {
		marginTop: theme.spacing(3),
	},
}))

export default function TableCompetition() {
	const classes = useStyles()
	const [competes, setCompetes] = useState([])

	useEffect(() => {
		async function getApi() {
			try {
				const reponses = await competeApi.getAll()
				setCompetes(reponses)
				console.log(reponses)
			} catch (error) {
				console.log(error)
			}
		}
		getApi()
	}, [])

	const handDelete = async (e) => {
		const id = e.currentTarget?.attributes?.id.value
		if (id) {
			try {
				await competeApi.delete(id)
				const UpdateCompetes = competes.filter((compete) => compete.id !== id)
				setCompetes(UpdateCompetes)
			} catch (error) {
				console.log(error)
			}
		}
		console.log('delete successfully')
	}

	return (
		<React.Fragment>
			<SearchInput />
			<Box display="flex" flexDirection="row-reverse">
				<Link to="admin/compete">
					<Button variant="contained" color="warning">
						Create
					</Button>
				</Link>
			</Box>
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
									<Link to={`admin/compete/${compete.id}`}>
										<Button key={compete.id} variant="contained" id={compete.id} color="primary">
											Edit
										</Button>
									</Link>
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
			<Box display="flex" flexDirection="row-reverse">
				<div className={classes.seeMore}>
					<Paginations />
				</div>
			</Box>
		</React.Fragment>
	)
}
