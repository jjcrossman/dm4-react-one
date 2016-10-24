import React from "react"; // any file with JSX needs React imported to the namespace, even if you're not using React.something. JSX is Javascript and HTML in the same file, I think.
import ReactDOM from "react-dom";

import App from "./components/App.js";


document.addEventListener( "DOMContentLoaded", () => {
  const reactNode = document.getElementById( "react-node" );

  ReactDOM.render( <App />, reactNode ); // React instantiates the class App here
} );
