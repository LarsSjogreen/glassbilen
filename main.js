#!/usr/bin/env node
import getAdressNara from "./external-services/adress-nara.js";
import getGlassbil from "./external-services/glassbilen.js";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.lat || !process.env.long) {
  console.log(
    "Ställ in din latitud och longitud i miljövariablerna eller i .env-filen"
  );
  process.exit(0);
}

const homeCoords = {
  lat: parseFloat(process.env.lat),
  long: parseFloat(process.env.long),
};

getGlassbil(homeCoords.lat, homeCoords.long).then((r) => {
  console.log("När kommer glassbilen?");
  r.data.forEach((el) => {
    getAdressNara(el.latitude, el.longitude).then((p) =>
      console.log(
        `Glassbilen kommer till ${p[0].StreetName} mellan klockan ${
          el.nextTime
        } den ${el.nextDate.substr(0, 10)}`
      )
    );
  });
});
