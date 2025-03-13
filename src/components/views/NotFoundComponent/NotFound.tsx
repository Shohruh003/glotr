import { FC } from "react";
import { Container, Typography } from "@mui/material";
import useLocale from "../../../hooks/useLocale";
import Locale from "./locale";
import styles from "./styles";

const NotFound: FC = () => {
  const locale = useLocale(Locale);

  return (
    <Container sx={styles.container}>
      <Typography variant="h3" color="error" gutterBottom>
        {locale.title}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        {locale.description}
      </Typography>
    </Container>
  );
};

export default NotFound;
