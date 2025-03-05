export const getParagraphsTotalNumber = (text: string): number => {
  const trimmedText = text.replaceAll(" ", "");

  const paragraphs = trimmedText.split("\n\n");

  const filterParagraphs = paragraphs.filter(
    (paragraph) => paragraph !== "" && paragraph !== "\n"
  );

  return filterParagraphs.length;
};

export const getWordsTotalNumber = (text: string): number => {
  const trimmedText = text.replaceAll("\n", "");

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
