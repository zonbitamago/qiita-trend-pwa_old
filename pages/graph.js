import React from "react";
import Layout from "../components/MyLayout.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import * as FetchUtil from "../components/util/FetchUtil";
import * as DateUtil from "../components/util/DateUtil";
import ReactHighcharts from "react-highcharts";

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

const getGraphData = array => {
  let tagCount = [];
  array.forEach(node => {
    node.tags.forEach(tag => {
      let hasKey = false;
      tagCount.forEach(content => {
        if (content.name == tag.name) {
          hasKey = true;
          content.y++;
        }
      });

      if (!hasKey) {
        tagCount.push({ name: tag.name, y: 1 });
      }
    });
  });

  tagCount.sort((a, b) => {
    return a.y > b.y ? -1 : 1;
  });

  let hasOtherTags = true;
  let countOtherTags = 0;
  while (hasOtherTags) {
    let lastTag = tagCount[tagCount.length - 1];
    if (lastTag.y == 1) {
      countOtherTags++;
      tagCount.pop();
    } else {
      hasOtherTags = false;
    }
  }
  tagCount.push({ name: "その他", y: countOtherTags });

  return tagCount;
};

const getGraphConfig = data => {
  const config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie"
    },
    title: { text: "Tags" },
    series: [{ name: "Count", colorByPoint: true, data: data }]
  };

  return config;
};
class Graph extends React.Component {
  static async getInitialProps() {
    return {
      dailyTagCount: [],
      weeklyTagCount: [],
      oneDayAgo: "",
      oneWeekAgo: ""
    };
  }
  constructor(props) {
    super(props);
  }

  componentDidMount = async function() {
    let data = await FetchUtil.fetchData();

    const dailyTagCount = getGraphData(data.daily.data);
    const weeklyTagCount = getGraphData(data.weekly.data);

    this.setState({
      dailyTagCount: dailyTagCount,
      weeklyTagCount: weeklyTagCount,
      oneDayAgo: DateUtil.oneDayAgo,
      oneWeekAgo: DateUtil.oneWeekAgo
    });
  };
  render() {
    let store = this.state == null ? this.props : this.state;
    const dailyConfig = getGraphConfig(store.dailyTagCount);
    const weeklyConfig = getGraphConfig(store.weeklyTagCount);
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
          Graph
          <FontAwesomeIcon style={iconStyle} icon={faChartPie} />
        </h1>
        <h2 style={h2style}>Daily</h2>
        {oneDay}
        <ReactHighcharts config={dailyConfig} />
        <hr />
        <h2 style={h2style}>Weekly</h2>
        {oneWeek}
        <ReactHighcharts config={weeklyConfig} />
        <hr />
      </Layout>
    );
  }
}

export default Graph;
