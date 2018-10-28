import Header from "./Header";
import Footer from "./Footer";

const Layout = props => (
  <div>
    <Header />
    <main className="mylayout_mainStyle">{props.children}</main>
    <Footer />
  </div>
);

export default Layout;
