import {ChangeEvent, useCallback, useMemo, useState} from "react";

export const useSetCardNumber = () => {
    const [cardNumber, setCardNumber] = useState<string | number>('')
    const handleCardNumberChange = useCallback ((e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        if (Number.isInteger(+value) && value.length <= 16) {
            setCardNumber(Number(value))
        }
        if (!value) setCardNumber('')
    },[setCardNumber])
    return useMemo(
        () => ({
            cardNumber,
            handleCardNumberChange,
        }),
        [
            cardNumber,
            handleCardNumberChange,
        ])
}