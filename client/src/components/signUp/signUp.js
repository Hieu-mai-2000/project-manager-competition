import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { CusTomTextField } from '../../common/textField/textField'
import { Link } from 'react-router-dom'

function Login(props) {
	const { classes } = props

	return (
		<>
			<Typography component="h1" variant="h5">
				Sign up
			</Typography>
			<form className={classes.form} noValidate>
				<CusTomTextField variant="outlined" margin="normal" label="Email Address" name="email" />
				<CusTomTextField variant="outlined" margin="normal" label="Password" name="password" />
				<CusTomTextField
					variant="outlined"
					margin="normal"
					label="Confirm Password"
					name="confirmPassword"
				/>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
				>
					Sign up
				</Button>
				<Grid container>
					<Grid item>
						<Link to="/" variant="body2">
							{'LogIn'}
						</Link>
					</Grid>
				</Grid>
			</form>
		</>
	)
}

export default withStyles(styles)(Login)
