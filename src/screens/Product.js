import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Card,
  CardBody,
  Image,
  Heading,
  Badge,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const Product = () => {
  const DataList = [
    {
      id: 1,
      image:
        "https://img.livingstyles.com.au/media/catalog/product/cache/1/small_image/400x/0dc2d03fe217f8c83829496872af24a0/G/F/GF90030.jpg",
      name: "Product Name",
      desc: "Description of the product",
      rat: "(25 Reviews)",
      price: "$19.99",
      discount: "-33%",
      disPrice: "$200",
    },
    {
      id: 2,
      image:
        "https://img.livingstyles.com.au/media/catalog/product/cache/1/small_image/400x/0dc2d03fe217f8c83829496872af24a0/G/F/GF90030.jpg",
      name: "Product Name",
      desc: "Description of the product",
      rat: "(25 Reviews)",
      price: "$19.99",
      discount: "-33%",
      disPrice: "$200",
    },
    {
      id: 3,
      image:
        "https://img.livingstyles.com.au/media/catalog/product/cache/1/small_image/400x/0dc2d03fe217f8c83829496872af24a0/G/F/GF90030.jpg",
      name: "Product Name",
      desc: "Description of the product",
      rat: "(25 Reviews)",
      price: "$19.99",
      discount: "-33%",
      disPrice: "$200",
    },
    {
      id: 4,
      image:
        "https://img.livingstyles.com.au/media/catalog/product/cache/1/small_image/400x/0dc2d03fe217f8c83829496872af24a0/G/F/GF90030.jpg",
      name: "Product Name",
      desc: "Description of the product",
      rat: "(25 Reviews)",
      price: "$19.99",
      discount: "-33%",
      disPrice: "$200",
    },
    {
      id: 5,
      image:
        "https://img.livingstyles.com.au/media/catalog/product/cache/1/small_image/400x/0dc2d03fe217f8c83829496872af24a0/G/F/GF90030.jpg",
      name: "Product Name",
      desc: "Description of the product",
      rat: "(25 Reviews)",
      price: "$19.99",
      discount: "-33%",
      disPrice: "$200",
    },
    {
      id: 6,
      image:
        "https://img.livingstyles.com.au/media/catalog/product/cache/1/small_image/400x/0dc2d03fe217f8c83829496872af24a0/G/F/GF90030.jpg",
      name: "Product Name",
      desc: "Description of the product",
      rat: "(25 Reviews)",
      price: "$19.99",
      discount: "-33%",
      disPrice: "$200",
    },
    {
      id: 7,
      image:
        "https://img.livingstyles.com.au/media/catalog/product/cache/1/small_image/400x/0dc2d03fe217f8c83829496872af24a0/G/F/GF90030.jpg",
      name: "Product Name",
      desc: "Description of the product",
      rat: "(25 Reviews)",
      price: "$19.99",
      discount: "-33%",
      disPrice: "$200",
    },
    {
      id: 8,
      image:
        "https://img.livingstyles.com.au/media/catalog/product/cache/1/small_image/400x/0dc2d03fe217f8c83829496872af24a0/G/F/GF90030.jpg",
      name: "Product Name",
      desc: "Description of the product",
      rat: "(25 Reviews)",
      price: "$19.99",
      discount: "-33%",
      disPrice: "$200",
    },
    {
      id: 9,
      image:
        "https://img.livingstyles.com.au/media/catalog/product/cache/1/small_image/400x/0dc2d03fe217f8c83829496872af24a0/G/F/GF90030.jpg",
      name: "Product Name",
      desc: "Description of the product",
      rat: "(25 Reviews)",
      price: "$19.99",
      discount: "-33%",
      disPrice: "$200",
    },
  ];

  const [displayedCards, setDisplayedCards] = useState(3);

  const handleSeeMore = () => {
    setDisplayedCards(displayedCards + 3);
  };

  const handleSeeLess = () => {
    setDisplayedCards(Math.max(displayedCards - 6));
  };

  return (
    <ChakraProvider>
      <Box mt={{ base: "50%", sm: "5%", md: "5%" }}>
        <Text
          align="center"
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
        >
          Best Seller Product
        </Text>
      </Box>

      <Flex
        px="5%"
        my="3%"
        gap="5%"
        align={"center"}
        mx="auto"
        justify="center"
        flexWrap="wrap"
        mt={{ base: "8%", sm: "5%" }}
      >
        {DataList.slice(0, displayedCards).map((item) => (
          <Card
            maxW={{ base: "100%", sm: "48%", md: "32%", lg: "25%" }}
            mb="2%"
            boxShadow="lg"
            borderRadius="10"
            border="1px solid gray"
            zIndex="-2"
            key={item.id}
          >
            <Image
              src={item.image}
              alt="MoneyPlant"
              borderTopRadius="10"
              objectFit="cover"
            />
            <CardBody>
              <Flex align="center">
                {[1, 2, 3, 4, 5].map((index) => (
                  <Icon
                    key={index}
                    icon="ph:star-fill"
                    color="orange"
                    width="20"
                    height="20"
                  />
                ))}
                <Text ml="2" color="gray.500">
                  {item.rat}
                </Text>
              </Flex>
              <Heading fontSize="lg" fontWeight="semibold" color="black">
                {item.name}
              </Heading>
              <Text mt="1" fontSize="sm">
                {item.desc}
              </Text>
              <Flex align="center" gap={2}>
                <Text fontSize="xl" fontWeight="bold">
                  {item.price}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {item.disPrice}
                </Text>
                <Text fontSize="xs" color="red">
                  {item.discount}
                </Text>
                <Box
                  align="center"
                  padding="1"
                  borderRadius="10%"
                  bg="green"
                  position="absolute"
                  bottom="5"
                  right="4"
                  w="12%"
                  h="8%"
                >
                  <Icon
                    icon="bitcoin-icons:cart-outline"
                    color="white"
                    width="25"
                    height="25"
                  />
                </Box>
              </Flex>
            </CardBody>
            <Badge
              colorScheme="red"
              align="center"
              width="28%"
              ml="3"
              position="absolute"
              top="3"
            >
              Best Seller
            </Badge>
            <Box position="absolute" right="3" top="2">
              <Icon icon="ph:heart" color="gray" width="25" height="25" />
            </Box>
          </Card>
        ))}
      </Flex>

      <Box align="center" h="10vh">
        {displayedCards < DataList.length ? (
          <Button
            colorScheme="green"
            variant="solid"
            borderRadius="100"
            onClick={handleSeeMore}
          >
            See More
          </Button>
        ) : (
          <Button
            colorScheme="red"
            variant="solid"
            borderRadius="100"
            onClick={handleSeeLess}
          >
            See Less
          </Button>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default Product;
