import React from "react";
import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";
import Item from "../components/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import * as localforage from "localforage";
import moment from "moment";

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
      weekly: Array(20)
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
      moment(localRes.created).isBefore(moment().subtract("15", "minutes"))
    ) {
      // const res = await fetch(
      //   "https://qiita.com/api/v2/items/bb154a4bc198fb102ff3"
      // );
      // data = await res.json();
      const url =
        "https://us-central1-qiita-trend-web-scraping.cloudfunctions.net/qiitaScraiping/";
      const day = moment()
        .subtract(1, "days")
        .format("YYYY-MM-DD");
      const daily = await fetch(url + "daily/" + day);
      const weekly = await fetch(url + "weekly/" + day);
      console.log("fetched by API");
      data = { daily: await daily.json(), weekly: await weekly.json() };
      myLF.setItem("res-api", { data: data, created: moment().format() });
    } else {
      const dataByLF = await myLF.getItem("res-api");
      console.log("fetched by IndexedDB");
      data = dataByLF.data;
    }

    let daily = data.daily.data;
    let weekly = data.weekly.data;
    this.setState({ daily: daily, weekly: weekly });
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

    return (
      <Layout>
        <h1 style={h1Style}>
          Trend
          <FontAwesomeIcon style={iconStyle} icon={faChartLine} />
        </h1>
        <h2 style={h2style}>Dailyランキング</h2>
        <div style={itemContainerStyle}>{daily}</div>
        <hr />
        <h2 style={h2style}>Weeklyランキング</h2>
        <div style={itemContainerStyle}>{weekly}</div>
        <hr />
      </Layout>
    );
  }
}

// const Index = props => {
//   let daily = props.daily.map((elem, idx) => {
//     if (elem == undefined) {
//       return <Item key={idx} isLoading={true} />;
//     } else {
//       let name = elem.slice(elem.indexOf("[") + 1, elem.indexOf("]"));
//       let url = elem.slice(elem.indexOf("(") + 1, elem.indexOf(")"));
//       let rate = elem.slice(elem.lastIndexOf("("));
//       return <Item key={idx} idx={idx} url={url} name={name} rate={rate} />;
//     }
//   });

//   let weekly = props.weekly.map((elem, idx) => {
//     if (elem == undefined) {
//       return <Item key={idx} isLoading={true} />;
//     } else {
//       let name = elem.slice(elem.indexOf("[") + 1, elem.indexOf("]"));
//       let url = elem.slice(elem.indexOf("(") + 1, elem.indexOf(")"));
//       let rate = elem.slice(elem.lastIndexOf("("));
//       return <Item key={idx} idx={idx} url={url} name={name} rate={rate} />;
//     }
//   });
//   return (
//     <Layout>
//       <h1 style={h1Style}>
//         Trend<FontAwesomeIcon style={iconStyle} icon={faChartLine} />
//       </h1>
//       <h2 style={h2style}>Dailyランキング</h2>
//       <div style={itemContainerStyle}>{daily}</div>
//       <h2 style={h2style}>Weeklyランキング</h2>
//       <div style={itemContainerStyle}>{weekly}</div>
//     </Layout>
//   );
// };

// Index.getInitialProps = async function() {
//   const res = await fetch(
//     "https://qiita.com/api/v2/items/bb154a4bc198fb102ff3"
//   );
//   const data = await res.json();
//   console.log(await res.status);

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

export default Index;
