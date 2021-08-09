import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import axios from 'axios'

export default function Compete(props) {
	const {valueDepartment} = props
	console.log(valueDepartment)
	const [department,setDepartment] = useState(valueDepartment)
	const [compete,setCompete] = useState('')

	// useEffect(() => {
	// 	async function getItem(){
	// 		const reponses = await axios.get('https://60fb691891156a0017b4c801.mockapi.io/api/user/competitions/1')
	// 		const {department,compete} = reponses.data
	// 		setDepartment(department)
	// 		setCompete(compete)
	// 	}

	// 	getItem()
	// },[])

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)


		console.log({
			department: data.get('Department'),
			compete: data.get('Compete'),
		})
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography component="h1" variant="h5">
					Compete
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								value={department}
								onChange={e=>setDepartment(e.currentTarget.value)}
								id="Department"
								label="Department"
								name="Department"
								autoComplete="Department"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								value={compete}
								onChange={e=>setCompete(e.currentTarget.value)}
								name="Compete"
								label="Compete"
								id="Compete"
								autoComplete="Compete"
							/>
						</Grid>
					</Grid>
					<Box mt={3}>
						<Box component="span" m={3}>
							<Button type="submit" color="primary" variant="contained" sx={{ mt: 5, mb: 2 }}>
								Submit
							</Button>
						</Box>
						<Box component="span" m={3}>
							<Button variant="contained" color="secondary" sx={{ mt: 3, mb: 2 }}>
								Cancel
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	)
}
