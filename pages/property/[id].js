// pages/property/[id].tsx
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';
import axios from 'axios';
import {baseUrl, fetchData} from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = ({ propertyDetails: { imgSrc, zestimate, yearBuilt, description, lotSize, bedrooms, propertyTypeDimension} }) => (
  
  <Box maxWidth='1000px' margin='auto' p='4'>
    {imgSrc && <ImageScrollbar data={imgSrc} />}
    <Box w='full' p='6'>
      <Flex paddingTop='2' alignItems='center'>
        <Text fontWeight='bold' fontSize='lg'>
          USD {zestimate}
        </Text>
        <Spacer />
      </Flex>
      <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
        {bedrooms}<FaBed /> | {millify(lotSize)} sqft <BsGridFill />
      </Flex>
    </Box>
    <Box marginTop='2'>
      <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text>
      <Text lineHeight='2' color='gray.600'>{description}</Text>
    </Box>
    <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Type</Text>
        <Text fontWeight='bold'>{propertyTypeDimension}</Text>
      </Flex>
      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Description</Text>
        <Text fontWeight='bold'>{description}</Text>
      </Flex>
      {furnishingStatus && (
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
          <Text>Year Built</Text>
          <Text fontWeight='bold'>{yearBuilt}</Text>
        </Flex>
      )}
    </Flex>
    </Box>
  );
  
export default PropertyDetails;


export async function getServerSideProps({ params: { id } }) {
  const data = await fetchData({id});
  
  return {
    props: {
      propertyDetails: data,
    },
  };
}