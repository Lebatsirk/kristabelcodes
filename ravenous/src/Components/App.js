// import logo from "./logo.svg";

// Style imports
import styles from "./Styles/App.module.css";

// Component imports
import Header from "./Header.js";
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar.js";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
