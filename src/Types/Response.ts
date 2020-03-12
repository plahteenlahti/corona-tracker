export type Response = {
  confirmed: ConfirmedCase[];
  deaths: DeathCase[];
  recovered: RecoveredCase[];
};

export type ConfirmedCase = {
  id: number;
  date: string;
  healthCareDistrict: string;
  infectionSource: string;
  infectionSourceCountry: string;
};

export type DeathCase = {
  id: number;
  date: string;
  healthCareDistrict: string;
};

export type RecoveredCase = {
  id: number;
  date: string;
  healthCareDistrict: string;
};
