// components/AboutMe.js
import { Box, Text, VStack, Avatar } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Box p={5}>
      <VStack spacing={4} align="center">
        <Avatar name="Your Name" src="/path-to-your-photo.jpg" size="xl" />
        <Text fontSize="2xl" fontWeight="bold">About Me</Text>
        <Text fontSize="lg">
          Hello! I'm [Your Name], a [Your Profession or Role] based in [Your Location].
          I have a passion for [Your Interests or Hobbies]. 
          I enjoy working on projects related to [Your Field or Area of Expertise].
        </Text>
        <Text fontSize="md">
          Feel free to reach out to me via [Your Contact Information or Social Media].
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutMe;