import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useStores } from "../../../../hooks/useStores";
import { IProduct } from "../../../../types/types";
import Locale from "./locale";
import Loader from "../../../common/Loader";
import useLocale from "../../../../hooks/useLocale";

const Description: FC = () => {
  const { id } = useParams();
  const { productStore } = useStores();
  const [product, setProduct] = useState<IProduct>();
  const [showAll, setShowAll] = useState(false);
  const locale = useLocale(Locale);

  useEffect(() => {
    const productId = Number(id);
    if (!isNaN(productId)) {
      const foundProduct = productStore.products.find(
        (p) => p.id === productId
      );
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [id, productStore.products]);

  if (!product) {
    return <Loader onLoad={true} />;
  }

  const visibleDescription = showAll
    ? product.description
    : product.description.slice(0, Math.ceil(product.description.length / 2)) + "...";

  return (
    <>
      <Card
        sx={{
          maxWidth: "100%",
          boxShadow: 3,
          mx: "auto",
        }}
      >
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            {locale.description}
          </Typography>
          <Typography variant="body2">
            {visibleDescription}
          </Typography>

          <Button
            fullWidth
            onClick={() => setShowAll(!showAll)}
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              color: (theme) => theme.palette.primary.main,
            }}
          >
            {showAll ? locale.hideLabel : locale.showAllLabel}{" "}
            {showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Description;
