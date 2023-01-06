import Axios from 'axios'

const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/api/'
    : '//localhost:3030/api/'


const axios = Axios.create({
    withCredentials: true
})

export const httpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    }
}

async function ajax(endpoint, method = 'GET', data = null) {
    try {
        console.log('DATA', `${BASE_URL}${endpoint}`);
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null
        })
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data:`, data)
        console.dir(err)
        if (err.response && err.response.status === 401) {
            // Depends on routing startegy - hash or history
            window.location.assign('/#/login')
        }
        throw err
    }
}