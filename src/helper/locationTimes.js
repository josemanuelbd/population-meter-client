import axios from 'axios';
import { apiKey, apiUrl } from '../config';

export function getCurrentPosition(options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}) {
  return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

export const getTimesByLocation = async () => {
  if (navigator.geolocation) {

    const position = await getCurrentPosition();

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const response = await axios.get(apiUrl, { 
      params: {
        apiKey,
        lat,
        lon
      }
    });

    return response.data;
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}