import { Container, Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";

export default function About() {
  return (
    <>
      <Navigation />
      <Hero heading={"How To Use"} />
      <Container marginY={6} height={"55vh"}>
        <Text>
          All You need to do is to add NFT address in the input box and then
          click the GET NFT button
        </Text>
      </Container>
      <Footer />
    </>
  );
}
