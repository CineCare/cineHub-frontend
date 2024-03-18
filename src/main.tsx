import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/fonts.scss";
import "./styles/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Error from "./pages/Error/Error.tsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar.tsx";
import {theme} from './styles/_themes.ts'; 

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Navbar />
				<Routes>
					<Route
						path="/"
						element={<Home />}></Route>
					<Route
						path="*"
						element={<Error />}></Route>
				</Routes>
			</Router>
		</ThemeProvider>
	</React.StrictMode>
);
