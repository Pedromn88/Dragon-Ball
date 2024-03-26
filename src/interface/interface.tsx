import { getOneCharacters } from "@/utils/fetch";

export interface CharacterInfo {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: null;
}

export interface cardInfo {
  name: string;
  img: string;
  race: string;
  id: number;
}

export interface PlanetsInfo {
  img: string;
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAt: any;
}

export interface cardInfoPlanet {
  name: string;
  img: string;
  id: number;
}

export interface Params {
  id: number;
}

export interface getOneCharacter {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: any;
  originPlanet: {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: any;
  };
  transformations: [
    {
      id: number;
      name: string;
      image: string;
      ki: string;
      deletedAt: any;
    }
  ];
}

export interface Rastreator {
  name: string;
  affiliation: string;
  ki: string;
  maxKi: string;
}
