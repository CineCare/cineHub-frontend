import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { CinemaObject } from "../../../Interfaces/Interfaces";

interface CinemaCardProps {
  cinema: CinemaObject;
  listType: "CinemaList" | "ProductionHousesList";
}

const CinemaCardResponse: React.FC<CinemaCardProps> = ({
  cinema,
  listType,
}) => {
  const [expanded, setExpanded] = useState(false);
  console.log(cinema);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Déterminez le lien en fonction de la liste utilisée
  const linkTo =
    listType === "CinemaList" ? "/movie-theaters" : "/production-studios";

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
            C
          </Avatar>
        }
        action={
          <>
            <IconButton
              aria-expanded={expanded}
              onClick={handleExpandClick}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              size="small"
              component={Link}
              to={linkTo}
            >
              Visiter
            </Button>
          </>
        }
        title={cinema.name}
        subheader={cinema.address1}
      />

      <CardActions disableSpacing></CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Infos:</Typography>
          {/* Ajoute ici le contenu spécifique au cinéma si nécessaire */}
          <Typography variant="body2" color="text.secondary">
            Téléphone: {cinema.phone}
            <CardMedia
              component="img"
              height="194"
              image={cinema.photo}
              alt={cinema.name}
            ></CardMedia>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CinemaCardResponse;
