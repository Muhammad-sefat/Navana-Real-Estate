import { Helmet } from "react-helmet-async";
import Estate from "./Estate";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Navana Group | Home</title>
      </Helmet>
      <Slider></Slider>
      <Estate></Estate>
    </div>
  );
};

export default Home;
