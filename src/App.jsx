import "./index.css";
import Header from "./components/Header";
import Data from "./Data/Data";
import Joke from "./components/Joke";
import Main from "./components/Main";

function App() {
  const jokes = Data.map((joke, index) => {
    return (
      <Joke key={index} setup={joke.question} punchline={joke.punchline} />
    );
  });
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
