import React from "react";

/* STEP 4.
Open Header.js and define your Header component.

This component will be responsible for the profileImg and username properties of our passed-down comments object.

The Header component should receive props. The component should return two elements, an <img> element whose src attribute will receive the profileImg property from props, and a <h1> element, displaying username from props.
 */

// KH: My first attempt at this step resulted in a syntax error, which I used VSCode to identify was because a single outer element needs to be returned, so I solved this by wrapping the image and h1 tags within a div tag

function Header(props) {
  return (
    <div>
      <img src={props.profileImg} />
      <h1>{props.username}</h1>
    </div>
  );
}

/*  STEP 5.
Export the Header component after its function definition so that it can be imported and used in Card.js. */

export default Header;
