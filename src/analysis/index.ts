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
