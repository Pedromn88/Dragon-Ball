import Image from "next/image";
import Link from "next/link";

export const PlanetCard = () => {
  return (
    <>
      <Link href="/planets">
        <div className="card-principal ">
          <Image
            width={420}
            height={420}
            quality={100}
            src={"/planet_principal.png"}
            alt={`Picture of planet`}
          />
        </div>
        <span className="card-planet-info">
          <h2>Planetas</h2>
        </span>
      </Link>
    </>
  );
};
