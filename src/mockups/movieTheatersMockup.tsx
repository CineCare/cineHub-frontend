import { LatLngExpression } from "leaflet";

const positionFetch: string = '46.83244185894426,-71.27689268322194';
const positionMockup: LatLngExpression = { lat: 46.83244185894426, lng: -71.27689268322194 };
// const positionMockup: LatLngExpression = [46.83244185894426, -71.27689268322194];
// const position: string = JSON.stringify([46.8129393810265, -71.22127317412945]);
const genders = ["Son Dolby Atmos", "Sièges inclinables", "Salle IMAX", "Système 3D"];
const tags = ["Langue française", "Langue anglaise", "Sous-titrage français", "Sous-titrage anglais"];
const distances = ["5kms","10kms", "20kms", "30kms", "40kms", "50kms", "60kms", "80kms", "90kms", "100kms"];
const accessibilities = ["Fauteuil manuel", "Fauteuil électrique", "Fauteuil avec assistance extérieure", "Casque", "Braille", "Audio description", "Place adaptée", "Animaux d'assistance"];

export {
  genders,
  tags,
  distances,
  accessibilities,
  positionFetch,
  positionMockup
}