import logo from "./logo.svg";
// import "./css/App.css";
import "./css/kcodes.css";
import "./css/kcodes_fonts.css";
import "./css/kcodes_cv.css";

import Header from "./Header.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div>
      <Header siteTitle="kristabel codes" />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
