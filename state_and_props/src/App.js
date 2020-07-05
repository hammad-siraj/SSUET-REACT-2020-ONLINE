import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello world !
        </a>
      </header>
      {/* <App2 />
      <App3 /> */}
    </div>
  );
}

const App2 = () => {
  return <h1>APP2</h1>;
};

const App3 = () => {
  return <h1>APP3</h1>;
};

export default App;
