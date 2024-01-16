import Navbar from "./screens/Navbar";
import Home from "./screens/Home";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Product from "./screens/Product";
import Sidebar from "./screens/Sidebar";
function App() {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Sidebar />
        <Home />
        <Product />
      </Box>
    </ChakraProvider>
  );
}

export default App;
