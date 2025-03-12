import { FC } from "react";
import { Container, CircularProgress } from "@mui/material";
import styles from "./styles";


interface IProps {
    onLoad: boolean
}

const Loader: FC<IProps> = (onLoad) => {
    function showLoader() {
        return (
            <Container sx={styles.container}>
                <CircularProgress />
            </Container>
        )
    }
    
    if (onLoad) {
        return showLoader();
    }
    else {
        return null;
    }
}

export default Loader;