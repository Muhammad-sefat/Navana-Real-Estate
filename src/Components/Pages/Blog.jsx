import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="md:pt-10 space-y-3">
      <Helmet>
        <title>Navana Group | Blog</title>
      </Helmet>
      <div className="dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
          <div className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4">
            {" "}
            <img
              className="rounded-md"
              data-aos="zoom-in"
              data-aos-duration="1000"
              src="https://i.ibb.co/7CcHzyf/blog.jpg"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10"
          >
            <h1 className="text-3xl font-semibold">
              10 Essential Tips for First-Time Homebuyers
            </h1>
            <p className="flex-1 pt-2">
              This is it—the big day! You’ve just purchased a new home and are
              ready to embark on a new journey with purpose and clarity for the
              future. Generation Homes Northwest is here for you with a list of
              essentials for the big move!
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-600"
            >
              <span className="font-medium text-[#00CC00]">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 dark:text-gray-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="self-center text-sm">by Leroy Jenkins</span>
              </div>
              <span className="text-xs">3 min read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
          <div className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4">
            {" "}
            <img
              className="rounded-md w-full"
              data-aos="zoom-in"
              data-aos-duration="1000"
              src="https://i.ibb.co/1fNBLvx/rental.jpg"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10"
          >
            <h1 className="text-3xl font-semibold">
              Investing in Rental Properties: A Beginner's Guide
            </h1>
            <p className="flex-1 pt-2">
              If you're thinking about investing in the rental housing market,
              you may be wondering how to get started. Like many new investors,
              you probably have an optimistic vision for your new investment
              property: reliable tenants, passive income and eventual financial
              freedom.
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-600"
            >
              <span className="font-medium text-[#00CC00]">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 dark:text-gray-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="self-center text-sm">by Tom Holand</span>
              </div>
              <span className="text-xs">6 min read</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
          <div className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4">
            {" "}
            <img
              className="rounded-md"
              data-aos="zoom-in"
              data-aos-duration="1000"
              src="https://i.ibb.co/j6ztFGw/virtual.jpg"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10"
          >
            <h1 className="text-3xl font-semibold">
              The Impact of Technology on Real Estate: From Virtual Tours to
              Smart Homes.
            </h1>
            <p className="flex-1 pt-2">
              The integration of technology has streamlined real estate
              transactions, making the process more efficient and transparent.
              Digital platforms facilitate communication between buyers,
              sellers, and real estate agents, reducing paperwork and
              administrative burdens.
            </p>
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-600"
            >
              <span className="font-medium text-[#00CC00]">Read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 dark:text-gray-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="self-center text-sm">by Lery Pegg</span>
              </div>
              <span className="text-xs">5 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
