import { cardInfo } from "@/interface/interface";
import Image from "next/image";

const CardComponentCharactersMini: React.FC<cardInfo> = ({
  name,
  img,
  race,
  id,
}) => {
  return (
    <>
      <div className="card-component-mini">
        <div className=" container-card-dragonBall container-card-dragonBall-mini">
          <Image
            src={img}
            width={0}
            height={0}
            sizes="100vw"
            alt={`Picture of ${name}`}
            className={`img-card-race`}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CardComponentCharactersMini;
