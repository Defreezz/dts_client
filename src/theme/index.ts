import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#d9dce1",
        },
        secondary: {
            main: "#7c7ce3",
        },
    },
    components: {
        MuiTextField: {
            defaultProps: {
                size: "small",
                sx:{
                    margin:"10px"
                }
            }
        },
        MuiGrid: {

            styleOverrides:{
                container:{
                    margin:"10px"
                }
            }
        },
        MuiButton: {
            defaultProps: {
                sx: {
                    backgroundColor:"#092746",
                    color: "#ffffff",
                    '&:hover': {
                        backgroundColor: "rgb(10,24,40)",
                    }
                },

            },
        },

    }
});