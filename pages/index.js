import React from "react";
import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";
import Item from "../components/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import * as localforage from "localforage";
import moment from "moment";

const momentJA = () => {
  return moment()
    .utc()
    .add(9, "hours");
};
const oneDayAgo = momentJA()
  .subtract(1, "days")
  .format("YYYY-MM-DD");
const twoDaysAgo = momentJA()
  .subtract(2, "days")
  .format("YYYY-MM-DD");
const oneWeekAgo = momentJA()
  .subtract(7, "days")
  .format("YYYY-MM-DD");

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

const h3style = {
  marginLeft: "10px"
};

const iconStyle = {
  width: "1em",
  height: "1em",
  marginLeft: "10px",
  verticalAlign: "text-bottom"
};

const myLF = localforage.createInstance({
  driver: localforage.INDEXEDDB, // LocalForage を使用する
  name: "qt", // 名前空間
  storeName: "trend-api", // 名前空間内のインスタンスの識別名
  version: 1 // バージョン
});

class Index extends React.Component {
  static async getInitialProps() {
    return {
      daily: Array(20),
      weekly: Array(20),
      oneDayAgo: "",
      oneWeekAgo: ""
    };
  }
  constructor(props) {
    super(props);
  }
  componentDidMount = async function() {
    const localRes = await myLF.getItem("res-api");
    let data;

    if (
      localRes == null ||
      moment(localRes.created).isBefore(momentJA().subtract("15", "minutes"))
    ) {
      const url =
        "https://us-central1-qiita-trend-web-scraping.cloudfunctions.net/qiitaScraiping/";
      let dailyFetch = await fetch(url + "daily/" + oneDayAgo);
      let weeklyFetch = await fetch(url + "weekly/" + oneDayAgo);
      console.log("fetched by API");
      try {
        data = {
          daily: await dailyFetch.json(),
          weekly: await weeklyFetch.json()
        };
      } catch (error) {
        dailyFetch = await fetch(url + "daily/" + twoDaysAgo);
        weeklyFetch = await fetch(url + "weekly/" + twoDaysAgo);
        console.log("fetched two days ago by API");

        data = {
          daily: await dailyFetch.json(),
          weekly: await weeklyFetch.json()
        };
      }
      myLF.setItem("res-api", {
        data: data,
        created: momentJA().format()
      });
    } else {
      const dataByLF = await myLF.getItem("res-api");
      console.log("fetched by IndexedDB");
      data = dataByLF.data;
    }

    let daily = data.daily.data;
    let weekly = data.weekly.data;
    this.setState({
      daily: daily,
      weekly: weekly,
      oneDayAgo: oneDayAgo,
      oneWeekAgo: oneWeekAgo
    });
  };
  render() {
    let store = this.state == null ? this.props : this.state;

    const getItemElem = (elem, idx) => {
      if (elem == undefined) {
        return <Item key={idx} isLoading={true} />;
      }

      let rate = elem.likes_count;
      let url = elem.url;
      let name = elem.title;
      let user = elem.user.id;
      return (
        <Item
          key={idx}
          idx={idx}
          url={url}
          name={name}
          rate={rate}
          user={user}
        />
      );
    };

    let daily = store.daily.map((elem, idx) => {
      return getItemElem(elem, idx);
    });

    let weekly = store.weekly.map((elem, idx) => {
      return getItemElem(elem, idx);
    });

    let oneDay =
      store.oneDayAgo == "" ? "" : <h3 style={h3style}>({store.oneDayAgo})</h3>;
    let oneWeek =
      store.oneWeekAgo == "" ? (
        ""
      ) : (
        <h3 style={h3style}>
          ({store.oneWeekAgo}〜{store.oneDayAgo})
        </h3>
      );

    return (
      <Layout>
        <h1 style={h1Style}>
          Trend
          <FontAwesomeIcon style={iconStyle} icon={faChartLine} />
        </h1>
        <h2 style={h2style}>Dailyランキング</h2>
        {oneDay}
        <div style={itemContainerStyle}>{daily}</div>
        <hr />
        <h2 style={h2style}>Weeklyランキング</h2>
        {oneWeek}
        <div style={itemContainerStyle}>{weekly}</div>
        <hr />
      </Layout>
    );
  }
}

export default Index;
