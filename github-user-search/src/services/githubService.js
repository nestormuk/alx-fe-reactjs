import axios from 'axios';

const GITHUB_API_URL = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => { 
    try {
        const response = await axios.get(`${GITHUB_API_URL}/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error.response?.data?.message || error.message);

        
        throw new Error(error.response?.data?.message || 'Failed to fetch user data');
    }
};
