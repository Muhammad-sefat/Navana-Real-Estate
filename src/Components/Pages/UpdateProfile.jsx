import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, image } = data;
    updateUser(name, image).then(() => {
      toast("Profile Update Successful");
      reset();
    });
  };

  return (
    <div data-aos="fade-left" data-aos-duration="1000">
      <Helmet>
        <title>Navana Group | Update Profile</title>
      </Helmet>
      <section className="p-6 dark:text-gray-800">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50 border border-[#00CC00]"
        >
          <div className="text-center">
            <img
              className="rounded-full w-36 mx-auto"
              src={
                user?.photoURL ||
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              }
            />
            <p className="font-semibold">
              Name : {user?.displayName || "Muhammad Sefat"}
            </p>
            <p>Email : {user?.email || "muhammadsefat55@gmail.com"}</p>
          </div>
          <h2 className="w-full text-3xl font-bold leading-tight text-center">
            Update Profile
          </h2>
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              required=""
              className="block w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 ml-1">
              Photo URL
            </label>
            <input
              id="image"
              type="text"
              placeholder="Your Photo URL"
              required=""
              className="block w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
            >
              Save Change
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateProfile;
