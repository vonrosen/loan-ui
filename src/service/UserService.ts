const axios = require('axios');

class UserService {
    axiosInstance: any;
    constructor(url: string = 'http://localhost:8081') {
        this.axiosInstance = axios.create({
            baseURL: url,
            timeout: 10000,
        });
    }

    createUser() {
        return this.axiosInstance.post('/user', {
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    getUser(userId: string) {
        return this.axiosInstance.get(`/user/${userId}`, {
            headers: {
                'content-type': 'application/json'
            }
        });
    }

}

export default new UserService(process.env.REACT_APP_USER_SERVICE_URL);