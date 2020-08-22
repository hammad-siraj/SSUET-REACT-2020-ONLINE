import React from "react";
import { Routes, Route } from "react-router";
import Classic from "./Pages/classic";
import Commic from "./Pages/commic";
import Fiction from "./Pages/fiction";
import Horror from "./Pages/horror";
import "./App.css";
import { Link } from "react-router-dom";
import Category from "./Pages/categoryPage";
import DetailsPage from "./Pages/detailsPage";

//installation guide.

//npm install --save react-router-dom@next
//npm install --save react-router@next
//if error history not defined=> npm install --save history

//Hooks
//useParams
//useNavigate
//useLocation

//Dynamic Routing

//Static Routing

//Link

// * will render your component if path not matches.

// ASSIGNMMENT

function App() {
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        minHeight: "100vh",
        color: "white",
        margin: 0,
      }}
    >
      <header>
        <div className="topnav">
          <Link to="/">Home</Link>
          <Link to="fiction">Fiction</Link>
          <Link to="fiction/new">category</Link>
          <Link to="fiction/old">category 2</Link>
          <Link to="classic">Classic</Link>
          <Link to="horror">Horror</Link>
        </div>
      </header>

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>BOOK SHOP</h1>

        {/* ANCHOR TAG */}
        <Routes>
          <Route path="/" element={<Commic />} />

          <Route path="fiction" element={<Fiction />} />
          <Route path="fiction/:category" element={<Category />} />
          <Route path="horror" element={<Horror />} />
          <Route path="classic/*" element={<Classic />} />
          <Route path="details" element={<DetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

{
  /* <Routes>
          <Route path="/" element={<Classic />} />
          <Route path="commic" element={<Commic />} />
          <Route path="fiction/:category/*" element={<Category />} />

          <Route path="fiction" element={<Fiction />} />
          <Route path="horror" element={<Horror />} />
          <Route path="horror/:category" element={<Category />} />
        </Routes> */
}
