import { Container, Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";

export default function About() {
  return (
    <>
      <Navigation />
      <Hero heading={"About"} />
      <Container marginY={6}>
        <Text>
          As interest in the NFT space continues to grow, this disruptive new
          technology has begun to spark debate around the way we define and
          value art. Due to their intrinsic scarcity and provable ownership,
          NFTs now provide a unique means for facilitating value across a wide
          range of digital assets, including music, video, collectibles,
          video-game items, and digital artwork. In light of this, NFTs are
          claiming an increasingly larger share of the global art market with
          each passing year, which is remarkable considering how novel the
          technology is. In fact, some of the most expensive NFT sales, such as
          collections from Beeple and Pak, are worth considerably more than
          bonafide masterpieces in the traditional art world. For example, Pak’s
          “The Merge” sold for $91.8million, which surpasses the
          inflation-adjusted valuation for “Nymphéas en fleur” by Monet,
          “Laboureur dans un champ” by Van Gogh, and “Au Lapin Agile” from Pablo
          Picasso. With such high stakes, more people than ever are eager to get
          involved in the NFT space, either by investing in prominent NFT
          collections or by becoming an NFT artist themselves. But, before you
          jump in, you need to make sure you have a true understanding of what
          NFT collections are, what gives them value, which ones to avoid, and
          how you can get the low-down on NFT collections before they drop.
        </Text>
      </Container>
      <Footer />
    </>
  );
}
