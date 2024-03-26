import { cardInfoPlanet } from "@/interface/interface";
import Image from "next/image";

const CardComponentPlanetsMini: React.FC<cardInfoPlanet> = ({
  name,
  img,
  id,
}) => {
  return (
    <>
      <span className="container-principal-planet-mini">
        <div className="card-principal card-principal-planets card-principal-planets-mini">
          <Image
            width={100}
            height={100}
            quality={100}
            src={img}
            alt={`Picture of ${name}`}
          />
        </div>
        <span className="container-info-id-data id-data-race">{name} </span>
      </span>
    </>
  );
};

export default CardComponentPlanetsMini;
