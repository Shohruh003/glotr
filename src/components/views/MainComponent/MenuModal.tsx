import { FC } from "react";
import { Stack, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Close } from "@mui/icons-material";
import ChangeLangMenu from "../../common/ChangeLang";
import useLocale from "../../../hooks/useLocale";
import Locale from "./locale";
import { useNavigate } from "react-router-dom";

interface IProps {
    openModal: boolean;
    handleModalToggle: () => void;
}

const MenuModal: FC<IProps> = ({ openModal, handleModalToggle }) => {
    const locale = useLocale(Locale);
    const navigate = useNavigate();

    return (
        <Dialog open={openModal} onClose={handleModalToggle} fullScreen={true}>
        <DialogTitle>{locale.menu}</DialogTitle>
        <DialogContent>
          <Stack direction="column" spacing={2}>
            <Button onClick={handleModalToggle}>
              {locale.close}
              <Close />
            </Button>
            <Button onClick={() => navigate('/profile')}>
              {locale.profile}
            </Button>
            <ChangeLangMenu />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalToggle} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default MenuModal;