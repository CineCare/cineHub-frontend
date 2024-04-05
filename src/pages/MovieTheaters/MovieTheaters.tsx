import { Card, CardActionArea, CardContent, CardMedia, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import "./MovieTheaters.scss";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

const MovieTheater: React.FC = () => {
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};
	const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard", "Omar Alexander", "Carlos Abbott", "Miriam Wagner", "Bradley Wilkerson", "Virginia Andrews", "Kelly Snyder"];
	const names2 = ["Billy Crawford", "Van Helsing", "April O' Neil", "Ralph La Casse", "Omar & Fred", "Carlos Santana", " Wagner & Mozart", "Bradley Cooper", "Virginia Grimaldia", "Kelly Rownie"];
	const names3 = ["10km", "20km", "30km", "40km", "50km", "60km", "80km", "90km", "100km", "+100km"];
	const names4 = ["PMR", "Casque", "Braille", "Audio description", "Place adaptée"];
	const datas = [
		{
			name: "Cinema 1",
			utilities: [],
			address: "402, Avenue Timùut",
			image: "https://cdn.pixabay.com/photo/2023/04/06/09/39/camera-7903435_960_720.jpg",
		},
		{
			name: "Cinema 2",
			utilities: [],
			address: "402, Avenue Timùut",
			image: "https://cdn.pixabay.com/photo/2015/07/21/17/45/cinema-854178_960_720.jpg",
		},
		{
			name: "Cinema 3",
			utilities: [],
			address: "402, Avenue Timùut",
			image: "https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_960_720.jpg",
		},
		{
			name: "Cinema 4",
			utilities: [],
			address: "402, Avenue Timùut",
			image: "https://cdn.pixabay.com/photo/2016/03/07/00/00/cinema-1241422_960_720.jpg",
		},
		{
			name: "Cineplex Odeon - Quartier latin",
			utilities: [],
			address: "350, rue Émery, Montréal, QC H2X 1J1",
			image: "https://live.staticflickr.com/4085/4984558538_4f41b2cbb4_b.jpg",
		},
		{
			name: "Cinema Guzzo Méga-Plex",
			utilities: [],
			address: "5940, des Grandes Prairies, Montréal (Québec), H1P 1A4",
			image: "https://www.cinemasguzzo.com/DATA/CINEMA/6~v~mega-plex-lacordaire-16.jpg",
		},
	];

	const [personName, setPersonName] = React.useState<string[]>([]);
	const [personName2, setPersonName2] = React.useState<string[]>([]);
	const [personName3, setPersonName3] = React.useState<string[]>([]);
	const [personName4, setPersonName4] = React.useState<string[]>([]);

	const handleChange = (event: SelectChangeEvent<typeof personName>) => {
		event.stopPropagation();
		const {
			target: { value },
		} = event;
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};
	const handleChange2 = (event: SelectChangeEvent<typeof personName2>) => {
		event.stopPropagation();
		const {
			target: { value },
		} = event;
		setPersonName2(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};
	const handleChange3 = (event: SelectChangeEvent<typeof personName3>) => {
		event.stopPropagation();
		const {
			target: { value },
		} = event;
		setPersonName3(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};
	const handleChange4 = (event: SelectChangeEvent<typeof personName4>) => {
		event.stopPropagation();
		const {
			target: { value },
		} = event;
		setPersonName4(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	const position: LatLngExpression = [45.50268784231722, -73.61823722698573];

	return (
		<Grid
			container
			sx={{ marginTop: "1rem",height:"calc(100vh - 135px)", gap:"2rem", width:"100vw", justifyContent:"center" }}>
			<Grid container xs={3} >
				<TextField
					id="searchbar"
					label="Barre de recherche"
					fullWidth
				/>
				<Grid
					container
					rowSpacing={2}
					columnSpacing={2}>
					<Grid
						item
						xs={6}>
						<FormControl fullWidth>
							<InputLabel id="demo1">Genre</InputLabel>
							<Select
								labelId="demo1"
								id="demo1"
								fullWidth
								value={personName}
								onChange={handleChange}
								input={<OutlinedInput label="Name" />}
								MenuProps={MenuProps}>
								{names.map(name => (
									<MenuItem
										key={name}
										value={name}>
										{name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid
						item
						xs={6}>
							<FormControl fullWidth>
								<InputLabel id="demo2">Filtre 2</InputLabel>
								<Select
									labelId="demo2"
									id="demo2"
									fullWidth
									value={personName2}
									onChange={handleChange2}
									input={<OutlinedInput label="Name" />}
									MenuProps={MenuProps}>
									{names2.map(name => (
										<MenuItem
											key={name}
											value={name}>
											{name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
					</Grid>

					<Grid
						item
						sx={{marginTop:"2rem"}}
						xs={6}>
						<FormControl fullWidth>
							<InputLabel id="demo3">Distance</InputLabel>
							<Select
								labelId="demo3"
								id="demo3"
								fullWidth
								value={personName3}
								onChange={handleChange3}
								input={<OutlinedInput label="Name" />}
								MenuProps={MenuProps}>
								{names3.map(name => (
									<MenuItem
										key={name}
										value={name}>
										{name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid
						item
						sx={{marginTop:"2rem"}}
						xs={6}>
							<FormControl fullWidth>
								<InputLabel id="demo4">Dispositifs</InputLabel>
								<Select
									labelId="demo4"
									id="demo4"
									fullWidth
									value={personName4}
									onChange={handleChange4}
									input={<OutlinedInput label="Name" />}
									MenuProps={MenuProps}>
									{names4.map(name => (
										<MenuItem
											key={name}
											value={name}>
											{name}
										</MenuItem>
									))}
								</Select>
							</FormControl>
					</Grid>
				</Grid>
				<MapContainer
					className="mapContainer"
					center={position}
					zoom={13}
					scrollWheelZoom={true}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position}>
						<Popup>
							Cinéma de l'université. <br /> Batiment C, 2ème étage.
						</Popup>
					</Marker>
				</MapContainer>
			</Grid>
			<Grid
				container
				xs={8}>
				{datas.map(obj => (
					<Grid
						item
						xs={4}>
						<Card sx={{ maxWidth: 400 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="300"
									image={obj.image}
									alt="green iguana"
								/>
								<CardContent>
									<Typography>{obj.name}</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

export default MovieTheater;
