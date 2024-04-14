import { LatLngExpression } from "leaflet";

const positionFetch: string = '45.49938757789634, -73.6180111120439';
const positionMockup: LatLngExpression = { lat: 45.49938757789634, lng: -73.6180111120439 };

const genders = ["Son Dolby Atmos", "Sièges inclinables", "Salle IMAX", "Système 3D"];
const tags = ["Langue française", "Langue anglaise", "Sous-titrage français", "Sous-titrage anglais"];
const distances = [{"label":"5kms","value":5},{"label":"10kms","value":10},{"label":"20kms","value":20},{"label":"30kms","value":30},{"label":"40kms","value":40},{"label":"50kms","value":50},{"label":"60kms","value":60},{"label":"80kms","value":80},{"label":"90kms","value":90},{"label":"100kms","value":100},{"label":"200kms","value":200},{"label":"300kms","value":300}];
const accessibilities = ["Fauteuil manuel", "Fauteuil électrique", "Fauteuil avec assistance extérieure", "Casque", "Braille", "Audio description", "Place adaptée", "Animaux d'assistance"];

export {
  genders,
  tags,
  distances,
  accessibilities,
  positionFetch,
  positionMockup
}