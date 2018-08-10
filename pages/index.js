import React from "react";
import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";
import Item from "../components/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const itemContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridAutoRows: "1fr",
  gridGap: " 0.8em"
};

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

class Index extends React.Component {
  static async getInitialProps() {
    return {
      daily: Array(10),
      weekly: Array(20)
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      daily: this.props.daily,
      weekly: this.props.weekly
    };
  }
  componentDidMount = async function() {
    const res = await fetch(
      "https://qiita.com/api/v2/items/bb154a4bc198fb102ff3"
    );
    const data = await res.json();
    let daily = data.body
      .split("# ウィークリーいいねランキング")[0]
      .split("####")
      .slice(1);
    let weekly = data.body
      .split("# ウィークリーいいねランキング")[1]
      .split("####")
      .slice(1);
    this.setState({ daily: daily, weekly: weekly });
  };
  render() {
    let daily = this.state.daily.map((elem, idx) => {
      if (elem == undefined) {
        return <Item key={idx} isLoading={true} />;
      } else {
        let name = elem.slice(elem.indexOf("[") + 1, elem.indexOf("]"));
        let url = elem.slice(elem.indexOf("(") + 1, elem.indexOf(")"));
        let rate = elem.slice(elem.lastIndexOf("("));
        return <Item key={idx} idx={idx} url={url} name={name} rate={rate} />;
      }
    });

    let weekly = this.state.weekly.map((elem, idx) => {
      if (elem == undefined) {
        return <Item key={idx} isLoading={true} />;
      } else {
        let name = elem.slice(elem.indexOf("[") + 1, elem.indexOf("]"));
        let url = elem.slice(elem.indexOf("(") + 1, elem.indexOf(")"));
        let rate = elem.slice(elem.lastIndexOf("("));
        return <Item key={idx} idx={idx} url={url} name={name} rate={rate} />;
      }
    });

    return (
      <Layout>
        <h1 style={h1Style}>
          Trend<FontAwesomeIcon style={iconStyle} icon={faChartLine} />
        </h1>
        <h2 style={h2style}>Dailyランキング</h2>
        <div style={itemContainerStyle}>{daily}</div>
        <h2 style={h2style}>Weeklyランキング</h2>
        <div style={itemContainerStyle}>{weekly}</div>
      </Layout>
    );
  }
}

export default Index;
