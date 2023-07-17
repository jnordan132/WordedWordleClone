import wordBank from "./wordBank.txt";

export const wordLayout = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordArr = async () => {
  let newSet;
  await fetch(wordBank)
    .then((res) => {
      return res.text();
    })
    .then((res) => {
      const wordArr = res.split("\n");
      newSet = new Set(wordArr);
    });

  return { newSet };
};

export const generateCorrectWord = async () => {
  let wordForThisGame;
  await fetch(wordBank)
    .then((res) => {
      return res.text();
    })
    .then((res) => {
      const wordArr = res.split("\r");
      wordForThisGame = wordArr[Math.floor(Math.random() * wordArr.length)];
    });

  return { wordForThisGame };
};
