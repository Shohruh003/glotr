import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../../hooks/useStores";
import { Box, Container } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import Header from "../Header/Header";
import Loader from "../../../common/Loader";

const Home: FC = observer(() => {
  const { productStore, postStore } = useStores();

  useEffect(() => {
    productStore.fetchProducts();
    postStore.fetchPosts();
  }, []);

  if (productStore.loading || postStore.loading) {
    return <Loader onLoad={true} />;
  }

  return (
    <Box sx={{background: (theme) => theme.palette.background.default}}> 
      <Header />
      <Container maxWidth="md" sx={{color: (theme) => theme.palette.text.primary}}>
        <Box
          component="ul"
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: 0,
            "@media (max-width: 379px)": {
              justifyContent: "center",
            },
          }}
        >
          {productStore.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Container>
      ;
    </Box>
  );
});

export default Home;
