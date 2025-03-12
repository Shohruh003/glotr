import { FC } from "react";
import { Box, Stack, Typography, Button} from "@mui/material";
import styles from './styles';
import ChangeLangMenu from "../../common/ChangeLang";
import { useNavigate } from "react-router-dom";
import useLocale from "../../../hooks/useLocale";
import Locale from "./locale";

const Header: FC = () => {
    const navigate = useNavigate();
    const locale = useLocale(Locale);

    return (
        <Box sx={styles.header} boxShadow={2}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Stack direction={'row'} alignItems={'center'}>
            <Typography variant="h4" marginRight={8}>
              {locale.title}
            </Typography>
          </Stack>
          <Stack direction={'row'} gap={2}>
            <Button onClick={ () => navigate('/profile')}>
              {locale.profile}
            </Button>
            <ChangeLangMenu /> 
          </Stack>
        </Stack>
      </Box>
    )
}

export default Header;