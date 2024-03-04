import React from 'react';

/* STEP 7.
Open Card.js and import the Header and Body components. Card will be the outer “shell” that contains our two smaller components: Card is the parent, and Header and Body are the child components.

Begin defining the Card component. Card should receive props.

Card should return an instance of the Header component, and an instance of the Body component. */

import Header from './Header';
import Body from './Body';

// KH: original code from step 7, before amending with steps 8, 9, and 10
/* function Card(props) {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  } */

/* STEP 8.
Previously in App.js, you’ve passed down a commentObject attribute to Card which contains an object with three properties (profileImg, username, and comment).
    
It’s time to access those and finally pass them to the children components: Header and Body.
    
Header expects two props, profileImg and username.
    
Give the Header instance an attribute named profileImg and the value of props.commentObject.profileImg. 

STEP 9.
Next, give the Header instance an attribute named username and the value of props.commentObject.username.

STEP 10.
The Body instance expects a comment prop.

Give the Body instance an attribute named comment and the value of props.commentObject.comment.
*/

function Card(props) {
    return (
      <div>
        <Header 
            profileImg={props.commentObject.profileImg} 
            username={props.commentObject.username} 
        />
        <Body comment={props.commentObject.comment} />
      </div>
    );
  }

/* STEP 11.
Now, export the Card component so it can be imported and used. */

export default Card;