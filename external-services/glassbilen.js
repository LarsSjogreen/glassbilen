import fetch from "node-fetch";

// Hämta närmaste glassbils-stopp
// https://iceman-prod.azurewebsites.net/api/tracker/getNearestStops?minLong=17.862119674682635&minLat=59.28090239916865&maxLong=18.06176185607912&maxLat=59.37398901275659&limit=1000

// Hämta bilarnas position live
// https://iceman-prod.azurewebsites.net/api/tracker/liveVehiclePositions?minLong=17.862119674682635&minLat=59.28090239916865&maxLong=18.06176185607912&maxLat=59.37398901275659

const getGlassbil = async (lat, long) => {
  // Gör en bounding box
  const minLong = long - 0.002021;
  const maxLong = long + 0.002021;
  const minLat = lat - 0.002044;
  const maxLat = lat + 0.002044;

  const glassbilURL = `https://iceman-prod.azurewebsites.net/api/tracker/getNearestStops?minLong=${minLong}&minLat=${minLat}&maxLong=${maxLong}&maxLat=${maxLat}&limit=1000`;

  const params = {
    method: "GET",
  };

  var result;
  try {
    result = await fetch(glassbilURL, params)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  } catch (error) {
    result = { data: [], error };
  }
  return result;
};

export default getGlassbil;
