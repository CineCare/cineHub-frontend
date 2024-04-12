import React, { useState, useEffect } from "react";

interface Accessibility {
  id: number;
  name: string;
  description: string;
}

interface Cinema {
  id: number;
  name: string;
  address1: string;
  accessibilities: Accessibility[];
}

const CinemaList: React.FC = () => {
  // stocke la liste des cinémas dans un tableau state
  const [cinemas, setCinemas] = useState<Cinema[]>([]);

  // use Effect va effectuer la requête fetch() lorsque le composant est monté
  useEffect(() => {
    const fetchCinemas = async () => {
      try {
        const response = await fetch(
          "https://cinehub-dev-backend.codevert.org/cinemas"
        );
        if (!response.ok) {
          throw new Error("echec de récupération des cinémas");
        }
        const data = await response.json();
        setCinemas(data);
        console.log("Cinema", data);
      } catch (error) {
        console.error("Erreur de récupération des cinémas", error);
      }
    };
    fetchCinemas();
  }, []);

  return (
    <div>
      <h1>Cinemas</h1>
      <ul>
        {cinemas.map((cinema) => (
          <li key={cinema.id}>
            {cinema.name} - {cinema.address1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CinemaList;
