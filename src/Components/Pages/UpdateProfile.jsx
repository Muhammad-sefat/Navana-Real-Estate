import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Navana Group | Update Profile</title>
      </Helmet>
      <section className="p-6 dark:text-gray-800">
        <form
          noValidate=""
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50 border border-[#00CC00]"
        >
          <div className="text-center">
            <img src={user.photoURL} className="rounded-full mx-auto" />
            <p className="font-semibold">{user.displayName}</p>
            <p>{user.email}</p>
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
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              required=""
              className="block w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateProfile;
