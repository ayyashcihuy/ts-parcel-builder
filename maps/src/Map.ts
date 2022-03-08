// CustomMap for hiding some scripts that will break our apps.
import { User } from "./User";
import { Company } from "./Company";

// Instruction to every other class
// on how they can be an argument to 'addMarker'
export interface MapPoint {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLDivElement,
      {
        zoom: 3,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  // Good Note about interface and satisfying the interface as good marker for ts
  addMarker(mapPoint: MapPoint): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapPoint.location.lat,
        lng: mapPoint.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapPoint.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
