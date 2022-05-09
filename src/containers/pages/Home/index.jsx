import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { reduxDispatch, reduxState } from "../../../helpers/reduxHelper";
function Home(props) {
  const [lang] = useState(props.lang);
  useEffect(() => {
    console.log(props);
    // props.setItem({ name: "isLogin", value: true });
  }, [props]);
  return (
    <div>
      {props.isLogin ? "Yes" : "No"}
      <p>{lang.hello} Home Here</p>
      <button
        onClick={() => {
          props.setItem({ name: "isLogin", value: true });
        }}
      >
        Test
      </button>
    </div>
  );
}
export default connect(reduxState, reduxDispatch)(Home);
