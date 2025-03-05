export const getParagraphsTotalNumber = (text: string): number => {
  const trimmedText = text.replaceAll(" ", "");

  const paragraphs = trimmedText.split("\n\n");

  const filterParagraphs = paragraphs.filter(
    (paragraph) => paragraph !== "" && paragraph !== "\n"
  );

  return filterParagraphs.length;
};
