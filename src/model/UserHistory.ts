interface UserRequest {
    userId: string,
    maxPaymentAmount: number,
    created: string,
    updated: string
}

export interface UserHistory {
    [index: number]: UserRequest[]
}