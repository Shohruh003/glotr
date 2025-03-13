import { FC, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../../hooks/useStores";
import { Box, Container } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import Header from "../Header/Header";
import Loader from "../../../common/Loader";

const Home: FC = observer(() => {
  const { productStore, postStore } = useStores();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    productStore.fetchProducts();
    postStore.fetchPosts();
  }, []);

  if (productStore.loading || postStore.loading) {
    return <Loader onLoad={true} />;
  }

  const filteredProducts = productStore.products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{background: (theme) => theme.palette.background.default}}> 
      <Header onSearch={setSearchQuery} />
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
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Container>
    </Box>
  );
});

export default Home;
