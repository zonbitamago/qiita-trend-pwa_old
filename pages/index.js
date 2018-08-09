import React from "react";
import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";
import Item from "../components/Item";

const itemContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridAutoRows: "1fr",
  gridGap: " 0.8em"
};

// const Index = props => {
//   let daily = props.daily.map((elem, idx) => {
//     let name = elem.slice(elem.indexOf("[") + 1, elem.indexOf("]"));
//     let url = elem.slice(elem.indexOf("(") + 1, elem.indexOf(")"));
//     let rate = elem.slice(elem.lastIndexOf("("));
//     return <Item key={idx} idx={idx} url={url} name={name} rate={rate} />;
//   });

//   let weekly = props.weekly.map((elem, idx) => {
//     let name = elem.slice(elem.indexOf("[") + 1, elem.indexOf("]"));
//     let url = elem.slice(elem.indexOf("(") + 1, elem.indexOf(")"));
//     let rate = elem.slice(elem.lastIndexOf("("));
//     return <Item key={idx} idx={idx} url={url} name={name} rate={rate} />;
//   });

//   return (
//     <Layout>
//       <h1>Trend</h1>
//       <h2>Dailyランキング</h2>
//       <div style={itemContainerStyle}>{daily}</div>
//       <h2>Weeklyランキング</h2>
//       <div style={itemContainerStyle}>{weekly}</div>
//     </Layout>
//   );
// };

// Index.getInitialProps = async function() {
//   const res = await fetch(
//     "https://qiita.com/api/v2/items/bb154a4bc198fb102ff3"
//   );
//   const data = await res.json();

//   let daily = data.body
//     .split("# ウィークリーいいねランキング")[0]
//     .split("####")
//     .slice(1);

//   let weekly = data.body
//     .split("# ウィークリーいいねランキング")[1]
//     .split("####")
//     .slice(1);

//   return { daily: daily, weekly: weekly };
// };

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      daily: [],
      weekly: []
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
      let name = elem.slice(elem.indexOf("[") + 1, elem.indexOf("]"));
      let url = elem.slice(elem.indexOf("(") + 1, elem.indexOf(")"));
      let rate = elem.slice(elem.lastIndexOf("("));
      return <Item key={idx} idx={idx} url={url} name={name} rate={rate} />;
    });

    let weekly = this.state.weekly.map((elem, idx) => {
      let name = elem.slice(elem.indexOf("[") + 1, elem.indexOf("]"));
      let url = elem.slice(elem.indexOf("(") + 1, elem.indexOf(")"));
      let rate = elem.slice(elem.lastIndexOf("("));
      return <Item key={idx} idx={idx} url={url} name={name} rate={rate} />;
    });

    return (
      <Layout>
        <h1>Trend</h1>
        <h2>Dailyランキング</h2>
        <div style={itemContainerStyle}>{daily}</div>
        <h2>Weeklyランキング</h2>
        <div style={itemContainerStyle}>{weekly}</div>
      </Layout>
    );
  }
}

export default Index;
