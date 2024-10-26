import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    // Global palette configuration
    palette: {
        primary: {
            main: '#734f96', //dark lavender
            light: '#FAF9F6', //off white
            dark: '#28282B', // matt black
            contrastText: '#e1ad01', 
        },
        secondary: {
            main: '#483248', // plum
            light: '#FFFFFF', // white
            dark: '#06402B', // dark green
            contrastText: '#ffffff', //black
        },
        error: {
            main: '#f44336', // Main error color
        },
        warning: {
            main: '#ff9800', // Main warning color
        },
        success: {
            main: '#4caf50', // Main success color
        },
        background: {
            default: '#F0EAD6', // Default background color
            paper: '#f5f5f5', // Paper background (e.g., cards)
        },
        text: {
            primary: '#333333', // Primary text color
            secondary: '#555555', // Secondary text color
        },
    },

    // Global typography configuration
    typography: {
        fontFamily: 'Amatic SC, Arial, sans-serif', // Font family for the application
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 700,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 700,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.43,
        },
    },

    // Spacing function customization
    spacing: 8, // Default spacing unit (can be a number)

    // Breakpoints customization
    breakpoints: {
        values: {
            xs: 0, // Extra small devices
            sm: 600, // Small devices
            md: 900, // Medium devices
            lg: 1200, // Large devices
            xl: 1536, // Extra large devices
        },
    },

    // Component style overrides
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px', // Custom border radius for buttons
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '16px', // Custom border radius for cards
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    color: '#097969', // Custom color for h1
                },
                body1: {
                    color: '#333333', // Custom color for body text
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& fieldset': {
                        borderColor: '#734f96', // Border color
                    },
                    '&:hover fieldset': {
                        borderColor: '#734f96', // Border color on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#734f96', // Border color when focused
                    },
                    color: '#FAF9F6', // Text color
                },
            },
        },
    },
});

export default theme;
