type Translations = {
  [key: string]: string;
};

const translations: Translations = {
	"This attribute must be unique": "Cet email est déjà enregistré",
	"email cannot be empty": "Vous devez renseigner une adresse mail",
	"email must be a valid email": "L'adresse email doit être valide",
};

export default translations;