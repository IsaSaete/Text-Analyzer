export const getTotalNumberOfParagraphs = (text: string): number => {
  const eliminatedSpacesInText = text.trim();

  if (text === "" || text === " ") {
    return 0;
  }

  if (eliminatedSpacesInText === "") {
    return 0;
  }

  const separatedParagraphs = text.split("\n\n");
  const totalParagraphsNumber = separatedParagraphs.length;

  return totalParagraphsNumber;
};
