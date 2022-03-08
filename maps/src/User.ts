import { faker } from "@faker-js/faker"; // randomly generate user and location
import { MapPoint } from "./Map";

export class User implements MapPoint {
  // define property --> in same line or constructor function
  name: string;
  location: {
    lat: number; // randomly generated
    lng: number; // idem
  };
  color: string;

  constructor() {
    // initializing User
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<b>User Name:</b> ${this.name}`;
  }
}
