import { createTheme } from "@mui/material";
import { blue, teal } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: blue[700],
            dark: blue[800],
            light: blue[500],
            contrastText: '#fff',
        },
        secondary: {
            main: teal[700],
            dark: teal[800],
            light: teal[500],
            contrastText: '#fff',
        },
        background: {
            default: '#f7f6f3',
            paper: '#fff',
        }
        // primary: {
        //     light: '#757ce8',
        //     main: '#3f50b5',
        //     dark: '#002884',
        //     contrastText: '#fff',
        //   },
        //   secondary: {
        //     light: '#ff7961',
        //     main: '#f44336',
        //     dark: '#ba000d',
        //     contrastText: '#000',
        //   },
    }
})