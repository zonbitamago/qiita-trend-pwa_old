import Header from "./Header";

const mainStyle = {
  marginTop: "4em"
};
const Layout = props => (
  <div>
    <Header />
    <main style={mainStyle}>{props.children}</main>
  </div>
);

export default Layout;
