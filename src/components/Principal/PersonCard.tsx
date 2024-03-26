import Image from "next/image";
import Link from "next/link";

export const PersonCard = () => {
  return (
    <Link href="/characters">
      <div className="card-principal">
        <Image
          width={420}
          height={420}
          quality={100}
          src={"/person_principal.png"}
          alt={`Picture of person`}
        />
      </div>
      <span className="card-person-info">
        <h2>Personajes</h2>
      </span>
    </Link>
  );
};
