const axios = require('axios');

class UserHistoryService {
    constructor(url = 'http://localhost:8083') {
        this.axiosInstance = axios.create({
            baseURL: url,
            timeout: 10000,
        });
    }

    getUserHistory(userId) {
        return this.axiosInstance.get(`/userrequestloghistory/${userId}`, {
            headers: {
                'content-type': 'application/json'
            }
        });
    }

}

export default new UserHistoryService;