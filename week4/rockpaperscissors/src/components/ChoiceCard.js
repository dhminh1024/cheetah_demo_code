import React from "react";
import rockImg from "../images/rock.png";
import paperImg from "../images/paper.png";
import scissorsImg from "../images/scissors.png";

const imageSrc = {
  rock: rockImg,
  paper: paperImg,
  scissors: scissorsImg,
};

const ChoiceCard = ({ title, winner, shape }) => {
  return (
    <div
      className={`d-flex flex-column align-items-center choice-card 
            ${winner === 1 && "border-success"}
            ${winner === -1 && "border-danger"}
    `}
    >
      <h2>{title}</h2>
      <img src={imageSrc[shape]} alt="RPS" />
      {winner === -1 && <h2 className="font-weight-bold text-danger">Lost</h2>}
      {winner === 0 && <h2 className="font-weight-bold">Tie</h2>}
      {winner === 1 && <h2 className="font-weight-bold text-success">Won</h2>}
    </div>
  );
};

export default ChoiceCard;
