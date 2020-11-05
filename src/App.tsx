import React, { useState } from "react";
import Home from "./pages/Home"
import Result from "./pages/Result"
import { Route, Switch } from "react-router-dom";
const App = () => {
  

  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/result" component={Result} exact />
      </Switch>
    </main>
  );
};

export default App;
