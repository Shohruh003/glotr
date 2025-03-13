import { createTheme } from "@mui/material";

const THEME_LIGHT = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#344054",
      light: "#ffffff"
    },
    secondary: {
      main: "#344054",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    background: {
      default: "#F5F6F8",
      paper: "#041922",
    },
  },
  shape: {
    borderRadius: 12, // Rounded corners to match MD3
  },
  shadows: [
    'none', // Level 0
    '0px 1px 2px rgba(0, 0, 0, 0.1)', // Level 1
    '0px 2px 4px rgba(0, 0, 0, 0.1)', // Level 2
    '0px 3px 6px rgba(0, 0, 0, 0.2)', // Level 3
    '0px 4px 8px rgba(0, 0, 0, 0.2)', // Level 4
    '0px 5px 10px rgba(0, 0, 0, 0.3)', // Level 5
    '0px 6px 12px rgba(0, 0, 0, 0.3)', // Level 6
    '0px 7px 14px rgba(0, 0, 0, 0.4)', // Level 7
    '0px 8px 16px rgba(0, 0, 0, 0.4)', // Level 8
    '0px 9px 18px rgba(0, 0, 0, 0.5)', // Level 9
    '0px 10px 20px rgba(0, 0, 0, 0.5)', // Level 10
    '0px 11px 22px rgba(0, 0, 0, 0.6)', // Level 11
    '0px 12px 24px rgba(0, 0, 0, 0.6)', // Level 12
    '0px 13px 26px rgba(0, 0, 0, 0.7)', // Level 13
    '0px 14px 28px rgba(0, 0, 0, 0.7)', // Level 14
    '0px 15px 30px rgba(0, 0, 0, 0.8)', // Level 15
    '0px 16px 32px rgba(0, 0, 0, 0.8)', // Level 16
    '0px 17px 34px rgba(0, 0, 0, 0.9)', // Level 17
    '0px 18px 36px rgba(0, 0, 0, 0.9)', // Level 18
    '0px 19px 38px rgba(0, 0, 0, 1)',   // Level 19
    '0px 20px 40px rgba(0, 0, 0, 1)',   // Level 20
    '0px 21px 42px rgba(0, 0, 0, 1)',   // Level 21
    '0px 22px 44px rgba(0, 0, 0, 1)',   // Level 22
    '0px 23px 46px rgba(0, 0, 0, 1)',   // Level 23
    '0px 24px 48px rgba(0, 0, 0, 1)',   // Level 24
  ],
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 3, // Default elevation to match MD3 paper elevation
      },
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff', // White background for paper
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for MD3
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
  },
});


const THEME_DARK = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
      light: 'rgba(52, 64, 84, 1)',
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "rgba(255, 255, 255, 0.54)",
      disabled: "rgba(255, 255, 255, 0.38)",
    },
    background: {
        default: "rgba(52, 64, 84, 0.7)",
        paper: "#344054",
    },
  },
  shape: {
    borderRadius: 12, // Rounded corners to match MD3
  },
  shadows: [
    'none', // Level 0
    '0px 1px 2px rgba(255, 255, 255, 0.1)', // Level 1
    '0px 2px 4px rgba(255, 255, 255, 0.1)', // Level 2
    '0px 3px 6px rgba(255, 255, 255, 0.2)', // Level 3
    '0px 4px 8px rgba(255, 255, 255, 0.2)', // Level 4
    '0px 5px 10px rgba(255, 255, 255, 0.3)', // Level 5
    '0px 6px 12px rgba(255, 255, 255, 0.3)', // Level 6
    '0px 7px 14px rgba(255, 255, 255, 0.4)', // Level 7
    '0px 8px 16px rgba(255, 255, 255, 0.4)', // Level 8
    '0px 9px 18px rgba(255, 255, 255, 0.5)', // Level 9
    '0px 10px 20px rgba(255, 255, 255, 0.5)', // Level 10
    '0px 11px 22px rgba(255, 255, 255, 0.6)', // Level 11
    '0px 12px 24px rgba(255, 255, 255, 0.6)', // Level 12
    '0px 13px 26px rgba(255, 255, 255, 0.7)', // Level 13
    '0px 14px 28px rgba(255, 255, 255, 0.7)', // Level 14
    '0px 15px 30px rgba(255, 255, 255, 0.8)', // Level 15
    '0px 16px 32px rgba(255, 255, 255, 0.8)', // Level 16
    '0px 17px 34px rgba(255, 255, 255, 0.9)', // Level 17
    '0px 18px 36px rgba(255, 255, 255, 0.9)', // Level 18
    '0px 19px 38px rgba(255, 255, 255, 1)',   // Level 19
    '0px 20px 40px rgba(255, 255, 255, 1)',   // Level 20
    '0px 21px 42px rgba(255, 255, 255, 1)',   // Level 21
    '0px 22px 44px rgba(255, 255, 255, 1)',   // Level 22
    '0px 23px 46px rgba(255, 255, 255, 1)',   // Level 23
    '0px 24px 48px rgba(255, 255, 255, 1)',   // Level 24
  ],

});


const theme = localStorage.getItem('theme')
document.body.style.backgroundColor = theme === 'dark' ? "rgba(52, 64, 84, 0.7)" : "#F5F6F8";
export const muiTheme = theme === "dark" ? THEME_DARK : THEME_LIGHT;