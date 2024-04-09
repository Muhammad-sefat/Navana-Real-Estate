import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center pb-2">
              <button className="btn btn-secondary md:w-[78%] mx-auto mb-2">
                Sign in with Google
              </button>
              <button className="btn btn-accent md:w-[78%] mx-auto">
                Sign in with Github
              </button>
            </div>
            <p className="text-center py-3">
              New Here ? Please{" "}
              <NavLink to={"/register"}>
                {" "}
                <span className="text-blue-500 font-medium">Register</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
