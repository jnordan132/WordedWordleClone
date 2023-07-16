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
      const wordArr = res.split("\r\n");
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
      const wordArr = res.split("\r\n");
      wordForThisGame = wordArr[Math.floor(Math.random() * wordArr.length)];
    });

  return { wordForThisGame };
};

// export async function attempt() {
//   const test = await generateCorrectWord();
//   console.log(test);
// }

// attempt();
