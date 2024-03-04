import logo from "./logo.svg";
// import "./css/App.css";
import "./css/kcodes.css";
import "./css/kcodes_fonts.css";
import "./css/kcodes_cv.css";

import Header from "./Header.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

function CV() {
  return (
    <div>
      <Header siteTitle="kristabel codes" />
      <Navbar />
      CV content here
      {/* TO DO : figure out how to change the contents within the page when the page doesn't reload or redirect */}
      <Footer />
    </div>
  );
}

export default CV;
