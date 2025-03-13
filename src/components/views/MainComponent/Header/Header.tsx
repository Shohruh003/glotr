import { FC, useState } from "react";
import { Box, Stack, InputAdornment, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles";
import Sidebar from "../SideBar/Sidebar";
import Locale from "./locale";
import useLocale from "../../../../hooks/useLocale";
import BreadcrumbsNav from "../../Breadcrumbs/Breadcrumbs";

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const locale = useLocale(Locale);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  return (
    <Box boxShadow={2} p={1} sx={styles.header}>
      <Stack direction="row" alignItems="center" spacing={2} mb={3}>
        <Box sx={{ cursor: "pointer" }} onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Box>

        <TextField
          variant="outlined"
          placeholder={locale.searchLabel}
          size="small"
          sx={{ flex: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <BreadcrumbsNav />

      <Sidebar open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default Header;
