import { LetterBox } from "./LetterBox";
import { IMarkedGuess } from "./utils/types";
import "./App.css"

const word :IMarkedGuess = [
  ["l" , "correct-position"],
  ["u", "not-present"],
  ["l", "wrong-position"],
  ["l", "not-present"],
  ["s", "not-present"]
]

function App(): JSX.Element {
  return (
    <section className="wordle-display">
    {word.map((el,index) => <LetterBox letter = {el[0]} marking = {el[1]} key = {index}/>)}
    </section>
  );
}

export default App;
