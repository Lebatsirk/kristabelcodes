import React from "react";

function NavbarItem(props) {
  return (
    <li>
      <a
        class="navbutton"
        role="button"
        href={props.link}
        target={props.target}
      >
        {props.linktext ? props.linktext : "NavbarItem"}
      </a>
    </li>
  );
}

export default NavbarItem;
