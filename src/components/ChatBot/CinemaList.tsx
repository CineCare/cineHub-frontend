import React, { useState, useEffect } from "react";
import { fetchDatas } from "../../services/fetcher";
import { CinemaObject } from "../../Interfaces/Interfaces";
import CinemaCardResponse from "./CinemaCardResponse/CinemaCardResponse";

const CinemaList: React.FC = () => {
  const [cinemas, setCinemas] = useState<CinemaObject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDatas("cinemas");
        setCinemas(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des cinémas", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {cinemas.map((cinema) => (
        <CinemaCardResponse
          key={cinema.id}
          cinema={cinema}
          listType="CinemaList"
        />
      ))}
    </div>
  );
};

export default CinemaList;
