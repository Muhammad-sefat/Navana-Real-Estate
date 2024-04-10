const SingleEstate = ({ data }) => {
  const { image, segment_name, price, area, location, button_name } = data;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-full">
        <figure>
          <img className="w-full" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{segment_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEstate;
