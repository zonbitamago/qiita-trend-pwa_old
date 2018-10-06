import React from "react";
import Layout from "../components/MyLayout.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const h1Style = {
  fontFamily: "Hiragino Maru Gothic ProN",
  marginLeft: "10px"
};

const h2style = {
  marginLeft: "10px"
};

const iconStyle = {
  width: "1em",
  height: "1em",
  marginLeft: "10px",
  verticalAlign: "text-bottom"
};

class Graph extends React.Component {
  render() {
    return (
      <Layout>
        <h1 style={h1Style}>
          Trend
          <FontAwesomeIcon style={iconStyle} icon={faChartLine} />
        </h1>
        <h2 style={h2style}>Daily</h2>
        <hr />
        <h2 style={h2style}>Weekly</h2>
        <hr />
      </Layout>
    );
  }
}

export default Graph;
