import React from "react";
import "./Card.css";

function Card({ title, description, icon }) { //props from about.js
  return (
    <div className="animated-card">
      <div className="card-content">
        {icon && <div className="card-icon">{icon}</div>}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
