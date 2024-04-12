import { Settings, AccountCircle, ExitToApp } from "@mui/icons-material";

export 	const appBarHeight = "4rem";
export const navbarSettings = ["Profil", "Mon compte", "Se déconnecter"];
export const iconMap: { [key: string]: JSX.Element } = {
  "Mon compte": <Settings />,
  Profil: <AccountCircle />,
  "Se déconnecter": <ExitToApp />,
};

