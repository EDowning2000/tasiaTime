import "../styles/globals.css";
import Head from "next/head";
import { InfoContext } from "../Components/InfoContext";

function MyApp({ Component, pageProps }) {
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
  const playerOneScores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  const playerTwoScores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  const playerThreeScores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  const playerFourScores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  const playerFiveScores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];

  //variables to count the player total scores not a state variable cause i dont want this to reset
  const playerOneTotal = 0;
  const playerTwoTotal = 0;
  const playerThreeTotal = 0;
  const playerFourTotal = 0;
  const playerFiveTotal = 0;
  return (
    <InfoContext.Provider value={{ selectedCourse, setSelectedCourse }}>
      <Head>
        <title>Fantasia Gardens Mini Golf</title>
        <meta charSet="utf-8" />
      </Head>

      <Component {...pageProps} />
    </InfoContext.Provider>
  );
}

export default MyApp;
