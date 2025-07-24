import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const fetchUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const claimPoints = async (userId) => {
    try {
        const response = await axios.post(`${API_URL}/claim`, { userId });
        return response.data;
    } catch (error) {
        console.error('Error claiming points:', error);
        throw error;
    }
};