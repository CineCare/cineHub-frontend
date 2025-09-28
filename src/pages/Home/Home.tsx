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
            <b>promouvoir une accessibilité universelle</b><br/>
            cette section a été conçue pour répondre à un enjeu essentiel : l'accessibilité des salles de cinéma à Montréal. 
            Trop souvent, les les spectateurs et spectatrices découvrent, une fois sur place, que les salles ne sont pas équipées de tous les dispositifs nécessaires à une expérience inclusive : 
            sous-titrage pour  les personnes sourdes ou malentendantes ou des rampes d'accès pour les personnes à mobilité réduite, 
            ajustements lumineux pour limiter le surmenage sensoriel chez les personnes ayant des besoins neurologiques spécifiques, etc.<br/>
            En répertoriant les salles de cinéma selon leurs équipements d'accessibilité, nous souhaitons offrir aux publics un repère clair pour identifier facilement les services adaptés à leurs besoins. 
            Cette démarche vise également à sensibiliser les exploitant(e)s de salles, en mettant en évidence les lacunes actuelles et en encourageant les améliorations indispensables.<br/>
            L’objectif est de tendre vers une véritable accessibilité universelle, afin que le cinéma soit un espace accueillant et habitable pour toutes et tous.
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
            <b>Les coulisses du développement</b><br/>
            Bienvenue dans notre "Journal de bord", conçu pour partager le processus créatif et technique de notre équipe de développement web. 
            Cet espace a pour vocation d’assurer une transparence complète sur les évolutions et innovations que nous intégrons à notre site.<br/>
            Vous y trouverez des comptes rendus détaillés, des documentations techniques et les différentes étapes du développement qui contribuent à l’amélioration continue de la plateforme. 
            Notre objectif est de vous donner accès aux coulisses de la création de solutions facilitant la recherche de maisons de production et de salles de cinéma accessibles.<br/>
            Nous espérons que ce journal vous aidera à mieux comprendre les fonctionnalités que nous proposons, tout en vous montrant comment notre équipe 
            s’engage à répondre de manière efficace et créative à vos besoins.
            </Typography>
            <div>
              <img src={illustrationDashboard} alt="" />
            </div>
          </div>
        </Box>
        <Box component="section">
          <Typography variant="h2" gutterBottom>
            Les réglages personnalisés pour une meilleure expérience utilisatrices et utilisateurs
          </Typography>
          <div className="contentContainer">
            <Typography variant="body1">
              Des paramètres personnalisés pour une expérience optimale<br/>
              Votre confort est notre priorité. C’est pourquoi nous vous
              proposons de découvrir une expérience adaptée grâce
              à une fonctionnalité de personnalisation avancée. Vous pouvez ajuster de nombreux paramètres afin qu’ils correspondent à vos préférences et à vos besoins. Les options de
              personnalisation comprennent notamment :
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon>
                  <LiveHelpIcon />
                </ListItemIcon>
                <ListItemText primary="ajuster le niveau d’assistance que vous recevez" />
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon>
                  <ColorLensIcon />
                </ListItemIcon>
                <ListItemText primary="choisir les couleurs et la police qui vous conviennent" />
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon>
                  <FormatSizeIcon />
                </ListItemIcon>
                <ListItemText primary="modifier la taille du texte pour une lecture plus agréable" />
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon>
                  <VideoSettingsIcon />
                </ListItemIcon>
                <ListItemText primary="personnaliser le mode automatique et audio" />
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
