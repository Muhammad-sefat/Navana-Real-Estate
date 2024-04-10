import { useEffect, useState } from "react";
import SingleEstate from "./SingleEstate";

const Estate = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetch("residential.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-5">Estate</h1>
      <p className="p-5 font-medium py-3 md:w-[70%] mx-auto text-center">
        Welcome to our residential community where comfort, convenience, and
        community converge. Nestled in the heart of Bangladesh, our homes offer
        a haven for modern living. As you embark on this virtual tour, discover
        the essence of our residential spaces and envision the lifestyle that
        awaits you.
      </p>
      <div className="grid md:grid-cols-2 gap-5 py-5">
        {datas.map((data) => (
          <SingleEstate key={data.id} data={data}></SingleEstate>
        ))}
      </div>
    </div>
  );
};

export default Estate;
