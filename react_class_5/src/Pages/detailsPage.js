import React from "react";
import { useLocation } from "react-router-dom";

export default function DetailsPage() {
  let location = useLocation();

  //   console.log("loactionn", location);
  return (
    <>
      <h1>Details</h1>
      {location.state.map((val, index) => {
        return (
          <>
            <h4>{val.name}</h4>
            <p>{val.id}</p>
          </>
        );
      })}
    </>
  );
}
