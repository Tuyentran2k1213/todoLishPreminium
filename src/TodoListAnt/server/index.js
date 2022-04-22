import axios from 'axios';

const BASE_URL = 'https://620e4fdc585fbc3359ddbfcf.mockapi.io/User'

const server = {
    getUser() {
        return axios({
            url: BASE_URL,
            method: 'GET',
        })
    },
    setUser(data) {
        return axios({
            url: BASE_URL,
            method: 'POST',
            data
        })
    },
    changeUser(id, data) {
        return axios({
            url: `${BASE_URL}/${id}`,
            method: 'PUT',
            data
        })
    }
}

export default server;