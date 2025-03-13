import { FC, useState } from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IProduct } from "../../../../types/types";
import Locale from "./locale";
import useLocale from "../../../../hooks/useLocale";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const locale = useLocale(Locale);

  const [liked, setLiked] = useState<boolean>(() => {
    const savedLikes = localStorage.getItem("likedProducts");
    return savedLikes ? JSON.parse(savedLikes)[product.id] || false : false;
  });

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((prev: boolean) => {
      const updatedLiked = !prev;
      const savedLikes = localStorage.getItem("likedProducts");
      const likes = savedLikes ? JSON.parse(savedLikes) : {};
      likes[product.id] = updatedLiked;
      localStorage.setItem("likedProducts", JSON.stringify(likes));
      return updatedLiked;
    });
  };

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      sx={{
        width: 170,
        borderRadius: 3,
        boxShadow: 2,
        paddingTop: 4,
        position: "relative",
        marginBottom: "10px",
        marginLeft: '2px',
        marginRight: '2px',
        cursor: "pointer",
      }}
      onClick={handleNavigate}
    >
      <IconButton
        onClick={handleLikeToggle}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: liked ? "red" : "#aaa",
          transition: "color 0.2s ease",
        }}
      >
        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>

      <Box display="flex" justifyContent="center">
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "contain",
            marginBottom: 12,
          }}
        />
      </Box>

      <CardContent>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {product.name}
        </Typography>

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

        <Typography
          variant="h6"
          sx={{ color: "red", fontWeight: "bold", margin: "5px 0 8px 0" }}
        >
          {product.price.toLocaleString()} сум
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.store}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          {product.location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
