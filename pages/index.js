import React from "react";
import Layout from "../components/MyLayout.js";
import Item from "../components/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import * as DateUtil from "../components/util/DateUtil";
import * as FetchUtil from "../components/util/FetchUtil";

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
    let data = await FetchUtil.fetchData();

    let daily = data.daily.data;
    let weekly = data.weekly.data;
    this.setState({
      daily: daily,
      weekly: weekly,
      oneDayAgo: DateUtil.oneDayAgo,
      oneWeekAgo: DateUtil.oneWeekAgo
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
