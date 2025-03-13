import { FC, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Locale from "./locale";
import useLocale from "../../../../hooks/useLocale";
import OrderSheetDone from "../OrderSheetDone/OrderSheetDone";

interface IOrderSheetProps {
  open: boolean;
  onClose: () => void;
}

const OrderSheet: FC<IOrderSheetProps> = ({ open, onClose }) => {
  const locale = useLocale(Locale);
const [orderDoneOpen, setOrderDoneOpen] = useState(false); 

const ConfirmButton = () => {
    onClose(); // OrderSheet'ni yopish
    setTimeout(() => setOrderDoneOpen(true), 300); // OrderSheet yopilgandan keyin OrderSheetDone'ni ochish
  };
  
  return (
    <>
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, position: "relative" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems='center'
          sx={{
            padding: "16px 16px 16px 24px",
            background: "#F5F6F8",
          }}
        >
          <Typography variant="h6">{locale.orderLabel}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box p={3}>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: "bold" }}>
            {locale.verificationCodeLabel}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {locale.numberLabel}
          </Typography>

          <TextField
            fullWidth
            label={locale.codeInputLabel}
            variant="outlined"
            sx={{ mb: 2 }}
          />

          <Typography variant="body2" sx={{ mb: 2, color: "error.main" }}>
            {locale.timeText} <strong>1:52</strong>
          </Typography>

          <Button
            fullWidth
            variant="contained"
            color="error"
            sx={{ borderRadius: 2, mb: 1 }}
            onClick={ConfirmButton}
          >
            {locale.confirmButtonLabel}
          </Button>

          <Button
            fullWidth
            variant="outlined"
            sx={{ borderRadius: 2 }}
            onClick={onClose}
          >
            {locale.cancelButtonLabel}
          </Button>
        </Box>
      </Box>
    </Drawer>
    <OrderSheetDone open={orderDoneOpen} onClose={() => setOrderDoneOpen(false)} />
    </>
  );
  
};

export default OrderSheet;
