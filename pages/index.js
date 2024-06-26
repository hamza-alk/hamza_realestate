import Link from 'next/link';
// import Image from 'next/image';
import {Flex, Box, Text, Button } from '@chakra-ui/react';

import { baseUrl, fetchApi } from '../utils/fetchApi';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Box p ="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Link href="/">
        <Button fontSize="xl" bg="blue.300" color="white">
          {buttonText}
        </Button>
      </Link>
    </Box>
  </Flex>
);


export default function Home() {
  return (
    <div style={{ textAlign: 'center'}}> 
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'blue' }}>336 Properties</h1>
      <Banner
       purpose = "RENT A HOME"
       title="Rental Homes for"
       title2="Everyone"
       desc1="Explore Aparments and Homes"
       desc2="and more"
       buttonText="Explore Renting"
      />
      <Banner
       purpose="BUY A HOME"
       title="Rental Homes for"
       title2="Everyone"
       desc1="Explore Aparments and Homes"
       desc2="and more"
       buttonText="Explore Buying"
      />
    </div>
  )
}

{/*
export async function getStatticPropes() {
  const propertyForSale = await fetchApi('$(baseUrl}/properties/list?locationExternalIDs=5002')
}

*/}