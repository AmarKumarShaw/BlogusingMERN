import React from "react";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Banner from "./components/home/Banner";
import { Box } from "@material-ui/core";
import { BrowserRouter, Switch,Route } from "react-router-dom";
import DetailView from "./components/home/post/DetailView";
import CreateView from "./components/home/post/CreateView";
import UpdateView from "./components/home/post/UpdateView";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 64 }}>
          <Switch>
          <Route exact path="/" component={Home}/>
            <Route exact path="/details" component={DetailView} />
            <Route exact path ="/create" component={CreateView} />
            <Route exact path = "/update" component={UpdateView} />
          </Switch>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
