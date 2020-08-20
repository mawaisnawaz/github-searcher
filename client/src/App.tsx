import * as React from "react";
import { AppContainer } from "./App.style";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SearchContainer from "./pages/search";

function App(): React.ReactElement {
  return (
    <Router>
      <AppContainer>
        <Route path="/" exact component={SearchContainer} />
      </AppContainer>
    </Router>
  );
}

export default App;
