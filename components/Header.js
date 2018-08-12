import Link from "next/link";

const antHeaderStyle = {
  position: "fixed",
  top: "0",
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

const Header = () => (
  <header style={antHeaderStyle}>
    <div style={titleStyle}>
      <Link href="/">
        <a style={anchorStyle}>Qt</a>
      </Link>
    </div>
  </header>
);

export default Header;
