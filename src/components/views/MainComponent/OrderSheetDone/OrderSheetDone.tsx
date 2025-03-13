import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Drawer,
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Locale from "./locale";
import useLocale from "../../../../hooks/useLocale";
import Image from "../../../../assets/image.png"
import { IProduct } from "../../../../types/types";
import { useStores } from "../../../../hooks/useStores";
import Loader from "../../../common/Loader";

interface IOrderSheetDoneProps {
  open: boolean;
  onClose: () => void;
}

const OrderSheetDone: FC<IOrderSheetDoneProps> = ({ open, onClose }) => {
  const locale = useLocale(Locale);
  const navigate = useNavigate();
  const { id } = useParams();
  const { productStore } = useStores();
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        const loadProduct = async () => {
          if (!productStore.products.length) {
            await productStore.fetchProducts();
          }
      
          const productId = Number(id);
          if (!isNaN(productId)) {
            const foundProduct = productStore.products.find(
              (p) => p.id === productId
            );
            if (foundProduct) {
              setProduct(foundProduct);
            }
          }
        };
      
        loadProduct();
      }, [id, productStore]);

      if (!product) {
          return <Loader onLoad={true} />;
        }

  const handleClose = () => {
    onClose();
    navigate("/");
  };

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box sx={{ width: 350, position: "relative" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            padding: "16px 16px 16px 24px",
            background: "#F5F6F8",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            {locale.orderLabel}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box p={3}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            mb={2}
            sx={{ background: "#F5F6F8", borderRadius: 2, p: 2 }}
          >
            <img
              src={Image}
              alt="Company Logo"
              style={{ width: 50, height: 50, borderRadius: 2 }}
            />
            <Box>
              <Typography fontWeight={600}>E-bidet Uzbekistan</Typography>
              <Typography variant="body2" color="gray">
                Toshkent, Shayxontohur tumani
              </Typography>
            </Box>
          </Stack>

          
          <Box
            sx={{
              background: "#F5F6F8",
              borderRadius: 2,
              padding: 2,
              textAlign: "center",
              mb: 2,
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 50, color: "green" }} />
            <Typography fontWeight={600} mt={1}>
              {locale.orderNumberLabel} <strong>{product.code}</strong>
            </Typography>
            <Typography variant="body2" color="gray">
              {locale.orderText}
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 2,
              mb: 4,
              border: "1px solid #E0E0E0",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            {[
              {
                icon: <FavoriteBorderIcon sx={{ color: "#374151" }} />,
                label: locale.companyLabel,
                value: "E-bidet Uzbekistan",
              },
              {
                icon: <LocationOnIcon sx={{ color: "#374151" }} />,
                label: locale.addressLabel,
                value: "г.Ташкент, ул. Саларская 35 В две строки",
              },
              {
                icon: <AccessTimeIcon sx={{ color: "#374151" }} />,
                label: locale.workingHours,
                value: (
                  <Link href="#" sx={{ color: "red", fontWeight: 600 }}>
                    {locale.lookLabel}
                  </Link>
                ),
              },
              {
                icon: <PhoneIcon sx={{ color: "#374151" }} />,
                label: locale.phoneNumber,
                value: "+998 90 900 90 90",
              },
              {
                icon: <LanguageIcon sx={{ color: "#374151" }} />,
                label: locale.websiteLabel,
                value: (
                  <Link
                    href="https://wellblue.gl.uz"
                    sx={{ color: "red", fontWeight: 600 }}
                  >
                    wellblue.gl.uz
                  </Link>
                ),
              },
            ].map((item, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                spacing={2}
                p={2}
                sx={{
                  borderBottom: index !== 4 ? "1px solid #E0E0E0" : "none",
                }}
              >
                {item.icon}
                <Typography
                  sx={{ ml: 2, flex: 1, fontSize: 12, fontWeight: 500 }}
                >
                  {item.label}
                </Typography>
                <Typography fontSize={12} fontWeight={500}>
                  {item.value}
                </Typography>
              </Stack>
            ))}
          </Box>

          <Button
            fullWidth
            variant="contained"
            color="error"
            sx={{ borderRadius: 2, fontWeight: 600 }}
            onClick={handleClose}
          >
            Все товары продавца
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default OrderSheetDone;
