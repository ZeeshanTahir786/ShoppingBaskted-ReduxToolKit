import { Box } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";

import "./App.css";
import Basket from "./components/basket";
import Product from "./components/product";

function App() {
  return (
    <Container maxWidth="md">
      <Box>
        <Product />
      </Box>
      <Box>
        <Basket />
      </Box>
    </Container>
  );
}

export default App;
