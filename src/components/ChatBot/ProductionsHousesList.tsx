import React, { useState, useEffect } from "react";
import { fetchDatas } from "../../services/fetcher";
import { CinemaObject } from "../../Interfaces/Interfaces";
import CinemaCardResponse from "./CinemaCardResponse/CinemaCardResponse";

const ProductionsHousesList: React.FC = () => {
  const [productionsHouses, setProductionsHouses] = useState<CinemaObject[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDatas("production-houses");
        setProductionsHouses(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des cinémas", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {productionsHouses.map((cinema) => (
        <CinemaCardResponse
          key={cinema.id}
          cinema={cinema}
          listType="ProductionHousesList"
        />
      ))}
    </div>
  );
};

export default ProductionsHousesList;
