import * as Location from 'expo-location';
import GetWeather from '../API/GetWeather';

const LocationHelper = async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        status = 'Permission to access location was denied'
        return status;
    }

    let location = await Location.getCurrentPositionAsync({});
    const place = await Location.reverseGeocodeAsync({
      latitude : location.coords.latitude,
      longitude : location.coords.longitude
    });

    const data = await GetWeather({
      method: "GET",
      params: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      }
    })

    return {
        place,
        data
    }
}

export default LocationHelper