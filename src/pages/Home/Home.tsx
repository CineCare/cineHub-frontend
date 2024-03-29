/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Home.scss";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import illustrationAssistant from '../../assets/img/illustration-assistant-virtuel.jpg';
import illustrationProduction from '../../assets/img/illustration-boite-prod.jpg';
import illustrationDashboard from '../../assets/img/illustration-journal-de-bord.jpg';
import illustrationUserPrefs from '../../assets/img/illustration-preferences-utilisateur.jpg';
import illustrationTheater from '../../assets/img/illustration-salle-cinéma.jpg';
import illustrationHub from '../../assets/img/illustration-repertoire-accessible.jpg';

function SampleNextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", position: "fixed", right: "6rem" }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, position: "fixed", left: "2rem", display: "block" }}
			onClick={onClick}
		/>
	);
}

const Home: React.FC = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 12000,
		adaptiveHeight: false,
		accessibility: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<Container maxWidth="xl">
			<Slider {...settings}>
				<Box component="section">
					<Typography
						variant="h1"
						gutterBottom>
						Un répertoire accessible au service du cinéma
					</Typography>
					<div className="contentContainer">
						<Typography
							variant="body1"
							gutterBottom>
							CINEHUBQUEBEC vous ouvre les portes d’un univers fascinant du cinéma québécois, où passion et accessibilité fusionnent harmonieusement.
						</Typography>
						<Typography
							variant="body1"
							gutterBottom>
							Notre mission ? Rassembler toutes les informations essentielles sur l’accessibilité dans les salles de cinéma du Québec, mettant en lumière et promouvant les établissements adoptant des
							pratiques inclusives. Cette initiative découle de recherches approfondies, de nombreuses rencontres enrichissantes et expériences, combinées au travail collaboratif de notre équipe.
						</Typography>
						<Typography
							variant="body1"
							gutterBottom>
							CINEHUBQUEBEC est bien plus qu’une simple plateforme. Il incarne un mouvement cinématographique universel et unique qui vous invite à la découverte et à l’inclusivité.
						</Typography>
						<Typography
							variant="body1"
							gutterBottom>
							Prêt.e à vivre pleinement votre passion pour le septième art ?
						</Typography>
						<div>
						<img
								src={illustrationHub}
								alt=""
							/>
						</div>
					</div>
				</Box>
				<Box component="section">
					<Typography
						variant="h2"
						gutterBottom>
						Les salles de cinémas
					</Typography>
					<div className="contentContainer">
						<Typography
							variant="body1"
							gutterBottom>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit minus accusantium repudiandae, laboriosam accusamus aliquam iste reprehenderit enim itaque fugiat commodi alias maiores
							eaque iure doloremque laborum suscipit provident saepe. Ducimus ex et, ut, eius laborum sunt libero, maxime esse dignissimos provident nobis iure quia! Culpa accusantium dicta eaque
							error aut maxime? Labore similique quae quas cumque saepe, facere distinctio. Temporibus cum maiores dolorum officiis magni quia ratione laudantium illo qui enim! Dolorem aperiam officia
							laudantium non esse itaque et quaerat. Cumque itaque, iusto similique consequatur porro quos iure nisi. Ea consequuntur, modi sunt voluptas esse nam non, minima nobis illum quisquam quod
							excepturi quia! Rem itaque explicabo ipsa asperiores quas voluptas, iste magnam quam voluptates beatae optio, architecto totam? Inventore quisquam earum odit modi atque animi doloremque
							vero pariatur officia praesentium, laboriosam reiciendis porro, aliquam, officiis saepe rem. Doloremque sint temporibus animi numquam beatae quaerat inventore, nostrum consequuntur
							expedita!
						</Typography>
						<div>
						<img
								src={illustrationTheater}
								alt=""
							/>
							</div>
					</div>
				</Box>
				<Box component="section">
					<Typography
						variant="h2"
						gutterBottom>
						Les boîtes de production cinématographique
					</Typography>
					<div className="contentContainer">
						<Typography
							variant="body1"
							gutterBottom>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit minus accusantium repudiandae, laboriosam accusamus aliquam iste reprehenderit enim itaque fugiat commodi alias maiores
							eaque iure doloremque laborum suscipit provident saepe. Ducimus ex et, ut, eius laborum sunt libero, maxime esse dignissimos provident nobis iure quia! Culpa accusantium dicta eaque
							error aut maxime? Labore similique quae quas cumque saepe, facere distinctio. Temporibus cum maiores dolorum officiis magni quia ratione laudantium illo qui enim! Dolorem aperiam officia
							laudantium non esse itaque et quaerat. Cumque itaque, iusto similique consequatur porro quos iure nisi. Ea consequuntur, modi sunt voluptas esse nam non, minima nobis illum quisquam quod
							excepturi quia! Rem itaque explicabo ipsa asperiores quas voluptas, iste magnam quam voluptates beatae optio, architecto totam? Inventore quisquam earum odit modi atque animi doloremque
							vero pariatur officia praesentium, laboriosam reiciendis porro, aliquam, officiis saepe rem. Doloremque sint temporibus animi numquam beatae quaerat inventore, nostrum consequuntur
							expedita!
						</Typography>
						<div>
						<img
								src={illustrationProduction}
								alt=""
							/>
						</div>
					</div>
				</Box>
				<Box component="section">
					<Typography
						variant="h2"
						gutterBottom>
						Le journal de bord
					</Typography>
					<div className="contentContainer">
						<Typography
							variant="body1"
							gutterBottom>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit minus accusantium repudiandae, laboriosam accusamus aliquam iste reprehenderit enim itaque fugiat commodi alias maiores
							eaque iure doloremque laborum suscipit provident saepe. Ducimus ex et, ut, eius laborum sunt libero, maxime esse dignissimos provident nobis iure quia! Culpa accusantium dicta eaque
							error aut maxime? Labore similique quae quas cumque saepe, facere distinctio. Temporibus cum maiores dolorum officiis magni quia ratione laudantium illo qui enim! Dolorem aperiam officia
							laudantium non esse itaque et quaerat. Cumque itaque, iusto similique consequatur porro quos iure nisi. Ea consequuntur, modi sunt voluptas esse nam non, minima nobis illum quisquam quod
							excepturi quia! Rem itaque explicabo ipsa asperiores quas voluptas, iste magnam quam voluptates beatae optio, architecto totam? Inventore quisquam earum odit modi atque animi doloremque
							vero pariatur officia praesentium, laboriosam reiciendis porro, aliquam, officiis saepe rem. Doloremque sint temporibus animi numquam beatae quaerat inventore, nostrum consequuntur
							expedita!
						</Typography>
						<div>
						<img
								src={illustrationDashboard}
								alt=""
							/>
						</div>
					</div>
				</Box>
				<Box component="section">
					<Typography
						variant="h2"
						gutterBottom>
						Les réglages personnalisés pour une meilleure expérience utilisateur
					</Typography>
					<div className="contentContainer">
						<Typography
							variant="body1"
							>
							Votre confort est notre priorité. C’est pourquoi nous vous proposons de découvrir une expérience utilisateur sur mesure grâce à notre fonctionnalité de personnalisation avancée.
							Nous vous offrons la possibilité de régler de nombreux paramètres pour les adapter selon vos préférences et vos besoins.
							Les options de personnalisation comprennent notamment :
							<ListItem>
								<ListItemIcon>
									<LiveHelpIcon />
								</ListItemIcon>
								<ListItemText primary="d’ajuster le niveau d'aide que vous recevez" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<ColorLensIcon />
								</ListItemIcon>
								<ListItemText primary=" de choisir des couleurs et une police qui vous conviennent" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<FormatSizeIcon />
								</ListItemIcon>
								<ListItemText primary="de modifier la taille du texte pour une lecture plus confortable" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<VideoSettingsIcon />
								</ListItemIcon>
								<ListItemText primary="de personnaliser le mode automatique et audio" />
							</ListItem>
						</Typography>
						<div>
						<img
								src={illustrationUserPrefs}
								alt=""
							/>
						</div>
					</div>
				</Box>
				<Box component="section">
					<Typography
						variant="h2"
						gutterBottom>
						Votre assistant personnel
					</Typography>
					<div className="contentContainer">
						<Typography
							variant="body1"
							gutterBottom>
							Vous êtes à la recherche d’informations spécifiques, de recommandations personnalisées ou simplement d’une visite guidée pour vous familiariser avec nos fonctionnalités ?
						</Typography>
						<Typography
							variant="body1"
							gutterBottom>
							Notre assistant virtuel est là pour vous aider à explorer toutes les facettes de notre site et à rendre votre expérience aussi agréable que possible.
						</Typography>
						<Typography
							variant="body1"
							gutterBottom>
							Comment procéder ? Faites appel à lui tout au long de votre navigation, posez-lui vos questions et lancez des actions en toute simplicité. Que vous souhaitiez accéder à une page
							particulière du site ou bien filtrer les résultats de recherche selon vos critères, notre assistant est à votre disposition pour répondre à tous vos besoins.
						</Typography>
						<div>
							<img
								src={illustrationAssistant}
								alt=""
							/>
						</div>
					</div>
				</Box>
			</Slider>
		</Container>
	);
};

export default Home;
