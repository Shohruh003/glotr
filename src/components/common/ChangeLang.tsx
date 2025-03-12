import { Button, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import styles from './styles';
import ClearIcon from "@mui/icons-material/Clear";
import Flag from 'react-flagkit';

const ChangeLangMenu: FC = () => {
    const [isSettingGroupVisible, setIsSettingGroupVisible] = useState(false);

    const handleSettingButtonClick = () => {
        setIsSettingGroupVisible((prev) => !prev);
    };

    const changeLang = (lang: string) => {
        localStorage.setItem("lang", lang);
        window.location.reload();
    };

    return (
        <>
            {isSettingGroupVisible && (
                <Stack
                    direction={'row'}
                >
                    {/* <Button sx={styles.groupIcons} onClick={() => changeLang("uz")}>
                        <Flag country="UZ" style={{ width: 24, height: 24}} />
                        <Typography ml={1}>UZ</Typography>
                    </Button> */}
                    <Button sx={styles.groupIcons} onClick={() => changeLang("ru")}>
                        <Flag country="RU" style={{ width: 24, height: 24}} />
                        <Typography ml={1}>RU</Typography>
                    </Button>
                    <Button sx={styles.groupIcons} onClick={() => changeLang("eng")}>
                        <Flag country="GB" style={{ width: 24, height: 24}} />
                        <Typography ml={1}>ENG</Typography>
                    </Button>
                </Stack>
            )}
            <Button
                sx={styles.groupIcons}
                onClick={handleSettingButtonClick}
            >
                {isSettingGroupVisible ? <ClearIcon /> : <Flag country={localStorage.getItem("lang") == "uz" ? "UZ" : localStorage.getItem("lang") == "eng" ? "GB" : "RU"}/>}
            </Button>
        </>
    );
}

export default ChangeLangMenu;
