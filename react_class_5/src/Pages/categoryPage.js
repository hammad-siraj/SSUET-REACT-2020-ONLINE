import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Category() {
  let { category } = useParams(); //OBJECT {category:"new" } =>destructure
  const [fiction, setfiction] = useState([
    {
      name: "fiction book 1",
      id: "1",
    },
    {
      name: "fiction book 2",
      id: "2",
    },
  ]);

  //users list [
  //   {'hamad','xyz','abc'}
  // ]

  // users/hammad
  // server => gives hammad data

  return (
    <>
      <h1>Category Page</h1>
      <p>{category == "new" ? fiction[0].name : fiction[1].name}</p>
    </>
  );
}
