import React from "react";

// Style imports
// import styles from "./Styles/Header.module.css";

function Header() {
  return (
    <div
      // className={styles.Header}
      className="container bg-primary"
      role="banner"
    >
      <h1>Ravenous React App from Codecademy course</h1>
      <h2>for kristabelcodes.co.uk</h2>
    </div>
  );
}

export default Header;
