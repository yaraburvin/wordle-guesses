import { markWordleGuess } from "./markWordleGuess";

test("splits a string into array of strings", () => {
    expect(markWordleGuess("lulls", "level")).toStrictEqual([
        ["l" , "correct position"],
        ["u", "not present"],
        ["l", "wrong position"],
        ["l", "not present"],
        ["s", "not present"]
    ])
    expect(markWordleGuess("world", "clown")).toStrictEqual([
        ["w" , "wrong position"],
        ["o", "wrong position"],
        ["r", "not present"],
        ["l", "wrong position"],
        ["d", "not present"]
    ]);
    expect(markWordleGuess("llams", "olive")).toStrictEqual([
        ["l" , "not present"],
        ["l", "correct position"],
        ["a", "not present"],
        ["m", "not present"],
        ["s", "not present"]
    ]);

    expect(markWordleGuess("apple", "party")).toStrictEqual([
        ["a" , "wrong position"],
        ["p", "wrong position"],
        ["p", "not present"],
        ["l", "not present"],
        ["e", "not present"]
    ]);

    expect(markWordleGuess("steel", "level")).toStrictEqual([
        ["s" , "not present"],
        ["t", "not present"],
        ["e", "wrong position"],
        ["e", "correct position"],
        ["l", "correct position"]
    ]);
  });
  