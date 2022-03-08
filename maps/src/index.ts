/// <reference types="@types/google.maps"/>

import { Company } from "./Company";
import { User } from "./user";
import { CustomMap } from "./Map";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
