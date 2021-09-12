import { useHistory } from "react-router";

let Login = () => {
  let history = useHistory();

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
          />
        </div>
        <button type="submit" class="btn btn-primary m-4">
          Login
        </button>

        <button
          type="submit"
          class="btn btn-primary m-4"
          onClick={() => {
            history.push("/signup");
          }}
        >
          SignUp
        </button>
      </form>
    </>
  );
};

export default Login;
