import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://tranquil-cove-56139.herokuapp.com/',
    headers: {
        "FSB-IS-CALLING": "hi"
    }
})


export const dstAPI = {
    async toPay(body:BodyType) {
        const response = await instance.post<{RequestId:string,Amount:number}>(`/payment`,body)
        return response.data
    }
}

export type BodyType = {
    cardNumber: number
    expDate: string
    cvv: number
    amount: number
}