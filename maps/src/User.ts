import { faker } from "@faker-js/faker"; // randomly generate user and location

export class User {
  // define property --> in same line or constructor function
  name: string;
  location: {
    lat: number; // randomly generated
    lng: number; // idem
  };

  constructor() {
    // initializing User
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }
}
