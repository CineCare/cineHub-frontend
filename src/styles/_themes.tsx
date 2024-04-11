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
		fontSize: 18,
		fontFamily: ["Roboto", "serif"].join(","),
		h1: {
			fontFamily: "Roboto",
			fontSize: 45,
		},
		h2: {
			fontFamily: "Roboto",
			fontSize: 35,
		},
		h3: {
			fontFamily: "Roboto",
		},
		h4: {
			fontFamily: "Roboto",
		},
		h5: {
			fontFamily: "Roboto",
		},
		h6: {
			fontFamily: "Roboto",
		},
		body1: {
			fontFamily: "Roboto",
			fontSize: 18,

		},
	},
});

export const unreadableTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#fdfdfd",
		},
		secondary: {
			main: "rgba(0, 0, 0, 0.04)",
		},
		contrastThreshold: 4.5,
	},
	typography: {
		fontSize: 18,
		fontFamily: ["'roboto'", "serif"].join(","),
		h1: {
			fontFamily: "'Roboto'",
			fontSize: 45,
			color: "#fdfdfd",
		},
		h2: {
			fontFamily: "'Roboto'",
			fontSize: 35,
			color: "#fdfdfd",
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
		body1: {
			fontFamily: "'Roboto'",
			color: "#fdfdfd",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				contained: {
					color: "white",
					backgroundColor: "#fdfdfd",
					"&:hover": {
						backgroundColor: "rgba(0, 0, 0, 0.04)",
					},
				},
			},
		},
	},
});