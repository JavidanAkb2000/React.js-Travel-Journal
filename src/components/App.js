import React from "react";
import ReactDOM from "react-dom"; // Corrected import statement
import Header from "./Header";
import Cards from "./Card";
import data from "../data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <div>
        <Cards

         key={item.id}
         {...item} 
         
        />
      </div>
    );
  });

  return (
    <div className="containerDiv">
      <Header />
      {cards} {/* Render the cards here */}
      
    </div>
  );
}
