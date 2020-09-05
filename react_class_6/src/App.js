import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stName: [],
      isLoading: false,
      isStopped: false,
    };
    console.log("constructor");
  }

  renderHeader = () => {
    return <h1>HEDAER</h1>;
  };

  //when ever our setState is called ,render method is also called.

  // loadData = () => {
  //   this.setState({ isLoading: true });

  //   //render function will call

  // };

  componentDidMount() {
    console.log("componentDidMount called");
    this.setState({ isLoading: true });

    //fake server
    setTimeout(() => {
      // console.log("inside set timeout");
      this.setState({
        isLoading: false,
        stName: [
          "constructor on first  mount",
          "Render on first mount or on state change",
          "compomnet did mount on first mount after render",
        ],
      });
    }, 4000);
  }

  // renderData = () => {
  //   //data is coming from demo server(backend)
  //   // this.setState({ isLoading: true });

  //   return this.state.data.map((val) => {
  //     return <h5>{val}</h5>;
  //   });
  // };

  render() {
    //render is a lifecycle method

    console.log("render");
    // this.setState({ stName: ["hammad"] }); dont try this at home.
    // console.log(this.state);
    return (
      <div>
        {console.log("return")}
        {this.renderHeader()}
        <h1>REACT LIFE CYCLES</h1>
        {/* {this.renderData()} */}
        {/* {this.loadData()} */}
        {/* load data from server */}
        {/* {this.loadData()} */}

        {/* {this.state.isLoading ? (
          "....Loading"
        ) : (
          <button onClick={this.loadData}>FETCH DATA</button>
        )} */}
        {/* {this.renderData()} */}
        {/* {this.renderData()} */}
        <button onClick={() => this.setState({ isStopped: true })}>
          STOP TIMER
        </button>
        <Student data={this.state.stName} isLoading={this.state.isLoading} />
        {this.state.isStopped ? null : <Timer />}
      </div>
    );
  }
}

class Student extends Component {
  state = {
    status: "none",
  };
  componentDidUpdate(prevProp) {
    console.log("componentDidUpdate");
    console.log("prevProps", prevProp);
    console.log("this.props", this.props);

    if (prevProp.data !== this.props.data) {
      console.log("please state update");
      this.setState({ status: "updated" });
    }
  }

  renderData = () => {
    //data is coming from demo server(backend)
    // this.setState({ isLoading: true });

    return this.props.data.map((val, index) => {
      return <h5 key={index}>{val}</h5>;
    });
  };

  render() {
    return (
      <>
        <div>{this.props.isLoading ? "....Loading" : this.renderData()}</div>
        <h6>{this.state.status}</h6>
      </>
    );
  }
}

class Timer extends Component {
  state = {
    timer: 0,
  };
  componentDidMount() {
    this.intervals = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.intervals);
  }

  render() {
    console.log(this.state.timer);

    return <div>{this.state.timer}</div>;
  }
}

export default App;
