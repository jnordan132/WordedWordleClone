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
