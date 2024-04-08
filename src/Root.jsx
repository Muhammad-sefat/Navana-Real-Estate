import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="px-10 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
