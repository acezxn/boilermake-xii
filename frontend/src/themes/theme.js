import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#8E6F3E", // Primary interface elements
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#ffb042", // Secondary interface elements
            contrastText: "#FFFFFF",
        },
        error: {
            main: "#BA1A1A", // For elements the user should be aware of (errors)
            contrastText: "#FFFFFF",
        },
        warning: {
            main: "#FBC02D", // For potentially dangerous actions or important messages
            contrastText: "#000000",
        },
        info: {
            main: "#29B6F6", // For highlighting neutral information
            contrastText: "#000000",
        },
        success: {
            main: "#388E3C", // For indicating successful actions
            contrastText: "#FFFFFF",
        },
        background: {
            default: "#18130b", // Background color
            paper: "#4a3f2f", // Paper surface color
        },
        text: {
            primary: "#f2eadc", // Primary text color
        },
    },
    typography: {
        "fontFamily": "\"Roboto Mono\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
        "h2" : {
            "fontFamily": "Bebas Neue",
            "fontSize": 120
        },
        "h4": {
            "fontFamily": "\"Roboto\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "fontSize": "1.875rem",
            "lineHeight": 1.5,
            "letterSpacing": 0.2,
            "fontWeight": 400,
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
        "button": {
            "fontFamily": "\"Roboto Mono\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
        },
        "body1": {
            "fontFamily": "\"Roboto Mono\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
        },
        "caption": {
            "display": "inline-block",
            "fontSize": "0.75rem",
            "lineHeight": 1.5,
            "letterSpacing": 0,
            "fontWeight": 700,
            "fontFamily": "\"Roboto Mono\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"",
            "scrollMarginTop": "calc(var(--MuiDocs-header-height) + 32px)"
        },
    }
});