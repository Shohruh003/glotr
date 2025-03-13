import { FC, useEffect, useState } from "react";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CommentIcon from "@mui/icons-material/Comment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PercentIcon from "@mui/icons-material/Percent";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import Locale from "./locale";
import useLocale from "../../../../hooks/useLocale";
import LanguageSheet from "../LanguageSelector/LanguageSelector";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ open, onClose }) => {
  const locale = useLocale(Locale);
  const [langModalOpen, setLangModalOpen] = useState(false);
  
  const getSavedTheme = () => {
    return localStorage.getItem("theme") || "light";
  };

  const [darkMode, setDarkMode] = useState<"light" | "dark">(getSavedTheme() as "light" | "dark");

  const toggleDarkMode = () => {
    const newMode = darkMode === "light" ? "dark" : "light";
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode);
    window.location.reload()
  };

  useEffect(() => {
    setDarkMode(getSavedTheme() as "light" | "dark");
  }, []);

  const menuItems = [
    { text: locale.orders, icon: <ShoppingBagIcon /> },
    { text: locale.reviews, icon: <CommentIcon /> },
    { text: locale.cards, icon: <CreditCardIcon /> },
    { text: locale.foodDelivery, icon: <RestaurantIcon /> },
    { text: locale.becomeSeller, icon: <StorefrontIcon /> },
    { text: locale.openPickupPoint, icon: <LocationOnIcon /> },
  ];

  const extraItems = [
    { text: locale.chats, icon: <ChatIcon /> },
    { text: locale.notifications, icon: <NotificationsIcon /> },
    { text: locale.promoCodes, icon: <PercentIcon /> },
  ];
  
  return (
    <>
      <Drawer anchor="left" open={open} onClose={onClose} sx={{
        "& .MuiDrawer-paper": { width: 300, overflowX: "hidden" },
      }}>
        <Box sx={{ width: "100%", background: (theme) => theme.palette.background.default, p: 2 }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar>A</Avatar>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                Azimov Shohruh
              </Typography>
              <Typography variant="body2">+998 94 2720705</Typography>
            </Box>
            <IconButton
              onClick={onClose}
              sx={{ position: "absolute", top: 0, right: 0 }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </Box>

        <Box sx={{ width: 300 }}>
          <List>
            {menuItems.map(({ text, icon }) => (
              <ListItem
                key={text}
                sx={{
                  background: (theme) => theme.palette.background.default,
                  mb: 0.5,
                  "&:hover": { opacity: 0.7 },
                }}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
                <ChevronRightIcon />
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            {extraItems.map(({ text, icon }) => (
              <ListItem
                key={text}
                sx={{
                  background: (theme) => theme.palette.background.default,
                  mb: 0.5,
                  "&:hover": { opacity: 0.7 },
                }}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
                <ChevronRightIcon />
              </ListItem>
            ))}

            <ListItem onClick={() => setLangModalOpen(true)}
              sx={{
                background: (theme) => theme.palette.background.default,
                mb: 0.5,
                cursor: "pointer",
                "&:hover": { opacity: 0.7 },
              }}>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={locale.appLanguage} />
              <ChevronRightIcon />
            </ListItem>

            <ListItem onClick={toggleDarkMode}
              sx={{
                background: (theme) => theme.palette.background.default,
                mb: 0.5,
                cursor: "pointer",
                "&:hover": { opacity: 0.7 },
              }}>
              <ListItemIcon>
                {darkMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </ListItemIcon>
              <ListItemText primary={darkMode === "light" ? locale.darkModeLabel : locale.lightModeLabel} />
              <ChevronRightIcon />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      
      <LanguageSheet open={langModalOpen} onClose={() => setLangModalOpen(false)} />
    </>
  );
};

export default Sidebar;
