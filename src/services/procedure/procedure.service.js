import axios from 'axios'

import { config } from '../../config'

export const createProcedure = async (data, token) => {
    try {
        const response = await axios.post(`${ config.API_URL }/procedures`, data,{
            headers: {
                'Authorization': token
            }
        });

        return response.data

    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2))
    }
}

export const getAllProcedures = async () => {
    try {
        const response = await axios.get(`${config.API_URL}/procedures`);

        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2))
    }
}
