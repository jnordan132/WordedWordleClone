import attemptWordBank from "./attemptWordBank.txt";
import correctWordBank from "./correctWordBank.txt";

export const wordLayout = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWords = async () => {
  try {
    const attemptedWords = await fetch(attemptWordBank);
    const correctWords = await fetch(correctWordBank);
    const attemptText = await attemptedWords.text();
    const correctText = await correctWords.text();
    // \n for deployment
    // \r\n for development
    const attemptWordArr = attemptText.split("\n");
    const correctWordArr = correctText.split("\n");
    const newSet: Set<string> = new Set<string>(attemptWordArr);
    const randomWord: string =
      correctWordArr[Math.floor(Math.random() * correctWordArr.length)];
    return { newSet, wordForThisGame: randomWord };
  } catch (error) {
    console.error("Error fetching word bank:", error);
    return { newSet: new Set<string>(), wordForThisGame: "" };
  }
};
