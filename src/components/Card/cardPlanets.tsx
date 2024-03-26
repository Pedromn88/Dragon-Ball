import { cardInfoPlanet } from "@/interface/interface";
import Image from "next/image";

const CardComponentPlanets: React.FC<cardInfoPlanet> = ({ name, img, id }) => {
  return (
    <>
      <div className="card-principal card-principal-planets">
        {name && (
          <span className="card-planet-info card-planet-info-component">
            <h2>{name}</h2>
          </span>
        )}
        <Image
          width={340}
          height={340}
          quality={100}
          src={img}
          alt={`Picture of ${name}`}
        />
      </div>
    </>
  );
};

export default CardComponentPlanets;
