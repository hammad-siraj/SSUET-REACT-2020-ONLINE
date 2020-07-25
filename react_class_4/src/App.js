import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
} from "reactstrap";
import StudentCard from "./components/studentCard";

function App() {
  // for every different value you need to make new useState Hook.

  const [value, setValue] = useState([]); //STATE
  const [name, setName] = useState(""); //STATE
  const [lastName, setLastName] = useState(""); //STATE
  const [age, setAge] = useState(""); //STATE
  const [rollNo, setRollNo] = useState(""); //STATE

  function changeState() {
    let copyState = [...value];
    let obj = {
      name,
      lastName,
      age,
      rollNo,
    };
    copyState.push(obj);

    setValue(copyState);
    setAge("");
    setRollNo("");
    setLastName("");
    setName("");
  }

  console.log(name);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 10,
      }}
    >
      <div style={{ margin: 10, padding: 10 }}>
        <label>First Name</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Last Name</label>
        <input
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Age</label>
        <input
          name="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label>roll no.</label>
        <input
          name="rollNo"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
      </div>
      <div>
        <Button
          color="primary"
          size="lg"
          block
          onClick={(e) => changeState(e.target.value)}
        >
          ADD STUDENT
        </Button>
      </div>
      <div style={{ margin: 10 }}>
        {value.map((val, index) => {
          return <StudentCard studentData={val} />;
        })}
      </div>
    </div>
  );
}

export default App;
// value= [
/// student1 => obj ={
//name:"",
//age:"",
//...
//}
/// student2 => obj ={
//name:"",
//age:"",
//...
//}
// ]
