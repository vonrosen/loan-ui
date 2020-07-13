import { UserHistory } from '../model/UserHistory';
const axios = require('axios');

class UserHistoryService {
    axiosInstance: any;
    constructor(url: string = 'http://localhost:8083') {
        this.axiosInstance = axios.create({
            baseURL: url,
            timeout: 10000,
        });
    }

    getUserHistory(userId: string) : UserHistory {
        return this.axiosInstance.get(`/userrequestloghistory/${userId}`, {
            headers: {
                'content-type': 'application/json'
            }
        });
    }

}

export default new UserHistoryService(process.env.REACT_APP_USER_REQUEST_LOG_HISTORY_SERVICE_URL);