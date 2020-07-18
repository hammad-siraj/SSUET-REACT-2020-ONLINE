import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           hello world 2 !!!!!!
//         </a>
//       </header>
//       {/* <App2 />
//       <App3 /> */}
//     </div>
//   );
// }

// const App2 = () => {
//   return <h1>APP2</h1>;
// };

// const App3 = () => {
//   return <h1>APP3</h1>;
// };

class App extends React.Component {
  constructor() {
    super();

    //state is object
    this.state = {
      name: "jhon",
      age: 18,
      standard: 9,
      image: "/images/REDUX.png",
      details: [{}, {}],
    };
  }

  changeName = () => {
    this.setState({ name: "jhon bhai" });
  };

  changeAge = () => {
    this.setState({ age: 20 });
  };

  changeStandard = () => {
    this.setState({ standard: 12 });
  };
  changeImage = () => {
    this.setState({ image: "/images/splash.png" });
  };

  //render => is to use return some UI.
  render() {
    // let name = "jhone";
    // this.state.name = "jhon2";

    return (
      <div>
        <Header />
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.standard}</h1>
        <img src={this.state.image} style={{ width: 100, height: 100 }} />
        <button onClick={this.changeName}>Change Name</button>
        <button onClick={this.changeAge}>Change Age </button>
        <button onClick={this.changeStandard}>Change Standard </button>
        <button onClick={this.changeImage}>Change Image </button>
      </div>
    );
  }
}

export default App;
