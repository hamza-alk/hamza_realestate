// pages/property.js
import { useState, useEffect } from "react";
import Property from "../components/Property"; // Adjust the path as necessary
import { Box, Text } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar";

const fakeData = [
    {
      id: "1",
      beds: 3,
      baths: 2.0,
      city: "High Point",
      // Add any other fields that you need
    },
    {
      id: "2",
      beds: 4,
      baths: 3.0,
      city: "Greensboro",
      // Add any other fields that you need
    },
    {
      id: "3",
      beds: 2,
      baths: 1.5,
      city: "Winston-Salem",
      // Add any other fields that you need
    },
  ];

const PropertyPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      //const data = await fetchData('High Point'); // Pass appropriate value
      setProperties(fakeData); // Adjust according to your API response structure
    };

    fetchProperties();
  }, []);
    

  return (
    <Box p={5}>
      <SearchBar />
      <Text fontSize="2xl" mb={4}>Properties List</Text>
      <Box>
        {properties.length ? (
          properties.map(property => (
            <Property key={property.id} property={property} />
          ))
        ) : (
          <Text>No properties found</Text>
        )}
      </Box>
    </Box>
  );
};

export default PropertyPage;