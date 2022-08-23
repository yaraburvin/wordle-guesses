/*  each letter has three states :
-not in word
-in word but wrong-position
-in word and correct-position

MarkedGuess is an array of tuples where tuple has a letter and its corresponding state
for letter in guess :
    check if in hiddenTarget 
        if no - set state to not in word
        if yes - check if letter is in the right position 
      
    world, clown
    [
        ["w" , "wrong-position"],
        ["o", "wrong-position"],
        ["r", "not-present"],
        ["l", "wrong-position"],
        ["d", "not-present"]
    ]
    
*/

import { IMarkedGuess } from "./types"




export function markWordleGuess(guess: string, hiddenTarget: string):IMarkedGuess {
    const markedGuess :IMarkedGuess = []
    const arrGuess = guess.split("")
    const arrHiddenTarget = hiddenTarget.split("")
    for (let i in arrGuess) {
        if (arrGuess[i] === arrHiddenTarget[i]) {
            markedGuess.push([arrGuess[i], "correct-position"])
            arrGuess[i] = ""
            arrHiddenTarget[i] = ""
        } else {
            markedGuess.push([arrGuess[i], null])
        }
        
    }
    for (let i in arrGuess) {
        if (arrGuess[i] !== "") {
            if (arrHiddenTarget.includes(arrGuess[i])) {
                markedGuess[i] = [arrGuess[i], "wrong-position"]
                arrHiddenTarget[arrHiddenTarget.indexOf(arrGuess[i])] = ""
                arrGuess[i] = ""
                
            }
            else {
                markedGuess[i] = [arrGuess[i], "not-present"]
            }
        console.log(markedGuess)
            console.log(arrHiddenTarget)
        }            
    }
    
    return markedGuess
}
