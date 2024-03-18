import "./Home.scss";
import React from 'react';
import Typography from '@mui/material/Typography';

const Home: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Bienvenue sur notre application de répertoire cinématographique du Québec !
      </Typography>
      <Typography variant="body1" gutterBottom>
        Explorez les salles de cinéma et les boîtes de production cinématographiques dans votre région.
      </Typography>
      <Typography variant="body1">
        Utilisez les filtres pour personnaliser votre expérience et rendre la navigation plus accessible.
      </Typography>
    </div>
  );
};

export default Home;