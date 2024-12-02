import React from "react";
import "./optionCard.css"
export interface OptionCardProps {
  icon: string;
  text: string;
}

export default function OptionCard({ icon, text }: OptionCardProps) {
  return (
    <div className="container card-container">
      <div className="row card col-12">
        <div className="container d-flex card-info">
          <div className="icon">
          
            <i className={icon}></i>
          </div>
          <div className="text">
            <h3>{text}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
