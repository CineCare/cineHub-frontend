import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/fonts.scss";
import "./styles/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import MovieTheaters from "./pages/MovieTheaters/MovieTheaters.tsx";
import Error from "./pages/Error/Error.tsx";
import { ThemeProvider as CustomThemeProvider } from './contexts/ThemeContext'
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar.tsx";
import ProductionStudios from "./pages/ProductionStudios/ProductionStudios.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Filter from "./components/Filter/Filter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<CustomThemeProvider>
			<CssBaseline />
			<Router>
				<Navbar />
				<Filter />
				<Routes>
					<Route
						path="/"
						element={<Home />}></Route>
					<Route
						path="/movie-theaters"
						element={<MovieTheaters />}></Route>
					<Route
						path="/production-studios"
						element={<ProductionStudios />}></Route>
					<Route
						path="/dashboard"
						element={<Dashboard />}></Route>
					<Route
						path="*"
						element={<Error />}></Route>
				</Routes>
			</Router>
		</CustomThemeProvider>
	</React.StrictMode>
);
