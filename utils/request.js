import axios from "axios"

const instance = axios.create({
	baseURL: "http://192.168.1.3:3000/api/",
	// withCredentials: true,
	timeout: 10000,
	headers: {
		"content-type": "application/x-www-form-urlencoded"
	}
})

instance.interceptors.request.use(
	config => {
		/**
		 * 请求时从本地读取token，并设置headers
		 */
		const token = localStorage.token
		config.headers.Authorization = `Bearer ${token}`
		if (config.method === "post") {
			config.headers["content-type"] = "application/json"
		}
		console.log(config)
		return config
	},
	error => Promise.reject(error)
)

instance.interceptors.response.use(
	response => {
		console.log("response", response)
		if (response.config.url.includes("user/login")) {
			if (response.data && response.data.data) {
				localStorage.token = response.data.data.token
			}
		}
		if (!response.data.success) {
			//请求出错
		}
		return response.data
	},
	error => {
		const response = error.response || {}
		console.log("错误： ", response)
		handleErrorStatus(response.status, response.message)
		return Promise.reject(response)
	}
)

// 错误提示
const handleErrorStatus = (status, message) => {
	console.log(status, message)
}

export default (url = "", data = {}, method = "get", origin = false, api) => {
	// var postData = new FormData()
	// for (var prop in data) {
	// 	postData.append(prop, data[prop])
	// }
	const options = method.toLowerCase() === "get" ? { params: data } : data

	return instance[method](url, options)
		.then(res => {
			return res.data
		})
		.catch(err => {
			// handleErrorStatus(code, err.message)
			console.log("err: ", err)
			return false
		})
}
