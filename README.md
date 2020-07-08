# loan-ui
A React app to show how much loan you can get for a given monthly payment.

## How to Run Locally Against Prod
```
yarn install

export REACT_APP_LOAN_SERVICE_URL=http://34.66.53.177
export REACT_APP_USER_REQUEST_LOG_HISTORY_SERVICE_URL=http://35.192.196.30
export REACT_APP_USER_REQUEST_LOG_SERVICE_URL=http://35.190.142.42
export REACT_APP_USER_SERVICE_URL=http://35.185.25.212:81

yarn start
```