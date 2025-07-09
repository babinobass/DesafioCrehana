interface Continent {
  code?: string;
  name: string;
}
export interface ICountryProps {
  code: string;
  name: string;
  continent: Continent;
  currency: string;
}

export interface ICountryDetailsProps {
  code?: string;
  name?: string;
  capital?: string;
  currency: string;
  continent?: string;
  languages?: string[];
  emoji?: string;
  phone?: string;
  area?: number;
  population?: number;
}
