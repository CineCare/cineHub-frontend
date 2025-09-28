/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Home.scss";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import illustrationAssistant from "../../assets/img/illustration-assistant-virtuel.jpg";
import illustrationProduction from "../../assets/img/illustration-boite-prod.jpg";
import illustrationDashboard from "../../assets/img/illustration-journal-de-bord.jpg";
import illustrationUserPrefs from "../../assets/img/illustration-preferences-utilisateur.jpg";
import illustrationTheater from "../../assets/img/illustration-salle-cinema.jpg";
import illustrationHub from "../../assets/img/illustration-repertoire-accessible.jpg";
import { settings } from "../../options/CarouselOptions";

const Home: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Slider {...settings}>
        <Box component="section">
          <Typography variant="h1" gutterBottom>
            Un répertoire accessible au service du cinéma
          </Typography>
          <div className="contentContainer">
            <Typography variant="body1" gutterBottom>
              CINEHUBQUEBEC vous ouvre les portes d’un univers fascinant du
              cinéma québécois, où passion et accessibilité fusionnent
              harmonieusement.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Notre mission ? Rassembler toutes les informations essentielles
              sur l’accessibilité dans les salles de cinéma ainsi que les
              maisons de production du Québec, mettant en lumière et promouvant
              les établissements adoptant des pratiques inclusives. Cette
              initiative découle de recherches approfondies, de nombreuses
              rencontres enrichissantes et expériences, combinées au travail
              collaboratif de notre équipe.
            </Typography>
            <Typography variant="body1" gutterBottom>
              CINEHUBQUEBEC est bien plus qu’une simple plateforme. Il incarne
              un mouvement cinématographique universel et unique qui vous invite
              à la découverte et à l’inclusivité.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Prête, Prêt à vivre pleinement votre passion pour le septième art
              ?
            </Typography>
            <div>
              <img src={illustrationHub} alt="" />
            </div>
          </div>
        </Box>
        <Box component="section">
          <Typography variant="h2" gutterBottom>
            Les salles de cinémas
          </Typography>
          <div className="contentContainer">
            <Typography variant="body1" gutterBottom>
            Notre section "Salles de cinéma" a été conçue pour répondre à un besoin crucial : l'accessibilité cinématographique à Montréal. Trop souvent, les amateurs de cinéma découvrent, une fois sur place, que les salles ne disposent pas de tous les dispositifs nécessaires à une expérience inclusive, tels que des sous-titres pour sourd(e)s et ou malentendant(e)s ou des rampes d'accès pour les personnes à mobilité réduite, ou des ajustements dans les éclairages pour éviter le surmenage sensoriel chez les personnes avec des handicaps neurologiques... En répertoriant les salles de cinéma selon leurs équipements d'accessibilité, nous aspirons à soutenir les spectateurs en leur permettant d'identifier facilement les services adaptés à leurs besoins spécifiques. De plus, cette initiative vise à sensibiliser tant les exploitants de cinémas que le public sur l'importance de progresser vers une accessibilité universelle, en mettant en lumière les lacunes existantes et en encourageant les améliorations nécessaires pour que le cinéma soit véritablement accessible à toustes.
            </Typography>
            <div>
              <img src={illustrationTheater} alt="" />
            </div>
          </div>
        </Box>
        <Box component="section">
          <Typography variant="h2" gutterBottom>
            Les boîtes de production
          </Typography>
          <div className="contentContainer">
            <Typography variant="body1" gutterBottom>
            Bienvenue dans notre section "Boîtes de production", un espace dédié à mettre en lumière et à valoriser le travail des créatrices et créateurs audiovisuels. Cette section facilite la recherche des particuliers, professionels, universitaires, sur les questions de production et permet d'identifier les projets prometteurs qui pourraient enrichir le futur catalogue de films de notre future plateforme de streaming, CinéCare. Notre objectif sera de proposer une expérience cinématographique qui soit à la fois thérapeutique-inclusive-accessible-écologique. En explorant ce volet, vous découvrirez les coulisses des créations qui façonnent les tendances actuelles et futures du cinéma, tout en soutenant une industrie plus responsable et attentive aux besoins de toustes.
            </Typography>
            <div>
              <img src={illustrationProduction} alt="" />
            </div>
          </div>
        </Box>
        <Box component="section">
          <Typography variant="h2" gutterBottom>
            Le journal de bord
          </Typography>
          <div className="contentContainer">
            <Typography variant="body1" gutterBottom>
            Bienvenue dans notre "Journal de bord", un espace dédié à partager le processus créatif de notre équipe de développeurs web. Cet espace est conçu pour offrir une transparence totale sur les évolutions et les innovations que nous intégrons à notre site. Ici, vous trouverez des comptes rendus détaillés, des documentations techniques et les diverses étapes de développement qui contribuent à améliorer continuellement notre plateforme. Notre objectif est de vous faire découvrir les coulisses du développement de solutions qui facilitent votre recherche de maisons de production et de salles de cinéma accessibles. Nous espérons que ce journal vous permettra non seulement de comprendre mieux les fonctionnalités que nous proposons, mais aussi de voir comment notre équipe s'engage à répondre efficacement à vos besoins.
            </Typography>
            <div>
              <img src={illustrationDashboard} alt="" />
            </div>
          </div>
        </Box>
        <Box component="section">
          <Typography variant="h2" gutterBottom>
            Les réglages personnalisés pour une meilleure expérience utilisateur
          </Typography>
          <div className="contentContainer">
            <Typography variant="body1">
              Votre confort est notre priorité. C’est pourquoi nous vous
              proposons de découvrir une expérience utilisateur sur mesure grâce
              à notre fonctionnalité de personnalisation avancée. Nous vous
              offrons la possibilité de régler de nombreux paramètres pour les
              adapter selon vos préférences et vos besoins. Les options de
              personnalisation comprennent notamment :
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon>
                  <LiveHelpIcon />
                </ListItemIcon>
                <ListItemText primary="d’ajuster le niveau d'aide que vous recevez" />
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon>
                  <ColorLensIcon />
                </ListItemIcon>
                <ListItemText primary=" de choisir des couleurs et une police qui vous conviennent" />
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon>
                  <FormatSizeIcon />
                </ListItemIcon>
                <ListItemText primary="de modifier la taille du texte pour une lecture plus confortable" />
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon>
                  <VideoSettingsIcon />
                </ListItemIcon>
                <ListItemText primary="de personnaliser le mode automatique et audio" />
              </ListItem>
            </Typography>
            <div>
              <img src={illustrationUserPrefs} alt="" />
            </div>
          </div>
        </Box>
        <Box component="section">
          <Typography variant="h2" gutterBottom>
            Votre assistant personnel
          </Typography>
          <div className="contentContainer">
            <Typography variant="body1" gutterBottom>
              Vous êtes à la recherche d’informations spécifiques, de
              recommandations personnalisées ou simplement d’une visite guidée
              pour vous familiariser avec nos fonctionnalités ?
            </Typography>
            <Typography variant="body1" gutterBottom>
              Notre assistant virtuel est là pour vous aider à explorer toutes
              les facettes de notre site et à rendre votre expérience aussi
              agréable que possible.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Comment procéder ? Faites appel à lui tout au long de votre
              navigation, posez-lui vos questions et lancez des actions en toute
              simplicité. Que vous souhaitiez accéder à une page particulière du
              site ou bien filtrer les résultats de recherche selon vos
              critères, notre assistant est à votre disposition pour répondre à
              tous vos besoins.
            </Typography>
            <div>
              <img src={illustrationAssistant} alt="" />
            </div>
          </div>
        </Box>
      </Slider>
    </Container>
  );
};

export default Home;
