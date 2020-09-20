import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [name, setname] = useState(false);
  const [num, setnum] = useState(0);
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);

  // useEffect(() => {
  //   console.log("use effect");
  //   setnum(num + 1);
  // }, [name]);

  useEffect(async () => {
    //fetch => to communicate with api
    setloading(true);
    let res = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
      // {
      //   method:'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body:JSON.stringify({
      //     name:"hmaad",

      //   })
      // }
    );

    let data = await res.json();

    console.log(data);
    setposts(data);

    console.log("use effect");

    setloading(false);
  }, []);

  return (
    <div className="App">
      {console.log("return", posts)}

      <h3>{name ? "react" : "react native"}</h3>
      <h4>{num}</h4>
      <button onClick={() => setname(!name)}>set name</button>
      {loading
        ? "...Loading"
        : posts.length > 0 &&
          posts.map((val, index) => {
            return (
              <div>
                <p>
                  {val.id} {val.title}{" "}
                </p>
              </div>
            );
          })}
    </div>
  );
}

export default App;
