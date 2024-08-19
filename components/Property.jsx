// components/Property.jsx
import { Box, Text, Flex, Spacer } from '@chakra-ui/react';
import Link from 'next/link';

const Property = ({ property }) => {
  const { id, beds, baths, city } = property;

  return (
    <Link href={`/property/${id}`} passHref>
      <Box
        p={4}
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        _hover={{ boxShadow: 'lg', cursor: 'pointer' }}
      >
        <Flex align="center" mb={2}>
          <Text fontWeight="bold" fontSize="lg" mr={2}>
            {city}
          </Text>
          <Spacer />
          <Text color="gray.600" fontSize="sm">
            {beds} Beds | {baths} Baths
          </Text>
        </Flex>
        <Text color="gray.600" fontSize="sm">
          More details...
        </Text>
      </Box>
    </Link>
  );
};

export default Property;
