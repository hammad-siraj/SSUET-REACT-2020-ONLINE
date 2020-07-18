import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      todoList: [], // new value ['onne','two','three']
      isEdit: false,
      updateIndex: null,
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

  deleteTodo = (ind) => {
    let { todoList } = this.state;

    let list = [...todoList];
    list.splice(ind, 1);
    this.setState({ todoList: list });
  };

  updateTodo = () => {
    let { todoList, updateIndex, text } = this.state;

    let list = [...todoList];

    list.splice(updateIndex, 1, text);
    this.setState({ todoList: list, text: "", isEdit: false });
  };

  editTodo = (ind) => {
    //0

    let list = [...this.state.todoList];
    // alert(list[ind]);
    this.setState({ isEdit: true, text: list[ind], updateIndex: ind });
  };

  render() {
    let { text, todoList, isEdit } = this.state;
    console.log("state", text);

    return (
      <div className="App-header">
        <Header />
        <input name="text" value={text} onChange={this.handleText} />
        <hr />
        {!isEdit && <button onClick={this.addTodo}>ADD TODO</button>}{" "}
        {isEdit && <button onClick={this.updateTodo}>Update</button>}
        <br />
        <ol>
          {todoList.map((val, index) => {
            return (
              <li
              // onClick={() => this.deleteTodo(index)}
              >
                {val}{" "}
                <button onClick={() => this.deleteTodo(index)}>Delete</button>{" "}
                <button onClick={() => this.editTodo(index)}>Edit</button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
