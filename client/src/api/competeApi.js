import axios from '../config/axios'

const CompeteApi = {
	create: (params) => {
		const url = 'admin/compete'
		return axios.post(url, { ...params })
	},
	getAll: () => {
		const url = 'admin/compete'
		return axios.get(url)
	},
    get: (id) => {
		const url = 'admin/compete'
		return axios.get(url + `/${id}`)
	},
	update: (id,params) => {
		const url = 'admin/compete'
		return axios.put(url + `/${id}`,{...params})
	},
	delete: (id) => {
		const url = 'admin/compete'
		return axios.delete(url + `/${id}`)
	},
}

export default CompeteApi
