import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import PublicNavbar from "./components/PublicNavbar";
import ChoiceCard from "./components/ChoiceCard";

const shapes = ["rock", "paper", "scissors"];
const roundOutcome = {
  rock: { rock: 0, paper: -1, scissors: 1 },
  paper: { rock: 1, paper: 0, scissors: -1 },
  scissors: { rock: -1, paper: 1, scissors: 0 },
};

function App() {
  const [playerTitle, setPlayerTitle] = useState("You");
  const [playerChoice, setPlayerChoice] = useState("unknown");
  const [playerWin, setPlayerWin] = useState(0);

  const [computerTitle, setComputerTitle] = useState("You");
  const [computerChoice, setComputerChoice] = useState("unknown");
  const [computerWin, setComputerWin] = useState(0);

  const getRoundOutcome = (playerChoice, computerChoice) => {
    const result = roundOutcome[playerChoice][computerChoice];
    setPlayerWin(result);
    setComputerWin(-result);
    // if (playerChoice === "rock" && computerChoice === "paper") {
    //   setComputerWin(1);
    //   setPlayerWin(-1);
    // }
  };

  const getRandomPlay = () => {
    const newPlayerChoice = shapes[Math.floor(Math.random() * 3)];
    const newComputerChoice = shapes[Math.floor(Math.random() * 3)];
    setPlayerChoice(newPlayerChoice);
    setComputerChoice(newComputerChoice);
    getRoundOutcome(newPlayerChoice, newComputerChoice);
  };

  return (
    <>
      <PublicNavbar />
      <Container>
        <h1 className="text-center">Rock Paper Scissors</h1>
        <Button onClick={getRandomPlay}>Play random</Button>
        <Row>
          <Col>
            <ChoiceCard
              title={playerTitle}
              winner={playerWin}
              shape={playerChoice}
            />
          </Col>
          <Col>
            <ChoiceCard
              title={computerTitle}
              winner={computerWin}
              shape={computerChoice}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
