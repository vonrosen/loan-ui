import { LoanDetails } from '../model/LoanDetails'
const axios = require('axios');

class LoanService {
    axiosInstance: any;
    constructor(url: string='http://localhost:8080') {
        this.axiosInstance = axios.create({
            baseURL: url,
            timeout: 10000,
        });
    }

    getLoanDetails(maxPaymentAmount: number) : LoanDetails {
        return this.axiosInstance.get(`/loan-values?maxPaymentAmount=${maxPaymentAmount}`);
    }
}

export default new LoanService(process.env.REACT_APP_LOAN_SERVICE_URL);
