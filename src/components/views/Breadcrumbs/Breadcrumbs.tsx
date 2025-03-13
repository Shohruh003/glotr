import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import Locale from "./locale";
import useLocale from "../../../hooks/useLocale";

const BreadcrumbsNav = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const locale = useLocale(Locale)

  // ID yoki dinamik segmentlarni yashirish
  const cleanedPathnames = pathnames.filter((p) => isNaN(Number(p)));

  // O'zbek yoki ruscha nomlar bilan almashtirish
  const getTranslatedName = (value: string) => {
    const translations: Record<string, string> = {
      products: locale.products,
      product: locale.product,
    };
    return translations[value] || value;
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} to="/" underline="hover">
        {locale.homePage}
      </Link>
      {cleanedPathnames.map((value, index) => {
        const to = `/${cleanedPathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === cleanedPathnames.length - 1;
        const translatedName = getTranslatedName(value);

        return isLast ? (
          <Typography sx={{color: (theme) => theme.palette.text.primary}} key={to}>
            {translatedName}
          </Typography>
        ) : (
          <Link component={RouterLink} sx={{color: (theme) => theme.palette.text.primary}} to={to} underline="hover" key={to}>
            {translatedName}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
