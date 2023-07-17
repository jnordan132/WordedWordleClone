import wordBank from "./wordBank.txt";

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
    const response = await fetch(wordBank);
    const text = await response.text();
    // \n for deployment
    // \r\n for development
    const wordArr = text.split("\n");
    const newSet: Set<string> = new Set<string>(wordArr);
    const randomWord: string =
      wordArr[Math.floor(Math.random() * wordArr.length)];
    return { newSet, wordForThisGame: randomWord };
  } catch (error) {
    console.error("Error fetching word bank:", error);
    return { newSet: new Set<string>(), wordForThisGame: "" };
  }
};
