import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "@mui/material";
import {darkTheme} from "./theme"

ReactDOM.render(
        <ThemeProvider theme={darkTheme}>
            <App/>
        </ThemeProvider>,
    document.getElementById('root')
);

