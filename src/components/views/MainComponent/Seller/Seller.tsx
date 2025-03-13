import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AmazonLogo from "../../../../assets/amazon.png";
import Locale from "./locale";
import useLocale from "../../../../hooks/useLocale";
import { useNavigate } from "react-router-dom";

const SellerCard = () => {
  const locale = useLocale(Locale);
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: '100%', borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight={600}>
            {locale.seller}
          </Typography>
          <Typography color="error" sx={{ cursor: "pointer" }}>
            {locale.websiteLabel}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mt={2} mb={3}>
          <Box
            sx={{
              padding: "5px 20px",
              border: "1px solid #E8EAEC",
              borderRadius: "8px",
            }}
          >
            <img src={AmazonLogo} alt="Amazon" width={40} height={40} />
          </Box>
          <Box ml={2}>
            <Typography fontWeight={600}>Amazon</Typography>
            <Typography color="gray" fontSize={14}>
              г. Ташкент, Узбекистан
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" mt={2}>
          <AccessTimeIcon color="error" fontSize="small" />
          <Typography ml={1} fontSize={14}>
            {locale.openUntilLabel}
          </Typography>
          <Typography
            ml={1}
            color="error"
            fontSize={14}
            sx={{ cursor: "pointer" }}
          >
            {locale.scheduleLabel}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mt={2}>
          <PhoneIcon color="error" fontSize="small" />
          <Typography ml={1} fontSize={14}>
            +998 99 ...
          </Typography>
          <Typography
            ml={1}
            color="error"
            fontSize={14}
            sx={{ cursor: "pointer" }}
          >
            {locale.showNumber}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mt={2}>
          <LanguageIcon color="error" fontSize="small" />
          <Typography
            ml={1}
            fontSize={14}
            color="error"
            sx={{ cursor: "pointer" }}
          >
            amazon.com
          </Typography>
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          mt={3}
        >
          <Button
            variant="contained"
            color="error"
            sx={{ fontSize: "14px", textTransform: "none" }}
            onClick={() => navigate("/")}
          >
            {locale.allProductsButton}
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              backgroundColor: "#FFDADA",
              color: "red",
              fontSize: "14px",
              textTransform: "none",
            }}
          >
            {locale.requestCallButton}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SellerCard;
