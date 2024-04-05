import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/img/logo-base-white.svg";
import logoText from "../../assets/img/logo-text-white.svg";
import Stack from "@mui/material/Stack";
import { useTheme } from "../../contexts/ThemeContext";
import { unreadableTheme, theme } from "../../styles/_themes";
import { AccountCircle, Settings, ExitToApp, CameraOutdoor, MenuBook, MovieCreation, SmartToy, AutoFixHigh, AutoFixOff } from "@mui/icons-material";
import { AppBar, Toolbar, Container, Button, Tooltip, IconButton, Menu, MenuItem, ListItemIcon, Divider, Typography, Box, Avatar, Hidden } from "@mui/material";

const settings = ["Profil", "Mon compte", "Se déconnecter"];

const Navbar: React.FC = () => {
	const { darkMode, toggleDarkMode } = useTheme();
	const chosenTheme = darkMode ? unreadableTheme : theme;
	const secondaryColor = chosenTheme.palette.secondary.main;

	const appBarHeight = "4rem";

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
	const handleCloseNavMenu = () => setAnchorElNav(null);
	const handleCloseUserMenu = () => setAnchorElUser(null);

	const iconMap: { [key: string]: JSX.Element } = {
		"Mon compte": <Settings />,
		Profil: <AccountCircle />,
		"Se déconnecter": <ExitToApp />,
	};

	return (
		<AppBar position="static">
			<Container maxWidth={false}>
				<Toolbar disableGutters>
					<Link to="/">
						<img
							src={logo}
							alt="Logo"
							style={{ height: "2.5rem", marginRight: "0.75rem" }}
						/>
						<Hidden lgDown>
							<img
								src={logoText}
								alt="Logo textuel"
								style={{ height: "2.5rem" }}
							/>
						</Hidden>
					</Link>
					<button
						onClick={toggleDarkMode}
						className="magicBtn">
						{darkMode ? <AutoFixHigh /> : <AutoFixOff />}
					</button>
					<div style={{ flexGrow: 50, textAlign: "end" }}>
						<Button
							startIcon={<SmartToy />}
							sx={{
								borderRadius: 0,
								color: "white",
							}}>
							Mon assistant personnel
						</Button>
					</div>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="Mon compte"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							<MenuItem
								component={Link}
								to="/movie-theaters"
								onClick={handleCloseNavMenu}>
								<ListItemIcon>
									<MovieCreation />
								</ListItemIcon>
								<Typography textAlign="center">Salles de cinéma</Typography>
							</MenuItem>
							<MenuItem
								component={Link}
								to="/production-studios"
								onClick={handleCloseNavMenu}>
								<ListItemIcon>
									<CameraOutdoor />
								</ListItemIcon>
								<Typography textAlign="center">Boîtes de production</Typography>
							</MenuItem>
							<MenuItem
								component={Link}
								to="/dashboard"
								onClick={handleCloseNavMenu}>
								<ListItemIcon>
									<MenuBook />
								</ListItemIcon>
								<Typography textAlign="center">Tableau de bord</Typography>
							</MenuItem>
						</Menu>
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						<Stack
							direction="row"
							spacing={2}>
							<Button
								key="movieTheaters"
								component={Link}
								onClick={handleCloseNavMenu}
								to="/movie-theaters"
								startIcon={<MovieCreation />}
								sx={{
									borderRadius: 0,
									color: "white",
									borderBottom: "2px solid transparent",
									height: appBarHeight,
									"&:hover": {
										borderBottomColor: secondaryColor,
										backgroundColor: "transparent",
									},
								}}>
								Salles de cinéma
							</Button>
							<Button
								key="productionStudios"
								component={Link}
								onClick={handleCloseNavMenu}
								to="/production-studios"
								startIcon={<CameraOutdoor />}
								sx={{
									borderRadius: 0,
									color: "white",
									borderBottom: "2px solid transparent",
									height: appBarHeight,
									"&:hover": {
										borderBottomColor: secondaryColor,
										backgroundColor: "transparent",
									},
								}}>
								Boîtes de production
							</Button>
							<Button
								key="dashboard"
								component={Link}
								onClick={handleCloseNavMenu}
								to="/dashboard"
								startIcon={<MenuBook />}
								sx={{
									borderRadius: 0,
									color: "white",
									borderBottom: "2px solid transparent",
									height: appBarHeight,
									"&:hover": {
										borderBottomColor: secondaryColor,
										backgroundColor: "transparent",
									},
								}}>
								Journal de bord
							</Button>
						</Stack>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Ouvrir les réglages">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}>
								<Avatar alt="avatar" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "3.1rem" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{settings.map((setting, index) => (
								<div key={setting}>
									<MenuItem onClick={handleCloseUserMenu}>
										<ListItemIcon>{iconMap[setting]}</ListItemIcon>
										<Typography
											variant="body1"
											textAlign="center">
											{setting}
										</Typography>
									</MenuItem>
									{index === 0 && <Divider />}
								</div>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
