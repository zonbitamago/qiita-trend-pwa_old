import Link from "next/link";
import { Layout } from "antd";

const antHeaderStyle = {
  position: "fixed",
  zIndex: 1,
  width: "100%",
  backgroundColor: "#55c500",
  color: "white",
  height: "60px",
  display: "flex"
};

const titleStyle = {
  margin: "auto 0px auto 10px",
  fontSize: "25px",
  fontFamily: "cursive"
};

const Header = () => (
  <header>
    <Layout>
      <Layout.Header style={antHeaderStyle}>
        <div style={titleStyle}>Qt</div>
      </Layout.Header>
    </Layout>
  </header>
);

export default Header;
