import React from 'react';
import {createRoot} from 'react-dom/client';

/* STEP 14.
Open up index.js and import the App component. */
import App from "./App.js";

/* STEP 15.
Use .createRoot() to supply a container where you will render the App component. Then, use .render() to render it into the DOM! */
// const root = ReactDOM.createRoot(App);
// root.render(<App />);

createRoot(
    document.getElementById('app')
  ).render(<App/>);