import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout(props) {

  const location = useLocation();

  return (
    <>
      <Header  loggedIn={props.loggedIn} />
      <Outlet />
      {location.pathname !== "/profile" && <Footer />}
    </>
  );
}

export default Layout;