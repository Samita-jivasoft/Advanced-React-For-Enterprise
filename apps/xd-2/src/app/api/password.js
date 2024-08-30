import axios from 'axios'
import { FORGOT, NEWPASSWORD, REQUIREMENTS, VALIDATECODE } from '.'

export async function resetPassword (email) {
	const apiResponse = await axios
		.post(FORGOT, {
			emailaddress: email,
			passwordhash: '',
			passwordsalt: ''
		})

		.then(function (response) {
			return {
				error: null,
				apiData: true
			}
			// return(response.data.message)
		})

		.catch(function (error) {
			console.log(FORGOT, error.message)
			return {
				error: error.toJSON(),
				apiData: null
			}
		})
	return apiResponse
}
export async function validateCode (email, code) {
	console.log({
		emailaddress: email,
		passwordcode: parseInt(code)
	})
	const apiResponse = await axios
		.post(VALIDATECODE, {
			emailaddress: email,
			passwordcode: parseInt(code)
		})

		.then(function (response) {
			console.log(response.data)
			return {
				error: null,
				apiData: response.data
			}
		})

		.catch(function (error) {
			console.log(VALIDATECODE, error.message)

			return {
				error: error.toJSON(),
				apiData: null
			}
		})
	return apiResponse
}
export async function getPasswordRequirements (email, password) {
	return await axios
		.get(REQUIREMENTS)
		.then(function (response) {
			console.log(response)
			return response
		})
		.catch(function (error) {
			return error
		})
}
export async function setNew (email, paswordhash, passwordsalt) {
	console.log({
		email:email,
		passwordhash:paswordhash,
		passwordsalt:passwordsalt
	})
	const apiResponse = await axios
		.post(NEWPASSWORD,{
			emailaddress:email,
			passwordhash:paswordhash,
			passwordsalt:passwordsalt
		})
		.then(function (response) {
			console.log(response.data)
			return {
				error: null,
				apiData: response.data
			}
		})
		.catch(function (error) {
			return {
				error: error.toJSON(),
				apiData: null
			}
		})
	return apiResponse
}
