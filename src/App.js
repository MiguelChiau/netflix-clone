import React from "react";
import Browse from "./Browse"
import Main from "./pages/index"
import Login from "./pages/Login"
import ChoosePlan from "./pages/ChoosePlan"
import Watching from "./pages/Watching"
import {Switch, Route} from "react-router-dom"
import "./css/App.css"


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/login" component={Login}/>
      <Route path="/browse" component={Browse}/>
      <Route path="/choose-plan" component={ChoosePlan}/>
      <Route path="/watching" component={Watching}/>
    </Switch>
  );
}

export default App;
