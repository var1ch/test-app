import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import StyledAppContainer from "./StyledAppContainer";
import ListPage from "./pages/ListPage/ListPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

function App() {
  return (
    <Router>
      <StyledAppContainer>
        <Switch>
          <Route exact path="/" component={ListPage}></Route>
          <Route path="/products/:productId">
            <DetailsPage />
          </Route>
        </Switch>
      </StyledAppContainer>
    </Router>
  );
}

export default App;
