import {ChangeEvent, useCallback, useMemo, useState} from "react";

export const useSetAmount =() =>{
    const [amount, setAmount] = useState<number | ''>('')
    const handleAmountChange = useCallback ((e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        Number.isInteger(+value) && setAmount(+value)
        !value && setAmount('')
    },[setAmount])
    return useMemo(
        ()=>({
            amount,
            handleAmountChange,
        }),
        [
            amount,
            handleAmountChange,
        ])
}