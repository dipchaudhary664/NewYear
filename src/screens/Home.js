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
      <Box px="8.8%" pt="10%">
        <Flex>
          <Icon
            icon="pepicons-pop:line-y"
            color="green"
            width="40"
            height="40"
          />
          <Text
            fontSize="xl"
            fontWeight="semibold"
            color="black"
            pt="1"
            textTransform="uppercase"
          >
            Welcome To New Year Garden
          </Text>
        </Flex>
        <Flex h="60vh">
          <Box as="article" maxW="2xl" p="5" zIndex={-1}>
            <Heading size="lg" my="2" color="green">
              <Text> New Year, New Beginnings:</Text>
            </Heading>
            <Text mb="3">
              New Year, New Beginnings: Smashing Workshops & Audits Catch up on
              what’s been cookin’ at Smashing and explore some of the most
              popular community resources. New Year, New Beginnings: Smashing
              Workshops & Audits Catch up on what’s been cookin’ at Smashing and
              explore some of the most popular community resources.
            </Text>
            <Stack direction="row" spacing={4} align="center" mt="15%">
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
          <Box h="400px" w="20%" mr="5%">
            {Images.map((image) => (
              <Image src={image} rounded="lg" mb="5" />
            ))}
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Home;
