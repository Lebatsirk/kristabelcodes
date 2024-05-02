const objElements = {
  "#cv_contactdetails_heading": "#cv_contactdetails_content",
  "#cv_personalstatement_heading": "#cv_personalstatement_content",
  "#cv_skills_heading": "#cv_skills_content",
  "#cv_education_heading": "#cv_education_content",
  "#cv_volunteerexperience_heading": "#cv_volunteerexperience_content",
  "#cv_workexperience_heading": "#cv_workexperience_content",
  "#cv_interests_heading": "#cv_interests_content",
};

let elements = Object.keys(objElements);

// If an element is displayed, hide it, otherwise show it
function toggleFunction(event) {
  let elementId = event.data.elementToToggle;

  $(elementId).toggle();
}

function setTooltip(strElement) {
  $(strElement).attr("title", "Click here to show/hide section contents");
}

// function setListener(heading, content) {
//   console.log("heading is " + heading + " and content is " + content);
//   // $(heading).on("click", { elementToToggle: content }, toggleFunction);
//   $(heading).css("backgroundColor", "palegreen");

//   $(heading).on(
//     //"#cv_contactdetails_heading"
//     "click",
//     { elementToToggle: content }, //"#cv_contactdetails_content"
//     toggleFunction
//   );
// }

$(document).ready(function () {
  // **************************************************************************
  // The plan here was to set up a JavaScript object with key:value pairs, then
  // iterate over that to build the toggle functionality using those keys and
  // values as arguments for the headings and content, but unfortunately it
  // doesn't apppear to work.  I want to look further into this to see if it's
  // an issue with *when* the elements are created and eventListeners added but
  // for now I am putting in individual eventListeners.

  // Just thinking that there might be a way to use the DOM tree to access the
  // correct elements but only if the nesting etc is correct which might require
  // a re-working of the page.

  // In good news, I was able to take advantage of the object and iteration to
  // add a tooltip to each heading even though I cannot (yet?) add the event
  // listener in the same way.
  // **************************************************************************
  elements.forEach((element) => {
    console.log(`Key: ${element} \nValue: ${objElements[element]}`);

    setTooltip(element);

    // setListener(element, objElements[element]);

    // $(objElements[element]).on(
    //   "click",
    //   { elementToToggle: element },
    //   toggleFunction
    // );
  });
  //   **************************************************************************

  $("#cv_contactdetails_heading").on(
    "click",
    { elementToToggle: "#cv_contactdetails_content" },
    toggleFunction
  );

  $("#cv_personalstatement_heading").on(
    "click",
    { elementToToggle: "#cv_personalstatement_content" },
    toggleFunction
  );

  $("#cv_skills_heading").on(
    "click",
    { elementToToggle: "#cv_skills_content" },
    toggleFunction
  );

  $("#cv_education_heading").on(
    "click",
    { elementToToggle: "#cv_education_content" },
    toggleFunction
  );

  $("#cv_volunteerexperience_heading").on(
    "click",
    { elementToToggle: "#cv_volunteerexperience_content" },
    toggleFunction
  );

  $("#cv_workexperience_heading").on(
    "click",
    { elementToToggle: "#cv_workexperience_content" },
    toggleFunction
  );

  $("#cv_interests_heading").on(
    "click",
    { elementToToggle: "#cv_interests_content" },
    toggleFunction
  );
});
