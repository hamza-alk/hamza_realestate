// components/Home.js
import { Box, Text, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  fontWeight: 'bold',
};

const Home = () => {
  return (
    <Box p={5}>
      <VStack spacing={4} align="center">
        <Text fontSize="4xl" fontWeight="bold">336 Properties</Text>
        <Text fontSize="lg">
          I'm glad you're here. Explore my work and learn more about me.
          Use the navigation above to check out different sections.
        </Text>
        <Link href="/property">
          <Button style={buttonStyle}>View Properties</Button>
        </Link>
        <Link href="/about">
          <Button style={buttonStyle}>About Me</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Home;
