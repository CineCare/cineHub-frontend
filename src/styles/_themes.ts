import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#33669B",
		},
		secondary: {
			main: "#725295",
		},
		// contrastThreshold: 4.5,
		contrastThreshold: 5,
	},
	typography: {
		fontSize: 20,
		fontFamily: ["'roboto'", "serif"].join(","),
		h1: {
			fontFamily: "'Roboto'",
			fontSize: 50,
		},
		h2: {
			fontFamily: "'Roboto'",
			fontSize: 40,
		},
		h3: {
			fontFamily: "'Roboto'",
		},
		h4: {
			fontFamily: "'Roboto'",
		},
		h5: {
			fontFamily: "'Roboto'",
		},
		h6: {
			fontFamily: "'Roboto'",
		},
	},
});

		// tertiary: {
		// 	main: "#f50057",