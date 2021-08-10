import axios from '../config/axios'

const CompeteApi = {
	create: (params) => {
		const url = '/user/competitions'
		return axios.post(url, { ...params })
	},
	getAll: () => {
		const url = '/user/competitions'
		return axios.get(url)
	},
    get: (id) => {
		const url = '/user/competitions'
		return axios.get(url + `/${id}`)
	},
	update: (id,params) => {
		const url = '/user/competitions'
		return axios.put(url + `/${id}`,{...params})
	},
	delete: (id) => {
		const url = '/user/competitions'
		return axios.delete(url + `/${id}`)
	},
}

export default CompeteApi
