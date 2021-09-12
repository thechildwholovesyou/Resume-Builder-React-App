import { useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../firebase";

let SignUp = () => {
  let history = useHistory();

  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [email, setEmail] = useState("");

  return (
    <>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.currentTarget.value);
            }}
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary m-4"
          onClick={(e) => {
            e.preventDefault();
            if (password === confirmPassword) {
              auth.createUserWithEmailAndPassword(email, password);
            }
          }}
        >
          SignUp
        </button>

        <button
          type="submit"
          class="btn btn-primary m-4"
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default SignUp;
