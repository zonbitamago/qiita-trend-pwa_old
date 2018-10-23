import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChartLine, faChartPie } from "@fortawesome/free-solid-svg-icons";

const antHeaderStyle = {
  position: "fixed",
  top: "0",
  zIndex: 1,
  width: "100%",
  backgroundColor: "#55c500",
  color: "white",
  height: "60px",
  display: "flex",
  justifyContent: "space-between",
  padding: "0px",
  lineHeight: "0px"
};

const titleStyle = {
  margin: "auto 0px auto 10px",
  fontSize: "25px",
  fontFamily: "cursive"
};

const githubStyle = {
  margin: "auto 10px auto 0px",
  fontSize: "2em",
  display: "flex"
};

const anchorStyle = {
  color: "inherit"
};

const imageStyle = {
  height: "48px"
};

const linkIcon = {
  margin: "auto 5px",
  color: "inherit"
};

const Header = () => (
  <header style={antHeaderStyle}>
    <div style={titleStyle}>
      <Link href="/">
        {/* <a style={anchorStyle}>Qt</a> */}
        <a style={anchorStyle}>
          <img src="static/icon-72x72.png" style={imageStyle} />
        </a>
      </Link>
    </div>
    <div style={githubStyle}>
      <Link href="/">
        <a style={linkIcon} title="Trend">
          <FontAwesomeIcon icon={faChartLine} size="fa-2x" />
        </a>
      </Link>
      <Link href="/graph">
        <a style={linkIcon} title="Graph">
          <FontAwesomeIcon icon={faChartPie} size="fa-2x" />
        </a>
      </Link>
      <Link href="https://github.com/zonbitamago/qiita-trend-pwa">
        <a style={linkIcon} target="_blank" title="github">
          {/* Github */}
          <FontAwesomeIcon icon={faGithub} size="fa-2x" />
        </a>
      </Link>
    </div>
  </header>
);

export default Header;
