import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Characteristic from "../Characteristic/Characteristic";
import Description from "../Characteristic/Description"; 
import Header from "../Header/Header";
import Locale from "./locale"
import useLocale from "../../../../hooks/useLocale";
import SellerCard from "../Seller/Seller";

const ProductPage = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const locale = useLocale(Locale)

  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Tabs
        value={tabIndex}
        onChange={(_, newIndex) => setTabIndex(newIndex)}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label={locale.description}/>
        <Tab label={locale.characteristic} />
        <Tab label={locale.seller}/>
      </Tabs>

      <Box sx={{ p: 2 }}>
        {tabIndex === 0 && <Description />}
        {tabIndex === 1 && <Characteristic />}
        {tabIndex === 2 && <SellerCard />}
      </Box>
    </Box>
  );
};

export default ProductPage;
