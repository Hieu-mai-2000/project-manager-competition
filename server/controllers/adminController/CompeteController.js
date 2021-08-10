const CompeteModel = require('../../model/CompeteSchema')

const get = async (req, res) => {
    
	try {
		const competes = await CompeteModel.findById(req.params.id)
		res.status(200).json(competes)
	} catch (error) {
		res.status(500).json(error)
	}
}

const getAll = async (req, res) => {
	try {
		const competes = await CompeteModel.find()
		res.status(200).json(competes)
	} catch (error) {
		res.status(500).json(error)
	}
}

const update = async (req, res) => {

	const compete = await CompeteModel.findById(req.params.id)
	if (!compete) res.status(404).json({ message: 'Not found data' })
	compete.department = req.body.department
	compete.compete = req.body.compete
	try {
		compete.save()
		res.status(200).json({ message: 'update successfully!!!' })
	} catch (error) {
		res.status(500).json({message:error.message})
	}
}

const create = async (req, res) => {

	const compete = new CompeteModel({
		department: req.body.department,
		compete: req.body.compete,
	})
	try {
		compete.save()
		res.status(200).json({ message: 'create successfully!!!' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'create failed!!!' })
	}
}

const _delete = async (req, res) => {
	
	try {
		const compete = await CompeteModel.findByIdAndRemove({_id:req.params.id})
	    if (!compete) res.status(404).json({ message: 'Not found data' })
		res.status(200).json({ message: 'delete successfully!!!',compete })
	} catch (error) {
		res.status(500).json({message:error.message})
	}
}

const CompeteApi = {
	get,
    getAll,
	update,
	create,
	_delete,
}

module.exports = CompeteApi
