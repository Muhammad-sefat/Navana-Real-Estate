import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showBtn, setShowBtn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password } = data;
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      toast("Please Provide More Stronge Password");
      return;
    }
    createUser(email, password).then(() => {
      toast("Register Successfully");
      navigate("/");
    });
  };
  return (
    <div data-aos="fade-down" data-aos-duration="1000">
      <Helmet>
        <title>Navana Group | Register</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-[#00CC00]">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
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
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                placeholder="photoURL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showBtn ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  {...register("password", { required: true })}
                />
                <span
                  className="absolute bottom-3 right-3 text-xl"
                  onClick={() => setShowBtn(!showBtn)}
                >
                  {showBtn ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center py-3">
            Already Have An Account ? Please{" "}
            <NavLink to={"/login"}>
              {" "}
              <span className="text-blue-500 font-medium">Login</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
