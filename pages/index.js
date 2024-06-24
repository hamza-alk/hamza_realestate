import link from 'next/link';
// import Image from 'next/image';
import {Flex, Box, Text, Button } from '@chakra-ui/react';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    {/* <Image src={imageUrl} width={500} height={300} alt="banner" /> */}
    <Box p ="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
       <Button fontSize="xl" bg="blue.300" color = "white">
       {/*  <Link href={linkName}>{buttonTet}</Link> */}
      </Button>
    </Box>
    {purpose}
  </Flex>
)


export default function Home() {
  return (
    <div> 
      <h1>336 Properties</h1>
      <Banner
       purpose = "RENT A HOME"
       title="Rental Homes for"
       title2="Everyone"
       desc1="Explore Aparments and Homes"
       desc2="and more"
       buttonText="Explore Renting"
      />
      <Banner
       purpose="Buy a Home"
       title="Rental Homes for"
       title2="Everyone"
       desc1="Explore Aparments and Homes"
       desc2="and more"
       buttonText="Explore Buying"
      />
    </div>
  )
}
