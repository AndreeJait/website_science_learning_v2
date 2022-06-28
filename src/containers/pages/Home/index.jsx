import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Constant from "../../../constants";
import { buildClass } from "../../../helpers/classHelper";
import { reduxDispatch, reduxState } from "../../../helpers/reduxHelper";

const courses = [
  {
    name: "Voltage in a Paralel Circuit",
    thumbnail: Constant.VOLTAGE_IMAGE,
    link: "/voltage",
    description:
      "Manipulate interactive to make measurements and deduce the relationship between voltage across separate branches of a parallel circuit.",
  },
  {
    name: "Staying Healthy - Effect of Soap",
    thumbnail: Constant.SOAP_IMAGE,
    link: "/soap",
    description:
      "Investigate the effects of anti-microbial agents (e.g. antiseptics, disinfectants) on the population growth of micro-organisms (e.g. bacteria, fungi)",
  },
  {
    name: "Separating Mixture Salt and Rice Grains",
    thumbnail: Constant.SEPARATING_IMAGE,
    link: "/separating",
    description:
      "Manipulative interactive allows students to observe how separation techniques in different sequences affect the separation of salt and rice grains.",
  },
];

function Home(props) {
  return (
    <div className="home">
      <div className="temp-absolute">
        <div className="header-content d-flex justify-content-evenly align-items-center gap-md-0 gap-4 flex-md-row flex-column-reverse">
          <div className="header-home col-md-3 col-10 text-md-start text-center">
            <h5 className="text-white fs-5">Welcome</h5>
            <h1 className="fs-1 fw-bold text-white">
              Learning Science <br />
              Is More Interactive
            </h1>
          </div>
          <div className="image-home shadow-sm">
            <img src={Constant.LOGO} alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="col-12">
          <h1 className="fs-1 text-center text-white">Explore Your Course</h1>
          <h5 className="fs-5 text-center mt-3 text-white">
            Technology basic interactive learning can <br /> increase student
            learning motivation
          </h5>
        </div>
        <div className="course col-12 mt-5">
          {courses.map((item, index) => (
            <div
              className={buildClass({
                "d-flex course-container mb-5 justify-content-center flex-column gap-3 align-items-center": true,
                "flex-md-row-reverse": index % 2 !== 0,
                "flex-md-row": index % 2 === 0,
              })}
              key={index}
            >
              <div className="course-image rounded-circle">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="course-description col-md-5 col-12 px-3 py-2">
                <h2 className="fs-2 text-white text-bold">{item.name}</h2>
                <p className="text-white">{item.description}</p>
                <Link className="btn btn-success text-white" to={item.link}>
                  Start Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default connect(reduxState, reduxDispatch)(Home);
