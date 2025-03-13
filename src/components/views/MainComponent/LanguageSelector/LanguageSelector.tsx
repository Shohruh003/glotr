import { FC, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Locale from "./locale";
import useLocale from "../../../../hooks/useLocale";


const LanguageSheet: FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
    const [language, setLanguage] = useState(localStorage.getItem("lang") || "ru");
    const locale = useLocale(Locale)
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLanguage(event.target.value);
    };
  
    const handleSave = () => {
      localStorage.setItem("lang", language);
      window.location.reload();
    };
  
    return (
      <Drawer anchor="bottom" open={open} onClose={onClose}>
        <Box sx={{ width: "100%", borderRadius: "12px 12px 0 0", overflow: "hidden" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ padding: "16px", background: "#fff", borderBottom: "1px solid #ddd" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>{locale.changeLanguage}</Typography>
            <IconButton onClick={onClose}>  
              <CloseIcon />
            </IconButton>
          </Stack>
  
          <Box p={2}>
            <RadioGroup value={language} onChange={handleChange}>
              <FormControlLabel value="ru" control={<Radio />} label="Русский" />
              <FormControlLabel value="uz" control={<Radio />} label="O‘zbekcha" />
              <FormControlLabel value="eng" control={<Radio />} label="English" />
            </RadioGroup>
  
            <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleSave}>
              {locale.saveButton}
            </Button>
          </Box>
        </Box>
      </Drawer>
    );
  };
  

export default LanguageSheet;
