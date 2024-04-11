import {  FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from "@mui/material";
import "./MovieTheaters.scss";
import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { AccessibilityObject, CinemaObject } from "../../Interfaces/Interfaces";
import { fetchDatas } from "../../services/fetcher";
import { genders, tags, distances, accessibilities, position } from "../../mockups/movieTheatersMockup";
import { MenuProps } from "../../options/MUIOptions";
import CinemaCard from '../../components/CinemaCard/CinemaCard';

const MovieTheater: React.FC = () => {
	
	const [accessibility, setAccessibility]                  = React.useState<string[]>([]);
	const [accessibilityOptions, setAccessibilityOptions]    = React.useState<AccessibilityObject[]>([]);
	const [cinemas, setCinemas]                              = React.useState<CinemaObject[]>([]);
	const [distance, setDistance]                            = React.useState<string[]>([]);
	const [gender, setGender]                                = React.useState<string[]>([]);
	const [markers, setMarkers]                              = React.useState<LatLngExpression[]>([]);
	const [tag, setTag]                                      = React.useState<string[]>([]);

	/**
	 * La fonction `getGPSDatas` prend un tableau d'objets avec des coordonnées GPS et extrait les valeurs
	 * de longitude et de latitude pour créer un tableau d'objets LatLngExpression.
	 * @param {CinemaObject[]} datas - CinemaObject[] - un tableau d'objets représentant des données de
	 * cinéma. Chaque objet doit avoir une propriété nommée «gps» qui contient les coordonnées GPS au
	 * format «longitude;latitude».
	 */
	const getGPSDatas = (datas: CinemaObject[]): void => {
		const formattedArray: LatLngExpression[] = [];
		const GPSArray = datas.map(elt => elt.gps);
		GPSArray.forEach(gps => {
			const [long, lat] = gps.split(";");
			formattedArray.push([parseFloat(long), parseFloat(lat)]);
		});
		setMarkers(formattedArray);
	};

	/**
	 * La fonction `handleGenderChange` prend un événement et met à jour l'état de genre en fonction de la
	 * valeur sélectionnée.
	 * @param event - Le paramètre `event` est un objet représentant l'événement qui s'est produit, en
	 * particulier un événement `SelectChangeEvent` lié à l'état `gender`.
	 */
	const handleGenderChange = (event: SelectChangeEvent<typeof gender>): void => {
		const {
			target: { value },
		} = event;
		setGender(typeof value === "string" ? value.split(",") : value);
	};

	/**
	 * La fonction `handleTagChange` prend un SelectChangeEvent et met à jour l'état de la balise en
	 * fonction de la valeur sélectionnée.
	 * @param event - Le paramètre `event` est un objet qui représente l'événement déclenché lorsque la
	 * valeur d'une entrée de sélection change. Il est de type `SelectChangeEvent<typeof tag>`, ce qui
	 * indique qu'il s'agit d'un événement de changement de sélection spécifique au type `tag`.
	 */
	const handleTagChange = (event: SelectChangeEvent<typeof tag>): void => {
		event.stopPropagation();
		const {
			target: { value },
		} = event;
		setTag(typeof value === "string" ? value.split(",") : value);
	};

	/**
	 * La fonction `handleDistanceChange` prend un événement et met à jour l'état de distance en fonction
	 * de la valeur de l'événement.
	 * @param event - Le paramètre `event` est de type `SelectChangeEvent` avec un type générique de
	 * `typeof distance`. Il s'agit d'un objet événement qui est déclenché lorsque la sélection de
	 * distance change dans un champ de saisie de sélection.
	 */
	const handleDistanceChange = (event: SelectChangeEvent<typeof distance>): void => {
		event.stopPropagation();
		const {
			target: { value },
		} = event;
		setDistance(typeof value === "string" ? value.split(",") : value);
	};

	/**
	 * La fonction `handleAccessibilityChange` gère les modifications des options
	 * d'accessibilité en mettant à jour l'état avec les valeurs sélectionnées.
	 * @param event - Il s'agit d'un objet événement qui est déclenché lorsque la valeur
	 * d'accessibilité change dans un champ de saisie de sélection.
	 */
	const handleAccessibilityChange = (event: SelectChangeEvent<typeof accessibility>): void => {
		event.stopPropagation();
		const {
			target: { value },
		} = event;
		setAccessibility(typeof value === "string" ? value.split(",") : value);
	};



	useEffect(() => {
		const initMovieTheaters = async () => {
			try {
				const datas = await fetchDatas('cinemas');
				setCinemas(datas);
				getGPSDatas(datas);
				const accessibilities = await fetchDatas('accessibilities');
				setAccessibilityOptions(accessibilities);
				console.log(accessibilityOptions);
			} catch (error) {
				throw new Error;
			}
		};
		initMovieTheaters();
	}, []);

	return (
		<Grid
			container
			sx={{ marginTop: "1rem", height: "calc(100vh - 135px)", gap: "2rem", justifyContent: "center" }}>
			<Grid
				container
				xs={3}>
				<TextField
					id="searchbar"
					label="Rechercher une salle"
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
							<InputLabel id="gender">Equipement</InputLabel>
							<Select
								labelId="demo1"
								id="demo1"
								fullWidth
								multiple
								value={gender}
								onChange={handleGenderChange}
								input={<OutlinedInput label="Gender" />}
								MenuProps={MenuProps}>
								{genders.map(elt => (
									<MenuItem
										key={elt}
										value={elt}>
										{elt}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid
						item
						xs={6}>
						<FormControl fullWidth>
							<InputLabel id="tags">Langues</InputLabel>
							<Select
								labelId="tags"
								id="tags"
								fullWidth
								multiple
								value={tag}
								onChange={handleTagChange}
								input={<OutlinedInput label="tag" />}
								MenuProps={MenuProps}>
								{tags.map(elt => (
									<MenuItem
										key={elt}
										value={elt}>
										{elt}
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
								value={distance}
								onChange={handleDistanceChange}
								input={<OutlinedInput label="distance" />}
								MenuProps={MenuProps}>
								<MenuItem value="">Aucune</MenuItem>
								{distances.map(elt => (
									<MenuItem
										key={elt}
										value={elt}>
										{elt}
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
								multiple
								fullWidth
								value={accessibility}
								onChange={handleAccessibilityChange}
								input={<OutlinedInput label="accessibility" />}
								MenuProps={MenuProps}>
								{accessibilities.map(elt => (
									<MenuItem
										key={elt}
										value={elt}>
										{elt}
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
						<Marker
							key={index}
							position={position}>
							<Popup>
								<img
									style={{ width: "100%" }}
									src={cinemas[index].photo}
								/>
								<br />
								{cinemas[index].name} <br /> {cinemas[index].address1}.
							</Popup>
						</Marker>
					))}
				</MapContainer>
			</Grid>
			<Grid
				container
				xs={8}
				spacing={2}>
				{cinemas.map((cinema, index) => (
					<CinemaCard key={index} cinema={cinema} />
				))}
			</Grid>
		</Grid>
	);
};

export default MovieTheater;
