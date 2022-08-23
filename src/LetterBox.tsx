import { markingState } from "./utils/types"

interface ILetterBox {
    letter : string
    marking : markingState
}
export function LetterBox ({letter, marking}: ILetterBox) : JSX.Element {
    return (
        <div className={`letterBox ${marking}`}>
            <p> {letter.toUpperCase()}</p>
        </div>
    )
}