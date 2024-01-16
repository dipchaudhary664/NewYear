import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Heading,
  Button,
  Stack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const Home = () => {
  const Images = [
    "https://hips.hearstapps.com/hmg-prod/images/pachira-aquatica-or-money-tree-royalty-free-image-1576874859.jpg?resize=980:*",
  ];

  return (
    <ChakraProvider>
      <Box px={{ base: "8%", md: "8.8%" }} pt={{ base: "8%", md: "10%" }}>
        <Flex direction={{ md: "row" }}>
          <Icon
            icon="pepicons-pop:line-y"
            color="green"
            width="40"
            height="40"
          />
          <Text
            fontSize={{ base: "md", md: "xl" }}
            fontWeight="semibold"
            color="black"
            pt={{ base: "2", md: "1" }}
            textTransform="uppercase"
          >
            Welcome To New Year Garden
          </Text>
        </Flex>
        <Flex
          pr="4%"
          direction={{ base: "column", md: "row" }}
          h={{ base: "auto", md: "50vh" }}
          mt={{ base: "4", md: "0" }}
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Box
            as="article"
            maxW={{ base: "100%", md: "2xl" }}
            p={{ base: "4", md: "5" }}
            zIndex={-1}
            textAlign={{ base: "center", md: "left" }}
            mt={{ base: "55%", md: "0" }}
          >
            <Heading size="lg" my={{ base: "2", md: "4" }} color="green">
              <Text fontSize={{ base: "xl", md: "2xl" }}>
                New Year, New Beginnings:
              </Text>
            </Heading>
            <Text mb="3" fontSize={{ base: "sm", md: "md" }}>
              New Year, New Beginnings: Smashing Workshops & Audits Catch up on
              what’s been cookin’ at Smashing and explore some of the most
              popular community resources. New Year, New Beginnings: Smashing
              Workshops & Audits Catch up on what’s been cookin’ at Smashing and
              explore some of the most popular community resources.
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={4}
              align={{ base: "center", md: "flex-start" }}
              mt={{ base: "4", md: "8%" }}
            >
              <Button colorScheme="green" variant="solid" borderRadius="50">
                Shop Now
                <Icon
                  icon="ph:arrow-right-thin"
                  color="white"
                  width="30"
                  height="30"
                  style={{ marginLeft: "5px", paddingTop: "5px" }}
                />
              </Button>
            </Stack>
          </Box>
          <Spacer />
          <Box
            h={{ base: "200px", md: "400px" }}
            w={{ base: "100%", md: "20%" }}
            mb={{ base: "5", md: "0" }}
            mt={{ base: "4", md: "0" }}
            align="center"
          >
            {Images.map((image, index) => (
              <Image key={index} src={image} rounded="lg" h="50vh" />
            ))}
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Home;
