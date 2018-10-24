import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChartLine, faChartPie } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => (
  <header className="header_antHeaderStyle">
    <div className="header_titleStyle">
      <Link href="/">
        <a className="header_anchorStyle">
          <img src="static/icon-72x72.png" className="header_imageStyle" />
        </a>
      </Link>
    </div>
    <div className="header_githubStyle">
      <Link href="/">
        <a className="header_linkIcon" title="Trend">
          <FontAwesomeIcon icon={faChartLine} size="1x" />
        </a>
      </Link>
      <Link href="/graph">
        <a className="header_linkIcon" title="Graph">
          <FontAwesomeIcon icon={faChartPie} size="1x" />
        </a>
      </Link>
      <Link href="https://github.com/zonbitamago/qiita-trend-pwa">
        <a className="header_linkIcon" target="_blank" title="github">
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
      </Link>
    </div>
  </header>
);

export default Header;
