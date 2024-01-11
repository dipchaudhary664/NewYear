import Navbar from "./screens/Navbar";
import Home from "./screens/Home";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Product from "./screens/Product";
function App() {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Home />
        <Product />
      </Box>
    </ChakraProvider>
  );
}

export default App;
