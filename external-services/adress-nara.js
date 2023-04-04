import fetch from 'node-fetch';

const getAdressNara = async (lat = '59.3779407', long = '17.8821515') => {
    const adressURL = `https://openstreetws.stockholm.se/LvWS-4.0/Lv.svc/json/GetNearestAddresses?apikey=9abd31a4-618d-42bf-8696-5363425ec7ab&easting=${long}&northing=${lat}&maxDistance=250&maxNrOfResults=1&streetNamePattern=*&includeAddressConnectionsForTrafficTypes=0`;
    const params = {
        method: 'GET',
    };
        
    return await fetch(adressURL, params)
        .then(res => res.json())
        .then(data => {
            return data;
        });
}

export default getAdressNara;