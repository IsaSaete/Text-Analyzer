export const getParagraphsTotalNumber = (text: string): number => {
  const trimmedText = text.replaceAll(" ", "");

  const paragraphs = trimmedText.split("\n\n");

  const filterParagraphs = paragraphs.filter(
    (paragraph) => paragraph !== "" && paragraph !== "\n"
  );
  return filterParagraphs.length;
};

export const getWordsTotalNumber = (text: string): number => {
  const trimmedText = text.replaceAll("\n", " ");

  const separateWords = trimmedText.split(" ");

  const filterWords = separateWords.filter((word) => word !== "");

  return filterWords.length;
};

export const getCharactersTotalNumber = (text: string): number => {
  const trimmedText = text.replaceAll("\n", "");

  const separateCharacters = trimmedText.split("");
  const filterCharacters = separateCharacters.filter(
    (character) => character !== " "
  );

  return filterCharacters.length;
};

export const getShortWordsTotal = (
  text: string,
  maxLenght: number = 4
): number => {
  const trimmedText = text.replaceAll("\n", " ");

  const words = trimmedText.split(" ");

  const shortWords = words.filter(
    (word) => word !== "" && word.length <= maxLenght
  );

  return shortWords.length;
};

export const joinListWordsWithCommas = (listWords: string[]): string => {
  const words = listWords.filter((word) => word !== "");

  const joinListWord = words.join(",");

  return joinListWord;
};

export const showListShortWords = (text: string): string[] => {
  const trimmedText = text.replaceAll("\n", " ");

  const words = trimmedText.split(" ");

  const shortWords = words.filter((word) => word !== "" && word.length <= 4);

  return shortWords;
};

export const getWordFrecuency = (text: string, recibeWord: string): number => {
  const trimmedText = text.replaceAll("\n", " ");

  const words = trimmedText.split(" ");

  const wordFrecuency = words.filter((word) => word === recibeWord).length;

  return wordFrecuency;
};

export const getWordReverse = (text: string): string => {
  const words = text.split("");

  const reverseWord = words.reverse().join("");

  return reverseWord;
};
