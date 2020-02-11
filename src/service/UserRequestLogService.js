const axios = require('axios');

class UserRequestLogService {
    constructor(url = 'http://localhost:8082') {
        this.axiosInstance = axios.create({
            baseURL: url,
            timeout: 10000,
        });
    }

    createUserRequestLog({ userId, maxPaymentAmount }) {
        if (!userId || !maxPaymentAmount) {
            return;
        }
        return this.axiosInstance.post('/userrequestlog', {
            userId,
            maxPaymentAmount
        }, {
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}

export default new UserRequestLogService(process.env.REACT_APP_USER_REQUEST_LOG_SERVICE_URL);