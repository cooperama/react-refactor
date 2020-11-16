import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
