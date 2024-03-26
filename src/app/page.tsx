import Image from "next/image";
import styles from "./page.module.css";
import { PlanetCard } from "@/components/Principal/PlanetCard";
import { PersonCard } from "@/components/Principal/PersonCard";

export default function Home() {
  return (
    <div className="container-principal">
      <PlanetCard />
      <PersonCard />
    </div>
  );
}
