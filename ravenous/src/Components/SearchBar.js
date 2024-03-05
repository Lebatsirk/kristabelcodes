import React from "react";
import styles from "./Styles/SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <p>Find a business...</p>
      <input
        type="text"
        id="searchTerms"
      />
      <input
        type="text"
        id="location"
      />
      <input
        type="submit"
        value="Search"
      />
    </div>
  );
}

export default SearchBar;
