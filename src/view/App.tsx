import React from "react";
import StyledAppContainer from "./StyledApp";
import ProductsList from "./ProductsList/ProductsList";

function App() {
  return (
    <StyledAppContainer>
      <h1>Products List</h1>
      <ProductsList />
    </StyledAppContainer>
  );
}

export default App;
