export type markingState = "not-present" | "wrong-position" | "correct-position" | null;

export type IMarkedGuess = [string, markingState][];