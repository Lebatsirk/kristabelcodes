import React from "react";
import { comments } from "./commentData.js";

/* STEP 12.
Open up App.js again, and import the Card component which is now defined and exported. */
import Card from "./Card.js";

/* STEP 6.
In the App component body, map over the comments array with the argument named comment and return an instance of the Card component.

For each component, give it an attribute named commentObject and the value {comment}. */

// KH: I had to check the syntax for mapping over the array because it has been a while since it was covered on this course.
// It is basically arrayname.map(item => output)

/* comments.map(comment => 
    <commentObject>{comment}</commentObject>
    ); */

//comments.map((comment) => <Comment commentObject={comment} />);

/* KH: After completing the project, it wasn't rendering so I went through the walkthrough video to try and figure out where I had gone wrong.  I had missed creating the actual app component body during step 6, so instead of continuing with the walkthrough, I took the existing code I had written and put it into the component. It now makes perfect sense why it wasn't rendering though - there was no top level App component to render! */

function App() {
  return (
    <div>
      {comments.map((comment) => (
        <Card commentObject={comment} />
      ))}
      ;
    </div>
  );
}

/* STEP 13.
Then, export the App component. */
export default App;
