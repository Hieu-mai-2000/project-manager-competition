import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { FormControl, InputLabel, Input } from '@material-ui/core'

export default function AlertDialog(props) {
	// const [open, setOpen] = React.useState(false);
	const { open, handleClickOpen, handleClose, valueBtn, id,data } = props
	const [value , setValue] = useState(data)

	// const handleClickOpen = () => {
	//   setOpen(true);
	// };

	// const handleClose = () => {
	//   setOpen(false);
	// };
	console.log(value)
  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log(event.target.value)
  }

	return (
		<div>
			<Button key={id} id={id} variant="contained" color="primary" onClick={handleClickOpen}>
				{valueBtn}
			</Button>
     
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
       <form onSubmit={handleSubmit}>
				<DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						
							<FormControl>
								<InputLabel htmlFor="department">Department</InputLabel>
								<Input name="department" id="department" />
							</FormControl>
              <br/>
              <FormControl>
								<InputLabel htmlFor="compete">Compete</InputLabel>
								<Input name="compete" id="compete" />
							</FormControl>
              
						
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button type="submit" color="primary" autoFocus>
						Saved
					</Button>
				</DialogActions>
        </form>
			</Dialog>
      
		</div>
	)
}
