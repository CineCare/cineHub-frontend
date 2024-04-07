import { LatLngExpression } from "leaflet";

const position: LatLngExpression = [46.8129393810265, -71.22127317412945];
const genders = ["Horreur", "Comédie", "Action", "Documentaire"];
const tags = ["Tous publics", "Sous-titrage français", "Arts & essais", "Ralph La Casse", "Omar & Fred", "Carlos Santana", " Wagner & Mozart", "Bradley Cooper", "Virginia Grimaldia", "Kelly Rownie"];
const distances = ["5km","10km", "20km", "30km", "40km", "50km", "60km", "80km", "90km", "100km", "+100km"];
const accessibilities = ["PMR", "Casque", "Braille", "Audio description", "Place adaptée", "Animaux d'assistance"];

export {
  genders,
  tags,
  distances,
  accessibilities,
  position
}