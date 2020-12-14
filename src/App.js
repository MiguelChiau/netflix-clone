import React from "react";
import Browse from "./Browse"
import Main from "./pages/index"
import Login from "./pages/Login"
import {Switch, Route} from "react-router-dom"
import "./css/App.css"


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/login" component={Login}/>
    </Switch>
  );
}

export default App;
