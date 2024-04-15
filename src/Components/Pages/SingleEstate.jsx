import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SingleEstate = ({ data }) => {
  const {
    image,
    segment_name,
    price,
    area,
    location,
    button_name,
    facilities,
    id,
  } = data;
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <Helmet>
        <title>Navana Group | Home</title>
      </Helmet>
      <div className="card bg-base-100 shadow-xl h-full">
        <figure>
          <img className="w-full p-3" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{segment_name}</h2>
          <p className="text-xl font-medium py-2">
            <span className="font-semibold">Location :</span> {location}
          </p>
          <div className="flex flex-wrap  gap-4">
            {facilities.map((facilitie) => (
              <a
                key={facilitie.id}
                className="font-medium border p-2 rounded-md"
              >
                {facilitie}
              </a>
            ))}
          </div>
          <hr className="my-3" />
          <div className="flex justify-between items-center pb-2">
            <p className="font-medium">Price : {price}</p>
            <p className="font-medium">Area : {area}</p>
          </div>
          <div className="card-actions">
            <Link to={`/cardstate/${id}`}>
              <button className="px-16 py-3 rounded-lg bg-[#00CC00] font-semibold">
                {button_name}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEstate;
