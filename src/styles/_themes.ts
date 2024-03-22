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
		contrastThreshold: 4.5,
	},
	typography: {
		fontSize: 16,
		fontFamily: ["'roboto'", "serif"].join(","),
		h1: {
			fontFamily: "'Roboto'",
		},
		h2: {
			fontFamily: "'Roboto'",
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