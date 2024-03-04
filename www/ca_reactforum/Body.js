import React from "react";

/* STEP 2.
Let’s start with the smallest component, the Body. The Body is responsible for showing the comments that users have written. It will work with the comment property of our passed-down comments object extracted from commentData.js.

Open up Body.js and define your Body component.

This component should receive props. This props object contains all of the data on our comment, such as the username, profile image, and comment, but the Body works specifically with only the comment property.

Have the component return a <p> element that contains the comment property from props. */

function Body(props) {
  return <p>{props.comment}</p>;
}

/* STEP  3.
Export the Body component after its function definition so that it can be imported and used in Card.js. */

export default Body;
