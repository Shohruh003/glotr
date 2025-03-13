import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  IconButton,
  Stack,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useStores } from "../../../../hooks/useStores";
import { IProduct } from "../../../../types/types";
import Locale from "./locale";
import Loader from "../../../common/Loader";
import useLocale from "../../../../hooks/useLocale";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import OrderSheet from "../OrderSheet/OrderSheet";

const Characteristic: FC = () => {
  const { id } = useParams();
  const { productStore } = useStores();
  const [product, setProduct] = useState<IProduct>();
  const [liked, setLiked] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false); 
  const locale = useLocale(Locale);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

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

  const visibleCharacteristics = showAll
    ? product.characteristics
    : product.characteristics.slice(0, 5);

  return (
    <>
      <Card
        sx={{
          maxWidth: "100%",
          boxShadow: 3,
          mx: "auto",
        }}
      >
        <Box position="relative">
          <CardMedia
            component="img"
            height="auto"
            image={product.image}
            alt={product.name}
          />
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleLikeToggle();
            }}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: liked ? "red" : "#aaa",
            }}
          >
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
        <CardContent>
          <Typography mb={1} variant="h6" fontWeight="bold">
            {product.name}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Typography
              variant="body2"
              sx={{
                color: product.stock === "yes" ? "green" : "red",
                fontSize: 14,
                marginTop: "5px",
              }}
            >
              {product.stock === "yes" ? locale.inStock : locale.outStock}
            </Typography>
            <Typography variant="body2">
              {locale.code} {product.code}
            </Typography>
          </Stack>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="error"
            mt={1.5}
            mb={2}
          >
            {product.price.toLocaleString()} сум/шт
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{ mt: 2, flex: 1 }}
              disabled={product.stock !== "yes"}
              onClick={() => setOrderOpen(true)}
            >
              {locale.purchaseLabel}
            </Button>

            <IconButton sx={{ mt: 2, bgcolor: "#fee", px: 2 }}>
              <TextsmsOutlinedIcon color="error" />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>


      <Card
        sx={{
          maxWidth: "100%",
          boxShadow: 3,
          mt: 3,
          mx: "auto",
          pb: 2
        }}
      >
        <Typography variant="h6" fontWeight="bold" mt={2} mb={1} ml={2}>
          {locale.characteristics}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              {visibleCharacteristics.map((char, index) => (
                <TableRow
                  key={index}
                  // sx={{
                  //   backgroundColor: index % 2 === 0 ? "#f5f5f5" : "white",
                  // }}
                  sx={{background: (theme) => theme.palette.background.default}}
                >
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {char.label}
                  </TableCell>
                  <TableCell>{char.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          fullWidth
          onClick={() => setShowAll(!showAll)}
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            color: (theme) => theme.palette.primary.main
          }}
        >
          {showAll ? locale.hideLabel : locale.showAllLabel}{" "}
          {showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Card>

      <OrderSheet open={orderOpen} onClose={() => setOrderOpen(false)} />
    </>
  );
};

export default Characteristic;
