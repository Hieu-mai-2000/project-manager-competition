import React from 'react'
import TextField from '@material-ui/core/TextField'

export const CusTomTextField = (props) => {
	const { name, variant, margin, label } = props

	return (
		<div>
			<TextField
				variant={variant}
				margin={margin}
				required
				fullWidth
				id={name}
				label={label}
				name={name}
				autoComplete={name}
				autoFocus
			/>
		</div>
	)
}
