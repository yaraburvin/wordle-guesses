import { LetterBox } from "./LetterBox";
import { IMarkedGuess } from "./utils/types";
import "./App.css"
import { markWordleGuess } from "./utils/markWordleGuess";
import { useEffect, useState } from "react";

const defaultMarkedWord :IMarkedGuess= [["" , "not-present"],
["", "not-present"],
["", "not-present"],
["", "not-present"],
["", "not-present"]
]
const targetWord = 'level'

function App(): JSX.Element {
  const [guessWord, setGuessWord] = useState('')
  const [markedWord, setMarkedWord] = useState(defaultMarkedWord)
  useEffect( ()=> {
    setMarkedWord(markWordleGuess(guessWord.padEnd(5," "),targetWord))
  },[guessWord]) 
  return (
    <>
      <section className="wordle-display">
        <div className="wordle-row">
        {markedWord.map((el,index) => <LetterBox letter = {el[0]} marking = {el[1]} key = {index}/>)}
        </div>
        <div className="wordle-row">
        {markedWord.map((el,index) => <LetterBox letter = {el[0]} marking = {el[1]} key = {index}/>)}
        </div>
        <div className="wordle-row">
        {markedWord.map((el,index) => <LetterBox letter = {el[0]} marking = {el[1]} key = {index}/>)}
        </div>
        <div className="wordle-row">
        {markedWord.map((el,index) => <LetterBox letter = {el[0]} marking = {el[1]} key = {index}/>)}
        </div>
        <div className="wordle-row">
        {markedWord.map((el,index) => <LetterBox letter = {el[0]} marking = {el[1]} key = {index}/>)}
        </div>
        <div className="wordle-row">
        {markedWord.map((el,index) => <LetterBox letter = {el[0]} marking = {el[1]} key = {index}/>)}
        </div>
      </section>
      <input value = {guessWord} type ="text" maxLength={5} onChange={(e) =>  setGuessWord(e.target.value)} />
    </>
  )
}

export default App;
