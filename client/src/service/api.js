import axios from 'axios';

const url='http://localhost:8000';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch(err) {
        console.log('Error while adding user api', err.message);
    }
}

export const getUsers = async () => {
    try {
        let res = await axios.get(`${url}/users`);
        return res.data;
    } catch(err) {
        console.log('error while getting users', err.message);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch(err) {
        console.log('Error while setting convo', err.message);
    }
}

export const getConversation = async (data) => {
    try {
        let res = await axios.post(`${url}/conversation/get`, data);
        return res.data;
    } catch(err) {
        console.log('Error while getting convo details', err.message);
    }
}


export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);
    } catch(err) {
        console.log('Error while getting convo details', err.message);
    }
}


export const getMessages = async (id) => {
    try {
        let res =  await axios.get(`${url}/message/get/${id}`);
        return res.data;
    } catch(err) {
        console.log('Error while getting messages', err.message);
    }
}


export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch(err) {
        console.log('Error while file upload', err.message);
    }
}
