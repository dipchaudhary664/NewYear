import {
  ChakraProvider,
  Drawer,
  Image,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Link,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <ChakraProvider>
      <Box display={{ base: "block", md: "none" }}>
        <Button
          mt={2}
          pl={4}
          variant={"unstyled"}
          ref={btnRef}
          onClick={onOpen}
        >
          <Icon
            icon="icon-park-outline:hamburger-button"
            color="gray"
            width="40"
            height="40"
          />
        </Button>
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent color="black">
          <DrawerCloseButton color="gray" size={"lg"} />
          <DrawerHeader>
            <Image
              borderRadius="10%"
              boxSize="60px"
              src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="User Avatar"
            />
          </DrawerHeader>
          <Box borderTop="1px" borderColor="gray"></Box>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <Link href="#" fontSize="lg">
                Home
              </Link>
              <Link href="#" fontSize="lg">
                Product
              </Link>
              <Link href="#" fontSize="lg">
                Blog
              </Link>
              <Link href="#" fontSize="lg">
                Contact
              </Link>
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </ChakraProvider>
  );
};

export default Sidebar;
