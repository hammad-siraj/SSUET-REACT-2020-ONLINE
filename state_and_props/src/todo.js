import React, { Component } from "react";
import "./App.css";
export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      todoList: ["one", "two"], // new value ['onne','two','three']
    };
  }

  handleText = (e) => {
    this.setState({ text: e.target.value });
  };

  addTodo = () => {
    let { text, todoList } = this.state;
    // todolist ['one','two']
    let list = [...todoList];
    // list ['one','two']
    //  text =  theree
    list.push(text);
    // list ['one','two','three']

    this.setState({ todoList: list, text: "" });
  };

  deleteTodo = () => {};

  updateTodo = () => {};

  render() {
    let { text, todoList } = this.state;
    console.log("state", text);

    return (
      <div className="App-header">
        <h1>TODO LIST</h1>
        <input name="text" value={text} onChange={this.handleText} />
        <br />
        <ol>
          {todoList.map((val, index) => {
            return <li>{val}</li>;
          })}
        </ol>
        <button onClick={this.addTodo}>ADD TODO</button>
      </div>
    );
  }
}
