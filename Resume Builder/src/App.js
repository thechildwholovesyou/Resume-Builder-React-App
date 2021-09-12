import React, { useEffect } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from "./firebase";
const App = () => {
  let unsub = useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
    return () => {
      unsub();
    };
  }, []);

  // ye susbs dega ... to use unsubscribe b krna pdega

  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/login">
            <div class="container">
              <div class="row">
                <div class="col"></div>
                <div class="col m-4">
                  <Login />
                </div>
                <div class="col"></div>
              </div>
            </div>
          </Route>
          <Route path="/signup">
            <div class="container">
              <div class="row">
                <div class="col"></div>
                <div class="col m-4">
                  <SignUp />
                </div>
                <div class="col"></div>
              </div>
            </div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
