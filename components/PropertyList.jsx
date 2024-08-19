import { Box } from '@chakra-ui/react';
import Property from './Property'; // Adjust the path as necessary

const PropertyList = ({ properties }) => {
  return (
    <Box>
      {properties.map(property => (
        <Property key={property.id} property={property} />
      ))}
    </Box>
  );
};

export default PropertyList;