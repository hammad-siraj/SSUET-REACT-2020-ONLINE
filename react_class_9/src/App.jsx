import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Db } from "./firebase";

/////

//javascript => es 6 => practice from freecodecamp

//css flex ,bootstrap ,css grid // 10 days
//react components => 2 days state,props
//life cycle methods => componentDidMount ,componentDidUpdate ,componenetWillUnmount=> 1 days
// hooks => useState, useEffect
//navigation => react router v6
//data management => context api
//database => firebase

//3=>projects
//amazon clone
//spotify clone

///

//firebase provide us database to store data in collection (just like javascript objects)

//JSON  //{
// "name":"hammad",
// "gender":"male"
//}

//REAL TIME : LIKE WE SEE IN WHATSAPP MESSAGING : SOME ONE IS TYPING....

//WITHOUT REAL TIME DATABASE.
// POST REQUEST
//SAVE IN DB
//GET DATA WHICH WE POST

//Table => COLLECTION
//COLUMN => FIELD
//KEYS => ID
//JOINS => EMBDED COLLECTION

//SQL => RELATIONAL DATABASE.
//NON-SQL =>NON-RELATIONAL DATABASE.

//SQL => IS LITLLE BIT SLOW IN QUERY
//NON-SQL => FAST IN QUERY.

//crud => read ,write , delete , update

function App() {
  const [article, setartice] = useState("");
  const [postedBy, setpostedBy] = useState("");
  const [data, setdata] = useState([]);
  //1=>write

  async function post() {
    if (postedBy && article != "") {
      let data = {
        article,
        postedBy,
      };
      // const res = await Db.child("/articlesChild")
      //   .child("/articelSecondChild")
      //   .push(data);
      const res = await Db.push(data);

      console.log("object", res);
    }
  }

  useEffect(() => {
    //on is a listener
    let data = [];
    Db.on("value", (snapshot) => {
      let val = snapshot.val();
      console.log("val", val);

      setdata(val);
      // for (var prop in val) {
      // data.push(val[prop]);
      // }

      // setdata(data);
    });
  }, []);

  async function remove(id) {
    Db.child(id).remove();
  }

  async function update(id) {
    ///set =>>>>
    // Db.child("-MJm9n6tjcjcD4qWBXEG").set({
    //   article: "set method called",
    // });
    //always creates a new obj
    //update=>>>>
    Db.child(id).update({
      article: "update method called",
    });
    //update the existing object
  }
  // async function get(){

  // Db.on

  // }

  // useEffect(() => {

  // }, []);
  console.log("state ", data);
  return (
    ///set state
    //return
    //some method
    //setstate
    //return
    <div className="App">
      <h2>FIREBASE</h2>
      <label>POSTED BY :</label>{" "}
      <input
        name="postedBy"
        value={postedBy}
        onChange={(e) => setpostedBy(e.target.value)}
      />
      <br />
      <br />
      <label>ARTICLE :</label>{" "}
      <input
        name="article"
        value={article}
        onChange={(e) => setartice(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => post()}> POST</button>
      {/* ['key1','key2'] */}
      {data
        ? Object.keys(data).map((val) => {
            console.log("val", data[val].article);

            return (
              <div>
                {/* //data['-bfehfh'].postedBy */}
                <h3>POSTED BY : {data[val].postedBy}</h3>{" "}
                {/* //data['-bhfheh'].article */}
                <h4>ARTICLE : {data[val].article}</h4>
                <button onClick={() => remove(val)}>DELETE</button>
                <button onClick={() => update(val)}>update</button>
                <hr />
              </div>
            );
          })
        : "....loading"}
      {/* {data
        ? data.map((val) => {
            return (
              <div>
                <h3>POSTED BY : {val.postedBy}</h3>
                <h4>ARTICLE : {val.article}</h4>
                <hr />
              </div>
            );
          })
        : "....loading"} */}
    </div>
  );
}

export default App;
