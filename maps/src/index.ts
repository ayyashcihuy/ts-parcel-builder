/// <reference types="@types/google.maps"/>
let map: google.maps.Map;
const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

// import { Company } from "./Company";
// import { User } from "./user";

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 8,
  });
}
