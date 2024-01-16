import {
  ChakraProvider,
  Flex,
  Box,
  Image,
  Tabs,
  TabList,
  TabIndicator,
  Tab,
  Button,
  Select,
  Badge,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
const Navbar = () => {
  return (
    <ChakraProvider>
      <Flex
        display={{ base: "none", md: "flex" }}
        position="fixed"
        px="10%"
        w="100%"
        pt="6"
        bg="white"
        color="black"
        align="end"
        boxShadow="md"
      >
        <Box>
          <Image
            borderRadius="10%"
            boxSize="50px"
            mb="2.5"
            src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dan Abramov"
          />
        </Box>
        <Tabs variant="unstyled">
          <TabList pt="5">
            <Tab ml="20">Home</Tab>
            <Tab ml="20">Product</Tab>
            <Tab ml="20">Blog</Tab>
            <Tab ml="20">Contact</Tab>
          </TabList>
          <TabIndicator
            mt="-3.5px"
            height="3px"
            bg="green"
            borderRadius="1px"
          />
        </Tabs>
        <Box alignItems="end" ml="20" mb="2.5">
          <Icon icon="ph:heart-light" color="gray" width="25" height="25" />
        </Box>
        <Box alignItems="end" ml="5" mb="2.5">
          <Icon
            icon="iconamoon:search-thin"
            color="gray"
            width="25"
            height="25"
          />
        </Box>
        <Box alignItems="end" ml="5" mb="2.5">
          <Badge
            ml="1"
            colorScheme="red"
            borderRadius="100%"
            px="1"
            position="relative"
            left="3.5"
            top="4"
          >
            <Text fontSize="10px">5</Text>
          </Badge>
          <Icon icon="system-uicons:cart" color="gray" width="25" height="25" />
        </Box>
        <Box alignItems="center" ml="2.5" mb="2.5">
          <Icon
            icon="pepicons-pencil:line-y"
            color="gray"
            width="30"
            height="30"
          />
        </Box>
        <Button
          colorScheme="green"
          size="sm"
          borderRadius="50"
          mb="2.5"
          px="3.5"
        >
          Log In
          <Icon
            icon="mdi:user"
            color="white"
            width="20"
            height="20"
            style={{ marginLeft: "5px" }}
          />
        </Button>
        <Box mb="2">
          <Select border="none" size="sm">
            <option value="option1">EN</option>
            <option value="option2">TH</option>
          </Select>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Navbar;
