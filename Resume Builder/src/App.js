import React, { useEffect } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth, firestore } from "./firebase";
const App = () => {
  let unsub = useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log(user);

      // yaha pe hm user naam k object se uski uid and email nikal rahe h 
      // agar user exists krta hai to uska reference nikal dete h 
      // we know that agar user nhi h fir bhi ek temp docRef me kuch reference milta h 
      // to agar user exists krta h to kuch nhi krna 
      // nahi krta h to us  temp docRef me hm new user set kr denge
      
      let { uid, email } = user;
      if (user) {
        let docRef = firestore.collection("users").doc(uid);
        let doc = await docRef.get();

        if (!doc.exists) {
          docRef.set({
            email: email,
          });
        }
      }
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
