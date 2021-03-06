import { useState } from "react";
import "../styles/globals.css";
import Head from "next/head";
import { GlobalState } from "../Components/GlobalState";

export default function MyApp({ Component, pageProps }) {
  //the course that the user selects
  const [selectedCourse, setSelectedCourse] = useState("");

  //number of players in the group
  const [playerCount, setPlayerCount] = useState(1);

  //variables to set the players names
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerThree, setPlayerThree] = useState("");
  const [playerFour, setPlayerFour] = useState("");
  const [playerFive, setPlayerFive] = useState("");

  //gonna use array methods to pop and enque on these to map into the scorecards
  //not state variables cause i dont want them to reset
  const [playerOneScores, setPlayerOneScores] = useState([]);
  const [playerTwoScores, setPlayerTwoScores] = useState([]);
  const [playerThreeScores, setPlayerThreeScores] = useState([]);
  const [playerFourScores, setPlayerFourScores] = useState([]);
  const [playerFiveScores, setPlayerFiveScores] = useState([]);

  //variables to count the player total scores not a state variable cause i dont want this to reset
  const playerOneTotal = "0";
  const playerTwoTotal = "0";
  const playerThreeTotal = "0";
  const playerFourTotal = "0";
  const playerFiveTotal = "0";

  return (
    <>
      <Head>
        <title>Fantasia Gardens Mini Golf</title>
        <meta charSet="utf-8" />
      </Head>
      <GlobalState.Provider
        value={{
          selectedCourse,
          setSelectedCourse,
          playerCount,
          setPlayerCount,
          playerOne,
          setPlayerOne,
          playerTwo,
          setPlayerTwo,
          playerThree,
          setPlayerThree,
          playerFour,
          setPlayerFour,
          playerFive,
          setPlayerFive,
          setPlayerOneScores,
          playerOneScores,
          setPlayerTwoScores,
          playerTwoScores,
          setPlayerThreeScores,
          playerThreeScores,
          setPlayerFourScores,
          playerFourScores,
          setPlayerFiveScores,
          playerFiveScores,
          playerOneTotal,
          playerTwoTotal,
          playerThreeTotal,
          playerFourTotal,
          playerFiveTotal,
        }}
      >
        <Component {...pageProps} />
      </GlobalState.Provider>
    </>
  );
}
