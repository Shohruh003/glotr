import { SxProps, Theme } from "@mui/material";

const styles: Record<string, SxProps<Theme>> = {
    groupIcons: {
        // borderRadius: "50%",
        padding: 1,
        fontSize: "14px",
        minWidth: "40px",
        height: "40px",
        marginLeft: "10px",
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
};

export default styles;