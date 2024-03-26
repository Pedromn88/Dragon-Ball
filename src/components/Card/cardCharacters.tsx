import { cardInfo } from "@/interface/interface";
import Image from "next/image";
import Link from "next/link";

const CardComponentCharacters: React.FC<cardInfo> = ({
  name,
  img,
  race,
  id,
}) => {
  return (
    <>
      <Link href={`characters/${id}`}>
        <div className="card-component">
          <div className="container-card-dragonBall">
            <span className="img-dragonBall">
              <Image
                src={"/ball.png"}
                width={300}
                height={300}
                alt={"dragon Ball"}
              />
            </span>
            <Image
              src={img}
              width={0}
              height={0}
              sizes="100vw"
              alt={`Picture of ${name}`}
              className={`img-card-race-${race.split(" ")[0]}`}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <div className="info-card-characters">
              <h3>{name}</h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardComponentCharacters;
