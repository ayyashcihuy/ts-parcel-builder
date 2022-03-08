import { faker } from "@faker-js/faker";
import { MapPoint } from "./Map";

export class Company implements MapPoint {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <h3> Company name: ${this.companyName} </h3>
    <p> <b>Catchphrase:</b> ${this.catchPhrase}</p>
    `;
  }
}
