import React from "react";

function Header(props) {
  return (
    <div>
      <header role="banner">
        <h1 class="pagetitle">{props.siteTitle}</h1>
      </header>
    </div>
  );
}

export default Header;
