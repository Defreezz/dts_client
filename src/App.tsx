import React, {useState} from 'react';
import s from './App.module.scss';
import {Box, Button, Paper, TextField} from "@mui/material";
import {useSetAmount, useSetCardNumber, useSetCvv, useSetMonth, useSetYear} from "./helpers/hooks";
import {BodyType, dstAPI} from "./api";


function App() {

    const {handleCardNumberChange, cardNumber} = useSetCardNumber()
    const {handleExpMonthChange, month} = useSetMonth()
    const {handleExpYearChange, year} = useSetYear()
    const {handleCvvChange, cvv} = useSetCvv()
    const {handleAmountChange, amount} = useSetAmount()

    const [response, setResponse] = useState<{ RequestId: string, Amount: number }>({RequestId: ' ', Amount: 0})
    const handlePayClick = async () => {
        const res = await dstAPI.toPay({cardNumber, cvv, amount, expDate:`${month}/${year}` } as BodyType)
        setResponse({...res})
    }

    const isDisable = cardNumber.toString().length < 16 || month <= 0 || year <= 0 || cvv <= 0 || amount <= 0

    return (
        <Box className={s.app}>
            <Paper
                elevation={8}
                className={s.container}>
                <Box className={s.cardNumber}>
                    <TextField
                        label={'Card number'}
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                    />
                </Box>
                <Box className={s.expContainer}>
                    <Box>
                        <TextField
                            className={s.exp}
                            label={'MM'}
                            value={month}
                            onChange={handleExpMonthChange}
                        />
                    </Box>
                    <Box>
                        <TextField
                            className={s.exp}
                            label={'YYYY'}
                            value={year}
                            onChange={handleExpYearChange}
                        />
                    </Box>
                </Box>
                <Box>
                    <TextField
                        value={cvv}
                        onChange={handleCvvChange}
                        className={s.cvv}
                        label={'CVV'}
                    />
                </Box>
                <Box className={s.amountButton}>
                    <TextField
                        className={s.amount}
                        label={'Amount'}
                        value={amount}
                        onChange={handleAmountChange}
                    />
                    <Button
                        className={s.button}
                        disabled={isDisable}
                        onClick={handlePayClick}
                    >
                        Pay
                    </Button>
                </Box>
            </Paper>
            <Box className={s.response}>
                <div>RequestId: {response.RequestId}<br/></div>
                <div>Amount: {response.Amount}</div>
            </Box>
        </Box>


    )

}

export default App;
