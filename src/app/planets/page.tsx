"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/loader";
import { getPlanets } from "@/utils/fetch";
import { PlanetsInfo } from "@/interface/interface";
import Image from "next/image";
import CardComponentPlanets from "@/components/Card/cardPlanets";

const Planets = ({}) => {
  const [data, setData] = useState<PlanetsInfo[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchPlanets = () => {
    setLoading(true);
    getPlanets()
      .then((data) => setData(data))
      .catch((error) =>
        console.error("Error en la llamada a getCharacters:", error)
      );
    setLoading(false);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <span className="container-planets">
          {data &&
            data.map((planets, i: number) => {
              return (
                <span key={i}>
                  <CardComponentPlanets
                    name={planets.name}
                    img={planets.image}
                    id={planets.id}
                  />
                </span>
              );
            })}
        </span>
      )}
    </>
  );
};

export default Planets;
