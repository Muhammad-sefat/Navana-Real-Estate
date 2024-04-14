import { useContext } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signinUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    const { email, password } = data;
    signinUser(email, password)
      .then((result) => {
        toast("Login Successfully");
        e.target.reset();
        if (result.user) {
          navigate(from);
        }
      })
      .catch(() => toast("Please Provide Valid Information"));
  };

  const googleSignInBtn = () => {
    googleSignIn()
      .then((result) => {
        if (result.user) {
          navigate(from);
        }
      })
      .catch((error) => console.log(error));
  };

  const GithubSignInBtn = () => {
    githubSignIn()
      .then((result) => {
        if (result.user) {
          navigate(from);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <Helmet>
        <title>Navana Group | Login</title>
      </Helmet>
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 border border-[#00CC00]">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center pb-2">
            <button
              onClick={googleSignInBtn}
              className="btn btn-secondary md:w-[88%] mx-auto mb-2"
            >
              Sign in with Google
            </button>
            <button
              onClick={GithubSignInBtn}
              className="btn btn-accent md:w-[88%] mx-auto"
            >
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
  );
};

export default Login;
