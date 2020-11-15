import React from "react";
import Browse from "./Browse"
import Main from "./pages/index"
import {Switch, Route} from "react-router-dom"
import "./css/App.css"


function App() {
  return (
    <Switch>
      <Route path="/" component={Main}/>

    </Switch>
  );
}

export default App;
