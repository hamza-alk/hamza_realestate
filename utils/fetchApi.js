import axios from 'axios';

export const baseUrl = 'https://zillow-com1.p.rapidapi.com/property';

export async function fetchData(value) {
  const properties_api = {
    method: 'GET',
    url: baseUrl,
    params: { address: value },
    headers: {
      'x-rapidapi-key': '0b8d6f50damsh08197df8a6621f2p1df2afjsnf6d9242df941',
      'x-rapidapi-host': 'zillow-com1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(properties_api);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}


// export async function fetchImages(value) {
//   const options = {
//     method: 'GET',
//     url: 'https://zillow-com1.p.rapidapi.com/images',
//     params: {zpid: value},
//     headers: {
//       'x-rapidapi-key': '0b8d6f50damsh08197df8a6621f2p1df2afjsnf6d9242df941',
//       'x-rapidapi-host': 'zillow-com1.p.rapidapi.com'
//     }
//   };

//   try {
// 	  const response = await axios.request(options);
// 	  console.log(response.data);
//   } catch (error) {
// 	  console.error(error);
//   }
// };