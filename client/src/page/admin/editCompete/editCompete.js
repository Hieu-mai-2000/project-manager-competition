import React, { useEffect, useState } from 'react'
import FormCompete from '../../../components/formCompete'
import competeApi from '../../../api/competeApi'
import { useHistory, useParams } from 'react-router-dom'

const EditCompete = () => {
	const { id } = useParams()
	const history = useHistory()
	const [department, setDepartment] = useState('')
	const [compete, setCompete] = useState('')

	useEffect(() => {
		async function getItem() {
			try {
				const { department, compete } = await competeApi.get(id)
				setDepartment(department)
				setCompete(compete)
			} catch (error) {
				console.log(error)
			}
		}
		getItem()
	}, [department, compete, id])

	const handleSubmit = async (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		try {
			await competeApi.update(id, {
				department: data.get('Department'),
				compete: data.get('Compete'),
			})
			console.log('save successfully')
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
				valueDepartment={department}
				valueCompete={compete}
				handleSubmit={handleSubmit}
				handleCancel={handleCancel}
			/>
		</div>
	)
}

export default EditCompete


