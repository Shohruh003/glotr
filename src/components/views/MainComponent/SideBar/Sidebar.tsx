import { FC, useState } from "react";
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
  const [darkMode, setDarkMode] = useState(false);
  const [langModalOpen, setLangModalOpen] = useState(false);
  const locale = useLocale(Locale);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // const changeLanguage = (lang: string) => {
  //   console.log("Selected language:", lang);
  //   setLangModalOpen(false);
  // };

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
        <Box sx={{ width: "100%", bgcolor: "#F5F6F8", p: 2 }}>
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

        <Box sx={{ width: 300, bgcolor: "#F9F9F9" }}>
          <List>
            {menuItems.map(({ text, icon }) => (
              <ListItem
                key={text}
                sx={{
                  bgcolor: "#fff",
                  mb: 0.5,
                  borderRadius: 2,
                  "&:hover": { bgcolor: "#F3F3F3" },
                }}
              >
                <ListItemIcon sx={{ color: "#000" }}>{icon}</ListItemIcon>
                <ListItemText primary={text} sx={{ color: "#000" }} />
                <ChevronRightIcon sx={{ color: "#ccc" }} />
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            {extraItems.map(({ text, icon }) => (
              <ListItem
                key={text}
                sx={{
                  bgcolor: "#fff",
                  mb: 0.5,
                  borderRadius: 2,
                  "&:hover": { bgcolor: "#F3F3F3" },
                }}
              >
                <ListItemIcon sx={{ color: "#000" }}>{icon}</ListItemIcon>
                <ListItemText primary={text} sx={{ color: "#000" }} />
                <ChevronRightIcon sx={{ color: "#ccc" }} />
              </ListItem>
            ))}

            <ListItem onClick={() => setLangModalOpen(true)}
              sx={{
                bgcolor: "#fff",
                mb: 0.5,
                borderRadius: 2,
                cursor: "pointer",
                "&:hover": { bgcolor: "#F3F3F3" },
              }}>
              <ListItemIcon sx={{ color: "#000" }}>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={locale.appLanguage} sx={{ color: "#000" }} />
              <ChevronRightIcon sx={{ color: "#ccc" }} />
            </ListItem>

            <ListItem onClick={toggleDarkMode}
              sx={{
                bgcolor: "#fff",
                mb: 0.5,
                borderRadius: 2,
                cursor: "pointer",
                "&:hover": { bgcolor: "#F3F3F3" },
              }}>
              <ListItemIcon sx={{ color: "#000" }}>
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </ListItemIcon>
              <ListItemText primary={darkMode ? locale.lightModeLabel : locale.darkModeLabel} sx={{ color: "#000" }} />
              <ChevronRightIcon sx={{ color: "#ccc" }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      
      <LanguageSheet open={langModalOpen} onClose={() => setLangModalOpen(false)} />
    </>
  );
};

export default Sidebar;
