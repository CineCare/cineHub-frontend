import React, { useState } from "react";
import { Grid, Card, CardActionArea, CardContent, Typography, Box, Chip, CardMedia, Divider } from "@mui/material";
import { CinemaCardProps } from "../../Interfaces/Interfaces";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import "./CinemaCard.scss";


const CinemaCard: React.FC<CinemaCardProps> = ({ cinema, distance,onRelocate }) => {
	const floatCinema = parseFloat(cinema.distance);
	const hideClass = "hidden";
	const [flipped, setFlipped] = useState(false);

	const formatDistance = (elt: string) => {
		const string = elt.split(".");
		const first = parseInt(string[0]);
		const unit = first < 2 ? "km" : "kms";
		const stringToReturn = `${string[0]} ${unit} ${string[1]}`;
		return stringToReturn;
	};

	const relocateMap = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, gps: string) => {
		e.stopPropagation();
		console.log(gps);
		onRelocate(gps);
	};

	const handleCardClick = () => {
		setFlipped(!flipped);
	};

	return (
		<Grid
			className={distance !== 0 && floatCinema > distance ? hideClass : ""}
			item
			xs={4}>
			<Card
				sx={{
					maxWidth: 400,
					transformStyle: "preserve-3d",
					transition: "transform 0.5s",
					transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
				}}
				onClick={handleCardClick}>
				<CardActionArea sx={{ height: "22rem",backgroundColor:"white" }}>
					{!flipped ? (
						<>
							<CardMedia
								component="img"
								height="100%"
								image={cinema.photo}
								alt={cinema.description}
								sx={{objectFit:"fill"}}
							/>
							<CardContent sx={{ backgroundColor: "rgba(0,0,0,0.65)", position: "absolute", bottom: "0", width: "100%", height: "25%", padding: 0, paddingLeft: "0.5rem" }}>
								<Typography
									fontWeight="bolder"
									variant="h6"
									component="h2">
									{cinema.name}
								</Typography>

								<Box sx={{ display: "flex", flexWrap: "wrap", minHeight: 100 }}>
									{cinema.accessibilities.map((elt, i) => (
										<Chip
											key={i}
											label={elt.name}
											variant="outlined"
										/>
									))}
								</Box>
							</CardContent>
						</>
					) : (
						<CardContent
							sx={{
								transform: "rotateY(180deg)",
								position: "absolute",
								top: 0,
								backgroundColor: "black",
								width: "100%",
								height: "100%",
								display: "flex",
								flexDirection: "column",
							}}>
							<Typography
								sx={{ alignSelf: "center" }}
								fontWeight="bolder"
								variant="h6"
								component="h2">
								{cinema.name}
							</Typography>
							<Divider sx={{ marginBottom: "0.5rem" }} />
							<Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
								<PersonPinIcon />
								<Typography
									variant="body2"
									sx={{ fontSize: "1rem" }}>
									{formatDistance(cinema.distance)}
								</Typography>
							</Box>
							<Box
								sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
								onClick={event => relocateMap(event, cinema.gps)}>
								<MyLocationIcon />
								<Typography
									variant="body2"
									sx={{ fontSize: "1rem" }}>
									{cinema.address1}, {cinema.postalCode}, {cinema.city}
								</Typography>
							</Box>
							<Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
								<ContactPhoneIcon />
								<Typography
									sx={{ fontSize: "1rem" }}
									onClick={e => e.stopPropagation()}>
									<a href={`tel:${cinema.phone}`}>{cinema.phone}</a>
								</Typography>
							</Box>
							<Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
								<EmailIcon />
								<Typography sx={{ fontSize: "1rem" }}onClick={e => e.stopPropagation()}>
									<a href={`mailto:${cinema.email ? cinema.email : ""}`}>{cinema.email ? cinema.email : "Aucune adresse mail"}</a>
								</Typography>
							</Box>
							<Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
								<AudiotrackIcon />
								<Typography sx={{ fontSize: "1rem" }}> {cinema.audio ? "oui" : "non"}</Typography>
							</Box>
							<Divider
								sx={{ marginBottom: "0.5rem" }}
								variant="middle"
							/>
							<Typography>{cinema.description}</Typography>
						</CardContent>
					)}
				</CardActionArea>
			</Card>
		</Grid>
	);
};

export default CinemaCard;
