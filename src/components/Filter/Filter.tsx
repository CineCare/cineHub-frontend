import {
	Button,
	Checkbox,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogProps,
	DialogTitle,
	FormControl,
	FormControlLabel,
	FormGroup,
	InputLabel,
	MenuItem,
	Slider,
	Stack,
} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "./Filter.scss";
import * as React from "react";
import { VolumeDown, VolumeUp } from "@mui/icons-material";

const Filter: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState<number>(30);
	const [fullWidth] = React.useState(true);
	const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("md");
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };


	const handleChangeSlider = (_event: Event, newValue: number | number[]) => {
		setValue(newValue as number);
	};

	return (
		<Container sx={{ display: "flex", justifyContent: "center" }}>
			<Button
				variant="contained"
				onClick={handleClickOpen}>
				Réglages utilisateur
			</Button>
			<Dialog
				fullWidth={fullWidth}
				maxWidth={maxWidth}
				open={open}
				onClose={handleClose}
				aria-labelledby="responsive-dialog-title">
				<DialogTitle id="responsive-dialog-title">{"Définir vos paramètres de navigation"}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<Stack
							spacing={2}
							direction="row"
							sx={{ mb: 1 }}
							alignItems="center">
							<VolumeDown />
							<Slider
								aria-label="Volume"
								value={value}
								onChange={handleChangeSlider}
							/>
							<VolumeUp />
						</Stack>
						<FormGroup>
							<FormControlLabel
								control={<Checkbox defaultChecked />}
								label="Label"
							/>
							<FormControlLabel
								required
								control={<Checkbox />}
								label="Required"
							/>
							<FormControlLabel
								disabled
								control={<Checkbox />}
								label="Disabled"
							/>
						</FormGroup>
						<FormControl sx={{ m: 1, minWidth: 140 }}>
							<InputLabel id="demo-simple-select-helper-label">Pré-filtre</InputLabel>
							<Select
								labelId="demo-simple-select-helper-label"
								id="demo-simple-select-helper"
								value={maxWidth}
								label="Pré-filtre"
								onChange={handleMaxWidthChange}>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						autoFocus
						onClick={handleClose}>
						Annuler
					</Button>
					<Button
						onClick={handleClose}
						autoFocus>
						Valider
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
};

export default Filter;
