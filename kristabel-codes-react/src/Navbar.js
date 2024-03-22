import React from "react";
import NavbarItem from "./NavbarItem";

function Navbar(props) {
  return (
    // TO DO : Use props to take in values that will dictate which of the navbaritems are required in the navbar and be able to display differently based on current page, e.g. if on homepage it will show that navitem with a different style or functionality
    <div>
      <nav role="navigation">
        <ul>
          <NavbarItem
            linktext="Home"
            link="index.html"
          />
          <NavbarItem
            linktext="View/Download CV"
            link="cv.html"
          />
          <NavbarItem
            linktext="Linkedin Profile"
            link="https://www.linkedin.com/in/kristabel-hilton/"
            target="_blank"
          />
          <NavbarItem
            linktext="Projects"
            link="projects.html"
          />
          <NavbarItem
            linktext="GitHub"
            link="https://github.com/Lebatsirk/"
            target="_blank"
          />
          <NavbarItem />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
