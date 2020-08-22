import React, { useState } from "react";
import { useNavigate, Route } from "react-router-dom";
import DetailsPage from "./detailsPage";
import Fiction from "./fiction";
export default function Commic() {
  let navigate = useNavigate();
  const [commicData, setcommicData] = useState([
    {
      name: "Commic book 1",
      id: "1",
    },
    {
      name: "Commic book 2",
      id: "2",
    },
  ]);
  function handleClick() {
    navigate("/details", { state: commicData });
  }

  return (
    <>
      <h1>Commic</h1>
      <button onClick={handleClick}>more details</button>
      {/* <DetailsPage data={horrorData} /> */}

      <Route path="/" element={<Fiction />} />
    </>
  );
}
