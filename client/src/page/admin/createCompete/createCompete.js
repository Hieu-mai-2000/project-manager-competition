import React, { useEffect, useState } from 'react'
import FormCompete from '../../../components/formCompete'
import competeApi from '../../../api/competeApi'
import { useHistory } from 'react-router-dom'

const CreateCompete = () => {
	const history = useHistory()
	// const [department, setDepartment] = useState('')
	// const [compete, setCompete] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		try {
			await competeApi.create({
				department: data.get('Department'),
				compete: data.get('Compete'),
			})
			console.log('create successfully')
			history.push('/admin')
		} catch (error) {
			console.log(error)
		}
	}

	const handleCancel = ()=>{
		history.push('/admin')
	}

	return (
		<div>
			<FormCompete
				valueDepartment=''
				valueCompete=''
				handleSubmit={handleSubmit}
				handleCancel={handleCancel}
			/>
		</div>
	)
}

export default CreateCompete


