import React, { useState, useEffect } from "react";
import { fetchDatas } from "../services/fetcher";
import { CinemaObject } from "../Interfaces/Interfaces";

const CinemaList: React.FC = () => {
  // Stocke la liste des cinémas dans un tableau state
  const [cinemas, setCinemas] = useState<CinemaObject[]>([]);

  // useEffect va effectuer la requête fetch() lorsque le composant est monté
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDatas("cinemas");
        setCinemas(data);
        console.log("Cinemas", data);
      } catch (error) {
        console.error("Erreur lors de la récupération des cinémas", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul>
      {cinemas.map((cinema) => (
        <li key={cinema.id}>
          {cinema.name} - {cinema.address1}
        </li>
      ))}
    </ul>
  );
};

export default CinemaList;
