import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndPoints';
const makeRequest = async (apiEndPoint, dynamicConfig, navigate) => {
    try {
        const requestDetails = {
            baseURL: BACKEND_URL,
            url: apiEndPoint.url,
            method: apiEndPoint.method,
            ...dynamicConfig,
        };
        const { data } = await axios(requestDetails);
        console.log("hello");
        return data;
    } catch (error) {
        const errorCode = error.response?.status;
        if (errorCode) {
            navigate(`/error/${errorCode}`);
        } else {
            navigate('/error');
        }
    }
};
  
export default makeRequest;