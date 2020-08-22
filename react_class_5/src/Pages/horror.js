import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailsPage from "./detailsPage";
export default function Horror() {
  let navigate = useNavigate();
  const [horrorData, sethorrorData] = useState([
    {
      name: "Horror book 1",
      id: "1",
    },
    {
      name: "Horror book 2",
      id: "2",
    },
  ]);
  function handleClick() {
    navigate("/details", { state: horrorData });
  }

  return (
    <>
      <h1>Horror</h1>
      <button onClick={handleClick}>more details</button>
      {/* <DetailsPage data={horrorData} /> */}
    </>
  );
}
