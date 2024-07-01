import axios from 'axios';

export const baseUrl = 'https://api.rentcast.io/v1/properties';

export async function fetchData(value) {
  const properties_api = {
    method: 'GET',
    url: baseUrl,
    params: { address: value },
    headers: {
      accept: 'application/json',
      'X-Api-Key': '826dd2c652a14fd992efc858bb14195e'
    }
  };

  try {
    const response = await axios.request(properties_api);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}