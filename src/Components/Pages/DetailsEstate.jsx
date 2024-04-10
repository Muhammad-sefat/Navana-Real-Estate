import { Link, useLoaderData, useParams } from "react-router-dom";

const DetailsEstate = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  const singleCard = datas.find((card) => card.id == id);
  const {
    image,
    segment_name,
    price,
    area,
    location,
    estate_title,
    facilities,
    description,
  } = singleCard;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 p-5 rounded-md">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <img src={image} className="max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{segment_name}</h1>
            <p className="py-1 text-xl font-semibold">{estate_title}</p>
            <p className="font-medium">
              <span className="font-semibold">Location :</span> {location}
            </p>
            <p className="py-6">{description}</p>
            <div className="flex flex-wrap  gap-4">
              {facilities.map((facilitie) => (
                <a className="font-medium border p-2 rounded-md">{facilitie}</a>
              ))}
            </div>
            <hr className="my-3" />
            <div className="flex justify-between items-center pb-2">
              <p className="font-medium">Price : {price}</p>
              <p className="font-medium">Area : {area}</p>
            </div>
            <Link to={"/"}>
              <button className="btn bg-[#00CC00] mt-3">Back To Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsEstate;
