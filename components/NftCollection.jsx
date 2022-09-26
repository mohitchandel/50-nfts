import React, { useEffect, useState } from "react";
import axios from "axios";
import { ethers } from "ethers";
import {
  Center,
  Image,
  Input,
  FormControl,
  Button,
  Grid,
  GridItem,
  Container,
  Heading,
  ChakraProvider,
  Text,
} from "@chakra-ui/react";
import { NFT } from "./NFT";

export const NftCollection = () => {
  const [nftData, setNftData] = useState({});
  const [contAddress, setContAddress] = useState(
    "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
  );
  const [isLoading, setIsLoading] = useState(false);

  const validateAddress = (address) => {
    return ethers.utils.isAddress(address);
  };

  /* A function that is called when the user clicks the button. */
  const fetchNftData = async () => {
    setIsLoading(true);

    if (!validateAddress(contAddress)) {
      setIsLoading(false);
      alert("Please enter valid address");
      return;
    }

    const options = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_NFTPORT_API_URL}/v0/nfts/${contAddress}`,
      params: {
        chain: "ethereum",
        account_address: contAddress,
        page_size: "50",
        include: "metadata",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${process.env.NEXT_PUBLIC_NFTPORT_API_KEY}`,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setIsLoading(false);
        setNftData(response.data);
      })
      .catch(function (error) {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchNftData();
  }, []);

  return (
    <ChakraProvider>
      <Container centerContent maxW="container.xl">
        <FormControl maxW="md" isRequired marginTop={10}>
          <Center>
            <Heading as="h3">NFT Contract Address</Heading>
          </Center>
          <Input
            onChange={(e) => setContAddress(e.target.value)}
            defaultValue={contAddress}
            type="text"
            placeholder="Contract Address"
          />
        </FormControl>
        <Button
          disabled={isLoading}
          onClick={fetchNftData}
          bg="#0e76fd"
          color={"#fff"}
          marginY={4}
        >
          {isLoading ? "Loading..." : "Get NFTs"}
        </Button>
        <Grid marginY={10}>
          <GridItem>
            <Center>
              <Image
                rounded={"xl"}
                height={50}
                width={50}
                objectFit={"cover"}
                src={nftData.contract?.metadata?.thumbnail_url}
              />
            </Center>
          </GridItem>
          <GridItem marginY={4}>
            <Center>
              <Heading as="h4" size="lg">
                {nftData.contract?.name}
              </Heading>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Text>{nftData.contract?.metadata?.description}</Text>
            </Center>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} marginY={10}>
          {nftData.nfts?.map((nft, index) => {
            return (
              <GridItem marginY={6} key={index}>
                <NFT
                  image={nft.cached_file_url}
                  name={nft.metadata.name}
                  tokenId={nft.token_id}
                />
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </ChakraProvider>
  );
};
