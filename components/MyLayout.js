import Header from "./Header";
import Meata from "./Meta";

const mainStyle = {
  marginTop: "4em"
};
const Layout = props => (
  <div>
    <Meata />
    <Header />
    <main style={mainStyle}>{props.children}</main>
  </div>
);

export default Layout;
