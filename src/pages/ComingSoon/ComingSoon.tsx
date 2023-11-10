import "./ComingSoon.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { AlertTitle, Stack, ThemeProvider, createTheme, styled } from "@mui/material";
import { COMINGSOON } from "../../assets/translation/french.json";
import { useState } from "react";
import { postEmailFetch } from "../../services/fetcher";
import Alert from "@mui/material/Alert";
import translations from "../../assets/strapi";

export default function ComingSoon() {
	const CustomButton = styled(Button)({
		fontFamily: ["Atkinson Hyperlegible"],
		"&:hover": {
			backgroundColor: "#191a19",
			color: "#FCF2E3",
		},
	});

	const theme = createTheme({
		palette: {
			primary: { main: "#FCF2E3" },
			secondary: { main: "#CE3533" },
		},
	});

	const [email, setEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleChange = (event: { target: { value: any } }) => {
		setEmail(event.target.value);
	};

	async function handleClick() {
		const apiToken = import.meta.env.VITE_REACT_APP_API_TOKEN;
		const req = await postEmailFetch(
			email,
			apiToken
		);
		const isErrorResponse = req.error ? true : false;
		if (isErrorResponse) {
			setErrorMessage(translations[req.error.message]);
			setSuccessMessage("");

			setTimeout(() => {
				setErrorMessage("");
			}, 5000);
		} else {
			setErrorMessage("");
			setSuccessMessage("Email envoyé avec succès !");
			setEmail("");

			setTimeout(() => {
				setSuccessMessage("");
			}, 10000);
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<main className="container">
				{errorMessage && (
					<Stack spacing={2}>
						<Alert severity="error" onClose={() => setErrorMessage("")}>
							<AlertTitle>Erreur</AlertTitle>
							{errorMessage}
						</Alert>
					</Stack>
				)}

				{successMessage && (
					<Stack spacing={2}>
						<Alert severity="success" onClose={() => setSuccessMessage("")}>
							<AlertTitle>Succès</AlertTitle>
							{successMessage}
						</Alert>
					</Stack>
				)}
				<div className="filterMask"></div>
				<div className="leftPartContainer">
					<h1 className="title">{COMINGSOON.title}</h1>
					<p>{COMINGSOON.content}</p>
				</div>
				<div className="rightPartContainer"></div>
				<div className="bottomPartContainer">
					<Box className="newsletterForm" component="form">
						<p>{COMINGSOON.label}</p>
						<TextField
							onChange={handleChange}
							color="primary"
							value={email}
							size="small"
							margin="dense"
							fullWidth
							id="emailNewsletter"
							name="emailNewsletter"
							label="Adresse mail"
							variant="filled"
						/>
						<CustomButton onClick={handleClick} color="primary" variant="contained" endIcon={<SendIcon />}>
							{COMINGSOON.button}
						</CustomButton>
					</Box>
				</div>
			</main>
		</ThemeProvider>
	);
}
