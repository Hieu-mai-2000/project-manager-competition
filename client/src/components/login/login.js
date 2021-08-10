import React from 'react'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { CusTomTextField } from '../../common/textField/textField'
import { Link } from 'react-router-dom'

function Login(props) {
	const { classes } = props
	console.log(props)

	return (
		<>
			<Typography component="h1" variant="h5">
				Login
			</Typography>
			<form className={classes.form}>
				<CusTomTextField variant="outlined" margin="normal" label="Email Address" name="email" />
				<CusTomTextField variant="outlined" margin="normal" label="Password" name="password" />

				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>
				<Link to="/admin">
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Login
					</Button>
				</Link>

				<Grid container>
					<Grid item xs>
						<Link to="#" variant="body2">
							Forgot password?
						</Link>
					</Grid>
					<Grid item>
						<Link to="/sign-up" variant="body2">
							{"Don't have an account? Sign Up"}
						</Link>
					</Grid>
				</Grid>
			</form>
		</>
	)
}

export default withStyles(styles)(Login)
