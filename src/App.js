import React from "react";
import Comps from "../src/pages/Comps";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/mainCss.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <Comps {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
