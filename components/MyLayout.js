import Header from "./Header";
import Footer from "./Footer";

const mainStyle = {
  marginTop: "4em"
};
const Layout = props => (
  <div>
    <Header />
    <main style={mainStyle}>{props.children}</main>
    <Footer />
  </div>
);

export default Layout;
