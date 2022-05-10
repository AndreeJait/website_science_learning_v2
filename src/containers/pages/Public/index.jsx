import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../../components/organisms/Navbar";
import { buildClass } from "../../../helpers/classHelper";
import Home from "../Home";
import Separating from "../Separating";
import Soap from "../Soap";
import Voltage from "../Voltage";

const navbar = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Separating",
    link: "/separating",
  },
  {
    name: "Soap",
    link: "/soap",
  },
  {
    name: "Voltage",
    link: "/voltage",
  },
];

function Public(props) {
  return (
    <div className={buildClass({})}>
      <Navbar navbar={navbar} />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/separating" element={<Separating/>}/>
          <Route path="/soap" element={<Soap/>}/>
          <Route path="/voltage" element={<Voltage/>}/>
      </Routes>
      <div className="footer col-12 bg-secondary py-2">
          <h6 className="text-white text-center">Create By IT DEl &copy; 20022</h6>
      </div>
    </div>
  );
}

export default Public;
