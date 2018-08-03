import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";
import Item from "../components/Item";
import { Divider } from "antd";

const Index = props => {
  let daily = props.daily.map((elem, idx) => {
    let name = elem.slice(elem.indexOf("[") + 1, elem.indexOf("]"));
    let url = elem.slice(elem.indexOf("(") + 1, elem.indexOf(")"));
    let rate = elem.slice(elem.lastIndexOf("("));
    return <Item key={idx} idx={idx} url={url} name={name} rate={rate} />;
  });

  let weekly = props.weekly.map((elem, idx) => {
    let name = elem.slice(elem.indexOf("[") + 1, elem.indexOf("]"));
    let url = elem.slice(elem.indexOf("(") + 1, elem.indexOf(")"));
    let rate = elem.slice(elem.lastIndexOf("("));
    return <Item key={idx} idx={idx} url={url} name={name} rate={rate} />;
  });

  return (
    <Layout>
      <h2>Dailyランキング</h2>
      {daily}
      <Divider />
      <h2>Weeklyランキング</h2>
      {weekly}
      <Divider />
    </Layout>
  );
};

Index.getInitialProps = async function() {
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

  return { daily: daily, weekly: weekly };
};

export default Index;
