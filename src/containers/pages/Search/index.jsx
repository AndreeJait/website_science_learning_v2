import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Constant from "../../../constants";
const courses = [
  {
    name: "Course Voltage",
    thumbnail: Constant.VOLTAGE_IMAGE,
    link: "/voltage",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae deserunt pariatur sapiente temporibus libero delectus praesentium optio deleniti, dolores velit facilis id illo omnis, ex explicabo eius fugit? Tempore!",
  },
  {
    name: "Course SOAP",
    thumbnail: Constant.SOAP_IMAGE,
    link: "/soap",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae deserunt pariatur sapiente temporibus libero delectus praesentium optio deleniti, dolores velit facilis id illo omnis, ex explicabo eius fugit? Tempore!",
  },
  {
    name: "Course Separating",
    thumbnail: Constant.SEPARATING_IMAGE,
    link: "/separating",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae deserunt pariatur sapiente temporibus libero delectus praesentium optio deleniti, dolores velit facilis id illo omnis, ex explicabo eius fugit? Tempore!",
  },
];

const SearchPage = (props) => {
  const { key } = useParams();
  const result = [
    ...courses.filter(
      (value) =>
        value.description.toLowerCase().includes(key.toLowerCase()) ||
        value.name.toLowerCase().includes(key.toLowerCase())
    ),
  ];
  const navigate = useNavigate();
  return (
    <div className="search-temp p-2">
      <h1 className="fs-1 text-white">Result for "{key}"</h1>
      <h4 className="fs-4 text-white">Total: {result.length}</h4>
      <div className="mt-3">
        {result.map((item, index) => (
          <div
            key={index}
            className="col-12 p-2 bg-white rounded mb-2 d-flex search-card gap-3 align-items-center flex-md-row flex-column"
          >
            <div className="image-banner">
              <img src={item.thumbnail} alt="" />
            </div>
            <div className="description">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button className="btn btn-success"             onClick={() => {
              navigate(item.link);
            }}>Start Study</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
