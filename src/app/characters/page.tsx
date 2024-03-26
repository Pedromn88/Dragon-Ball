"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/loader";
import { getCharacters } from "@/utils/fetch";
import { CharacterInfo } from "@/interface/interface";
import CardComponentCharacters from "@/components/Card/cardCharacters";

const Characters = ({}) => {
  const [data, setData] = useState<CharacterInfo[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchCharacters = () => {
    setLoading(true);
    getCharacters()
      .then((data) => setData(data))
      .catch((error) =>
        console.error("Error en la llamada a getCharacters:", error)
      );
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <span className="container-characters">
          {data &&
            data.map((char, i: number) => {
              return (
                <span key={i}>
                  <CardComponentCharacters
                    name={char.name}
                    img={char.image}
                    race={char.race}
                    id={char.id}
                  />
                </span>
              );
            })}
        </span>
      )}{" "}
    </>
  );
};

export default Characters;
