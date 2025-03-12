import { SxProps } from "@mui/material";

const styles: Record<string, SxProps> = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    header: {
        padding: 3, 
        backgroundColor: '#fff', 
        zIndex: 1, 
        position: 'sticky', 
        top: 0,
    }
}

export default styles;