import { Box, Card, CardActionArea, CardContent, CardMedia, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import "./MovieTheaters.scss";
import React, { useEffect } from "react";
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
	const datasOld = [
		{
			name: "Cinema 1",
			utilities: [],
			address: "402, Avenue Timùut",
			image: "https://i.ibb.co/Sv45XNR/meduse-vue-exterieure-de-meduse.jpg",
		},
		{
			name: "Cinema 2",
			utilities: [],
			address: "402, Avenue Timùut",
			image: "https://i.ibb.co/wWm5TMr/cinema-cartier-is-on.jpg",
		},
		{
			name: "Cinema 3",
			utilities: [],
			address: "402, Avenue Timùut",
			image: "https://aws-tiqets-cdn.imgix.net/images/content/ee95e375eeb04bfc96cb9aa6e2b7455d.jpg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=a10ed51e6e26cd6ddc2a56f0f02fc790",
		},
		{
			name: "Cinema 4",
			utilities: [],
			address: "402, Avenue Timùut",
			image: "https://m1.quebecormedia.com/emp/jdx-prod-images/8f7bcb9f-c099-4fe4-9704-16e1886225b1_JDX-NO-RATIO_WEB.jpg?impolicy=resize&quality=80&width=1400",
		},
		{
			name: "Cineplex Odeon - Quartier latin",
			utilities: [],
			address: "350, rue Émery, Montréal, QC H2X 1J1",
			image: "https://lh3.googleusercontent.com/p/AF1QipNH4EGRYjOTMsjL4BrakvbM-PcDlZvd9h4SyGFT=s1600-w640",
		},
		{
			name: "Cinema Guzzo Méga-Plex",
			utilities: [],
			address: "5940, des Grandes Prairies, Montréal (Québec), H1P 1A4",
			image: "https://photos.cinematreasures.org/production/photos/215322/1501695859/large.jpg?1501695859",
		},
	];

	type AccessibilityObject = {
		id: number;
		name: string;
		description: string;
		audio: string;
		picto: string;
	};
	type CinemaObject = {
		id: number;
		name: string;
		address1: string;
		address2?: string;
		city: string;
		postalCode: string;
		email: string;
		phone: string;
		photo?: string;
		gps: string;
		description?: string;
		audio?: string;
		createdAt: string;
		updatedAt: string;
		accessibilities: AccessibilityObject[];
	};

	const [datas, setDatas] = React.useState<CinemaObject[]>([]);
	const [markers, setMarkers] = React.useState<LatLngExpression[]>([]);

	const getGPSDatas = (datas: CinemaObject[]) => {
		const GPSArray = datas.map(elt => elt.gps);
		console.log(GPSArray);
		const formattedArray: LatLngExpression[] = [];
		GPSArray.forEach(gps => {
			const [long, lat] = gps.split(";");
			formattedArray.push([parseFloat(long), parseFloat(lat)]);
		});
		console.log(formattedArray);
		setMarkers(formattedArray);
	};

	useEffect(() => {
		const fetchCinemas = async () => {
			try {
				console.log("Intialisation de l'appel API");
				console.log("....");
				console.log("définition de l'adresse cible : 'https://cinehub-dev-backend.codevert.org/cinemas'");
				console.log("....");
				const objRequest: RequestInit = {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				};
				const response = await fetch("https://cinehub-dev-backend.codevert.org/cinemas", objRequest);
				const data = await response.json();
				setDatas(data);
				getGPSDatas(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchCinemas();
	}, []);

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

	const position: LatLngExpression = [46.81293938102650, -71.22127317412945];

	return (
		<Grid
			container
			sx={{ marginTop: "1rem", height: "calc(100vh - 135px)", gap: "2rem", width: "100vw", justifyContent: "center" }}>
			<Grid
				container
				xs={3}>
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
						sx={{ marginTop: "2rem" }}
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
						sx={{ marginTop: "2rem" }}
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
					zoom={12}
					scrollWheelZoom={true}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{markers.map((position, index) => (
					<Marker key={index} position={position}>
						<Popup>
							<img style={{width:"100%"}} src={datasOld[index].image} />
						<br />
							{datas[index].name} <br /> {datas[index].address1}.
						</Popup>
					</Marker>
					))}
				</MapContainer>
			</Grid>
			<Grid
				container
				xs={8}>
				{datas.map((obj, i) => (
					<Grid
						item
						xs={4}>
						<Card sx={{ maxWidth: 400 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="200"
									image={datasOld[i].image}
									alt={obj.description}
								/>
								<CardContent>
									<Typography
										fontWeight="bolder"
										component="h2">
										{obj.name}
									</Typography>
									<Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
										<Typography>{obj.address1}</Typography>
										<Typography>{obj.city}</Typography>
									</Box>
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
