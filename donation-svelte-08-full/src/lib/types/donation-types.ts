export interface Session {
  name: string;
  _id: string;
  token: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id?: string;
}

export interface Candidate {
  firstName: string;
  lastName: string;
  office: string;
  _id: string;
}

export interface Donation {
  amount: number;
  method: string;
  candidate: Candidate | string;
  donor: User | string;
  lat: number;
  lng: number;
  img:string;
}
export interface Track {
  title: string;
  artist: string;
}

export interface DataSet {
  labels: string[];
  datasets: [{ values: number[] }];
}
