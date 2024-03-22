import "./Home.scss";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Typography } from '@mui/material';

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    adaptiveHeight: true,
    accessibility: true
  };

  return (
    <Container maxWidth="xl">
    <Typography variant="h3" gutterBottom>
      Bienvenue sur notre site!
    </Typography>
    <Typography variant="body1" gutterBottom>
    CINEHUBQUEBEC, votre fenêtre privilégiée sur le cinéma québécois, où passion et accessibilité se rencontrent. Découvrez un univers dédié à valoriser et promouvoir nos salles et productions locales, tout en mettant de l'avant des initiatives inclusives.
    </Typography>
    <Typography variant="body1" gutterBottom>
    Explorez avec nous les dernières sorties, participez à des événements uniques et engagez-vous dans une communauté vibrante au rythme du cinéma d'ici.
    </Typography>
    <Typography variant="body1" gutterBottom>
    CINEHUBQUEBEC, c'est plus qu'une plateforme, c'est un mouvement vers un cinéma universellement accessible.
    </Typography>
    <Slider {...settings}>
      <div>
        <h3>Fonctionnalité 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit minus accusantium repudiandae, laboriosam accusamus aliquam iste reprehenderit enim itaque fugiat commodi alias maiores eaque iure doloremque laborum suscipit provident saepe.
        Ducimus ex et, ut, eius laborum sunt libero, maxime esse dignissimos provident nobis iure quia! Culpa accusantium dicta eaque error aut maxime? Labore similique quae quas cumque saepe, facere distinctio.
        Temporibus cum maiores dolorum officiis magni quia ratione laudantium illo qui enim! Dolorem aperiam officia laudantium non esse itaque et quaerat. Cumque itaque, iusto similique consequatur porro quos iure nisi.
        Ea consequuntur, modi sunt voluptas esse nam non, minima nobis illum quisquam quod excepturi quia! Rem itaque explicabo ipsa asperiores quas voluptas, iste magnam quam voluptates beatae optio, architecto totam?
        Inventore quisquam earum odit modi atque animi doloremque vero pariatur officia praesentium, laboriosam reiciendis porro, aliquam, officiis saepe rem. Doloremque sint temporibus animi numquam beatae quaerat inventore, nostrum consequuntur expedita!.</p>
      </div>
      <div>
        <h3>Fonctionnalité 2</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis illo cupiditate neque, reprehenderit debitis veritatis ab eveniet quaerat rem placeat aspernatur! Sed aliquam blanditiis iste tenetur ullam qui libero distinctio.
        Quis possimus dicta modi itaque exercitationem nihil officia assumenda, quod amet numquam aspernatur quisquam, tempore sed illum. Doloribus, odio delectus! Reprehenderit voluptatem, officiis placeat commodi explicabo eos dicta eligendi quo!
        Voluptatum fugit nisi ipsam soluta corrupti alias deserunt sed illum vitae qui ratione, illo quia pariatur nesciunt nobis repellendus officia possimus consectetur voluptas. Sapiente unde minima, ut repudiandae deserunt enim?
        Est veritatis impedit, voluptatem quasi doloribus nisi blanditiis error vel sed ea vero, aliquam eius soluta ab adipisci odio consequatur quam nemo aliquid, aspernatur consequuntur fugiat itaque! Adipisci, ullam unde.
        Dolores itaque, modi perspiciatis neque voluptatem mollitia beatae facere alias eos quo amet voluptatum magni recusandae quod nihil officia illum totam laudantium. Voluptas itaque, praesentium officia animi maxime adipisci quidem.</p>
      </div>
      <div>
        <h3>Fonctionnalité 3</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis illo cupiditate neque, reprehenderit debitis veritatis ab eveniet quaerat rem placeat aspernatur! Sed aliquam blanditiis iste tenetur ullam qui libero distinctio.
        Quis possimus dicta modi itaque exercitationem nihil officia assumenda, quod amet numquam aspernatur quisquam, tempore sed illum. Doloribus, odio delectus! Reprehenderit voluptatem, officiis placeat commodi explicabo eos dicta eligendi quo!
        Voluptatum fugit nisi ipsam soluta corrupti alias deserunt sed illum vitae qui ratione, illo quia pariatur nesciunt nobis repellendus officia possimus consectetur voluptas. Sapiente unde minima, ut repudiandae deserunt enim?
        Est veritatis impedit, voluptatem quasi doloribus nisi blanditiis error vel sed ea vero, aliquam eius soluta ab adipisci odio consequatur quam nemo aliquid, aspernatur consequuntur fugiat itaque! Adipisci, ullam unde.
        Dolores itaque, modi perspiciatis neque voluptatem mollitia beatae facere alias eos quo amet voluptatum magni recusandae quod nihil officia illum totam laudantium. Voluptas itaque, praesentium officia animi maxime adipisci quidem.</p>
      </div>
      <div>
        <h3>Fonctionnalité 4</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis illo cupiditate neque, reprehenderit debitis veritatis ab eveniet quaerat rem placeat aspernatur! Sed aliquam blanditiis iste tenetur ullam qui libero distinctio.
        Quis possimus dicta modi itaque exercitationem nihil officia assumenda, quod amet numquam aspernatur quisquam, tempore sed illum. Doloribus, odio delectus! Reprehenderit voluptatem, officiis placeat commodi explicabo eos dicta eligendi quo!
        Voluptatum fugit nisi ipsam soluta corrupti alias deserunt sed illum vitae qui ratione, illo quia pariatur nesciunt nobis repellendus officia possimus consectetur voluptas. Sapiente unde minima, ut repudiandae deserunt enim?
        Est veritatis impedit, voluptatem quasi doloribus nisi blanditiis error vel sed ea vero, aliquam eius soluta ab adipisci odio consequatur quam nemo aliquid, aspernatur consequuntur fugiat itaque! Adipisci, ullam unde.
        Dolores itaque, modi perspiciatis neque voluptatem mollitia beatae facere alias eos quo amet voluptatum magni recusandae quod nihil officia illum totam laudantium. Voluptas itaque, praesentium officia animi maxime adipisci quidem.</p>
      </div>
      <div>
        <h3>Fonctionnalité 5</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis illo cupiditate neque, reprehenderit debitis veritatis ab eveniet quaerat rem placeat aspernatur! Sed aliquam blanditiis iste tenetur ullam qui libero distinctio.
        Quis possimus dicta modi itaque exercitationem nihil officia assumenda, quod amet numquam aspernatur quisquam, tempore sed illum. Doloribus, odio delectus! Reprehenderit voluptatem, officiis placeat commodi explicabo eos dicta eligendi quo!
        Voluptatum fugit nisi ipsam soluta corrupti alias deserunt sed illum vitae qui ratione, illo quia pariatur nesciunt nobis repellendus officia possimus consectetur voluptas. Sapiente unde minima, ut repudiandae deserunt enim?
        Est veritatis impedit, voluptatem quasi doloribus nisi blanditiis error vel sed ea vero, aliquam eius soluta ab adipisci odio consequatur quam nemo aliquid, aspernatur consequuntur fugiat itaque! Adipisci, ullam unde.
        Dolores itaque, modi perspiciatis neque voluptatem mollitia beatae facere alias eos quo amet voluptatum magni recusandae quod nihil officia illum totam laudantium. Voluptas itaque, praesentium officia animi maxime adipisci quidem.</p>
      </div>
    </Slider>
  </Container>
  );
};

export default Home;