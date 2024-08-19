import { Box, Flex, Text, Spacer } from '@chakra-ui/react';
import { FaBed } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
//import ImageScrollbar from './ImageScrollbar';
import millify from 'millify';
import axios from 'axios';

 const baseUrl = 'https://redfin-com-data.p.rapidapi.com/property/search';

 async function fetchData(value) {
  const properties_api = {
    method: 'GET',
    url: baseUrl,
    params: { location: value,
      sort: 'Newest',
      min_price: '150000',
      max_price: '299991',
      home_type: 'House',
      min_bedroom: '3',
      time_on_redfin: 'NewListings'
     },
    headers: {
      'x-rapidapi-key': '0b8d6f50damsh08197df8a6621f2p1df2afjsnf6d9242df941',
      'x-rapidapi-host': 'redfin-com-data.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(properties_api);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}


const PropertyDetails = ({ propertyDetails }) => {
  const {
  } = propertyDetails;

  return (
    <Text>Empty</Text>
  );
};

export default PropertyDetails;



