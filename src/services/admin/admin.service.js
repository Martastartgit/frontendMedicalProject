import axios from 'axios'

import { config } from '../../config'

export const admin = async (id, token) => {
    try {
        const response = await axios.get(`${ config.API_URL }/admin/${id}`,{
            headers: {
                'Authorization': token
            }
        });

        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2))
    }
}

export const adminPasswordForgot = async (data, token) => {
    try {
        const response = await axios.post(`${ config.API_URL }/admin/password/forgot`, data, {
            headers: {
                'Authorization': token
            }
        });

        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2))
    }
}

export const adminPasswordReset = async (data, token) => {
    try {
        const response = await axios.post(`${ config.API_URL }/admin/password/reset`, data, {
            headers: {
                'Authorization': token
            }
        });

        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2))
    }
}

export const updateAdmin = async (id, data, token) => {
    try {
        const response = await axios.post(`${ config.API_URL }/admin/${id}`, data,{
            headers: {
                'Authorization': token
            }
        });

        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2))
    }
}

export const deleteAdmin = async (id, token) => {
    try {
        const response = await axios.delete(`${ config.API_URL }/admin/${id}`,{
            headers: {
                'Authorization': token
            }
        });

        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2))
    }
}

export const getAdminHistory = async (id, token) => {
    try {
        const response = await axios.get(`${ config.API_URL }/admin/history/${id}`,{
            headers: {
                'Authorization': token
            }
        });

        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2))
    }
}
