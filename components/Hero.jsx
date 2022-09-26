import React from "react";
import { Container, Box, Heading, ChakraProvider } from "@chakra-ui/react";

export const Hero = ({ heading }) => {
  return (
    <ChakraProvider>
      <Container centerContent maxW="container.xl">
        <Box padding="4" color="black">
          <Heading as="h2" size="3xl">
            {heading}
          </Heading>
        </Box>
      </Container>
    </ChakraProvider>
  );
};
