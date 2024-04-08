import { Button, Checkbox, Container, Dialog, DialogContent, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Slider, Stack, TextField, Typography, FormGroup } from "@mui/material";
import Select from "@mui/material/Select";
import "./Filter.scss";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";

const Filter: React.FC = () => {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [fontSize, setFontSize] = React.useState<number>(30);
	const [fullWidth] = React.useState(true);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

/**
 * La fonction handleChangeFontSize met à jour la taille de la police en fonction d'une nouvelle
 * valeur.
 * @param {Event} _event - Le paramètre `_event` est un objet événement qui représente l'événement qui
 * a déclenché le changement de taille de police. Il peut s'agir d'un événement de clic, d'un événement
 * d'entrée ou de tout autre type d'événement que la fonction écoute.
 * @param {number | number[]} newValue - Le paramètre `newValue` dans la fonction
 * `handleChangeFontSize` est la nouvelle valeur de taille de police qui sera définie lorsque la taille
 * de police est modifiée. Il peut s'agir d'un nombre unique ou d'un tableau de nombres.
 */
const handleChangeFontSize = (_event: Event, newValue: number | number[]) => {
		setFontSize(newValue as number);
	};

	const [selectedProfile, setSelectedProfile] = React.useState("");
	const [selectedFont, setSelectedFont] = React.useState("");
	const [selectedColor, setSelectedColor] = React.useState("");
	const [selectedHelpLevel, setSelectedHelpLevel] = React.useState("");

	const handleChangeProfile = (event: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedProfile(event.target.value);
	};
	const handleChangeFont = (event: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedFont(event.target.value);
	};
	const handleChangeColor = (event: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedColor(event.target.value);
	};
	const handleChangeHelpLevel = (event: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedHelpLevel(event.target.value);
	};

	return (
		<Container
			sx={{
				position: "relative",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "6vh",
				backgroundColor: theme.palette.primary.light,
				padding: "1.5rem",
				borderRadius: "20px",
				overflow: "hidden",
				clipPath: "polygon(37% 0, 63% 0, 61% 100%, 39% 100%)",
				cursor: "pointer",
			}}>
			<Typography
				variant="h5"
				component="div"
				onClick={handleClickOpen}>
				Réglages utilisateur
			</Typography>
			<Dialog
				fullWidth={fullWidth}
				maxWidth="lg"
				open={open}
				onClose={handleClose}
				aria-labelledby="responsive-dialog-title">
				<DialogContent>
					<Grid
						container
						spacing={4}>
						<Grid
							item
							xs={4}
							container
							direction="row">
							<Grid
								container
								spacing={1}>
								<Grid
									item
									xs={6}>
									<Grid
										item
										xs={10}>
										<Typography variant="body1">Police d'écriture</Typography>
										<Select
											value={selectedFont}
											onChange={handleChangeFont}
											fullWidth>
											<MenuItem value="option1">Option 1</MenuItem>
											<MenuItem value="option2">Option 2</MenuItem>
										</Select>
									</Grid>
									<Grid
										item
										sx={{marginTop:4}}
										xs={10}>
										<Typography variant="body1">Couleurs</Typography>
										<Select
											value={selectedColor}
											onChange={handleChangeColor}
											fullWidth>
											<MenuItem value="option1">Option 1</MenuItem>
											<MenuItem value="option2">Option 2</MenuItem>
										</Select>
									</Grid>
								</Grid>
								<Grid
									item
									xs={6}>
									<Typography
										variant="h6"
										gutterBottom>
										Niveau d'aide
									</Typography>
									<RadioGroup
										value={selectedHelpLevel}
										onChange={handleChangeHelpLevel}>
										<FormControlLabel
											value="option1"
											control={<Radio />}
											label="Pas d'aide"
										/>
										<FormControlLabel
											value="option2"
											control={<Radio />}
											label="Niveau 1"
										/>
										<FormControlLabel
											value="option3"
											control={<Radio />}
											label="Niveau  2"
										/>
										<FormControlLabel
											value="option4"
											control={<Radio />}
											label="Niveau 3"
										/>
									</RadioGroup>
								</Grid>
								<Grid
									item
									xs={12}>
									<Typography variant="body1">Taille de police</Typography>
									<Stack
										spacing={2}
										direction="row"
										sx={{ mb: 1 }}
										alignItems="center">
										<TextIncreaseIcon fontSize="small" />
										<Slider
											aria-label="Taille de police"
											value={fontSize}
											onChange={handleChangeFontSize}
										/>
										<TextIncreaseIcon fontSize="large" />
									</Stack>
								</Grid>
							</Grid>
						</Grid>

						<Grid
							item
							xs={4}>
							<Typography variant="body1">Choisir un profil enregistré</Typography>
							<Select
								value={selectedProfile}
								onChange={handleChangeProfile}
								fullWidth>
								<MenuItem value="option1">Profil 1</MenuItem>
								<MenuItem value="option2">profil 2</MenuItem>
							</Select>
							<TextField
								fullWidth
								id="outlined-basic"
								label="Nom du réglage"
								variant="outlined"
								sx={{marginTop:4, marginBottom: 4}}
							/>

							<Grid
								container
								spacing={1}
								alignContent="stretch"
								wrap="nowrap">
							<FormControlLabel
								control={<Checkbox />}
								label="Enregistrer mes réglages"
							/>
							<Button
								color="success"
								variant="outlined"
								onClick={handleClose}
								autoFocus>
								Valider
							</Button>
							</Grid>
						</Grid>

						<Grid
							item
							xs={4}>
							<Typography variant="body1">filtre(s) à appliquer</Typography>
							<FormGroup>
								<Grid
									item
									xs={12}>
									<FormControlLabel
										control={<Checkbox />}
										label="Option 1"
									/>
									<FormControlLabel
										control={<Checkbox />}
										label="Option 2"
									/>
								</Grid>
								<Grid
									container
									xs={12}>
									<FormControlLabel
										control={<Checkbox />}
										label="Option 3"
									/>
									<FormControlLabel
										control={<Checkbox />}
										label="Option 4"
									/>
								</Grid>
								<Grid
									container
									xs={12}>
									<FormControlLabel
										control={<Checkbox />}
										label="Option 5"
									/>
									<FormControlLabel
										control={<Checkbox />}
										label="Option 6"
									/>
								</Grid>
							</FormGroup>
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
		</Container>
	);
};

export default Filter;

