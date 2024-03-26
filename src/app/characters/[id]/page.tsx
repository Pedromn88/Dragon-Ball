"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/loader";
import { getOneCharacters, getPlanets } from "@/utils/fetch";
import Image from "next/image";
import { Params, getOneCharacter } from "@/interface/interface";
import CardComponentPlanets from "@/components/Card/cardPlanets";
import CardComponentPlanetsMini from "@/components/Card/cardPlanetMini";
import CardComponentCharactersMini from "@/components/Card/cardCharactersMini";

const id: React.FC<{ params: Params }> = ({ params }) => {
  const { id } = params;
  const [data, setData] = useState<getOneCharacter>();

  const fetchOneCharacters = async () => {
    await getOneCharacters(Number(id))
      .then((data) => {
        setData(data);
      })
      .catch((error) =>
        console.error("Error en la llamada a getCharacters:", error)
      );
  };
  useEffect(() => {
    fetchOneCharacters();
  }, [id]);

  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <div className="container-info-id">
          <div className="container-info-id-content">
            <div className="container-info-id-content-details">
              <div className="container-firs-info">
                <Image
                  width={50}
                  height={50}
                  alt={"Bola de Dragon"}
                  src={"/ball_dragon_body.png"}></Image>
                <span className="container-info-id-data id-data-title">
                  {data?.name}{" "}
                </span>
                <span className="container-info-id-data id-data-race">
                  {data?.race}
                </span>
                <span className="container-info-id-data id-data-race">
                  {data?.affiliation}
                </span>
                <span className="container-info-id-data id-data-race">
                  {data?.maxKi}
                </span>
              </div>
              <div className="line-div" />
              <span className="container-info-id-data id-data-description">
                {data?.description}
              </span>
              <div className="line-div" />
              <span className="container-info-id-planet">
                <span className="container-info-id-transformations-title">
                  <Image
                    width={25}
                    height={25}
                    alt={"Bola de Dragon"}
                    src={"/ball_dragon_body.png"}></Image>

                  <span className="container-info-id-data id-data-race">
                    Planeta Original: {data?.originPlanet?.name}{" "}
                  </span>
                </span>
                <span style={{ width: "150px", height: "150px" }}>
                  <CardComponentPlanetsMini
                    id={data?.originPlanet?.id}
                    name={data?.originPlanet?.name}
                    img={data?.originPlanet?.image}
                  />
                </span>
              </span>
              <div className="line-div" />
              <span className="container-info-id-transformations">
                <span className="container-info-id-transformations-title">
                  <Image
                    width={25}
                    height={25}
                    alt={"Bola de Dragon"}
                    src={"/ball_dragon_body.png"}></Image>

                  <span className="container-info-id-data id-data-race">
                    Transformaciones
                  </span>
                </span>
                <span className="container-info-id-transformations-card">
                  {data &&
                    data.transformations.map((trans, i) => {
                      return (
                        <CardComponentCharactersMini
                          img={trans.image}
                          name={trans.name}
                          id={trans.id}
                        />
                      );
                    })}
                </span>
              </span>
            </div>
            <div className="container-info-id-image-principal">
              {data && (
                <Image
                  className="container-info-id-image"
                  src={data?.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={`Foto de ${data?.name}`}
                  style={{ width: "70%", height: "auto" }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default id;
