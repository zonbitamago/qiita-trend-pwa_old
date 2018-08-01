import Link from "next/link";
import { Layout, Dropdown, Menu, Icon } from "antd";

const antHeaderStyle = {
  position: "fixed",
  zIndex: 1,
  width: "100%",
  backgroundColor: "#55c500",
  color: "white",
  height: "60px",
  display: "flex",
  padding: "0px",
  lineHeight: "0px"
};

const titleStyle = {
  margin: "auto 0px auto 10px",
  fontSize: "25px",
  fontFamily: "cursive"
};

const anchorStyle = {
  color: "inherit"
};

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link href="/">
        <a>Trend</a>
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Link href="/about">
        <a>About</a>
      </Link>
    </Menu.Item>
  </Menu>
);

const Header = () => (
  <header>
    <Layout>
      <Layout.Header style={antHeaderStyle}>
        <Dropdown overlay={menu} trigger={["click"]}>
          <div style={titleStyle}>
            <a style={anchorStyle} href="#">
              Qt<Icon type="down" />
            </a>
          </div>
        </Dropdown>
      </Layout.Header>
    </Layout>
  </header>
);

export default Header;
