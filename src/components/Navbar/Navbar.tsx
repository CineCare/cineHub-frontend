import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/img/Logo-base-white.svg";
import logoText from "../../assets/img/Logo-text-white.svg";
import { AccountCircle, Settings, ExitToApp } from "@mui/icons-material";
import { AppBar, Toolbar, Container, Button, Tooltip, TextField, IconButton, Menu, MenuItem, ListItemIcon, Divider, Typography, Box, Avatar, useTheme, Hidden } from "@mui/material";

const pages = ["movie-theaters", "production-studios", "dashboard"];
const pagesTranslation: { [key: string]: string } = {
	"movie-theaters": "Salles de cinéma",
	"production-studios": "Boîtes de production",
	dashboard: "Journal de bord",
};
const settings = ["Profil", "Mon compte", "Se déconnecter"];

const Navbar: React.FC = () => {
	const theme = useTheme();
	const secondaryColor = theme.palette.secondary.main;

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
						<Hidden smDown>
							<img
								src={logoText}
								alt="Logo textuel"
								style={{ height: "2.5rem" }}
							/>
						</Hidden>
					</Link>
					<div style={{ flexGrow: 50, textAlign: "center" }}>
						<TextField
							id="search"
							label="Rechercher"
							variant="outlined"
							size="small"
							color="secondary"
							InputProps={{
								endAdornment: <SearchIcon />,
							}}
						/>
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
							{pages.map(page => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map(page => (
							<Button
								key={page}
								component={Link}
								onClick={handleCloseNavMenu}
								to={`/${page.toLowerCase().replace(/\s/g, "-")}`}
								sx={{
									borderRadius: 0,
									color: "white",
									display: "block",
									borderBottom: "2px solid transparent",
									height: appBarHeight,
									"&:hover": {
										borderBottomColor: secondaryColor,
										backgroundColor: "transparent",
									},
								}}>
								{pagesTranslation[page]}
							</Button>
						))}
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
							sx={{ mt: "45px" }}
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
