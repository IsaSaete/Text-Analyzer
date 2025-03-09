const totals = document.querySelector("#checkbox-totals") as HTMLInputElement;

totals.addEventListener("change", () => {
  if (totals.checked) {
    document
      .querySelector(".analysis__item.totals")
      ?.classList.add("showfilter");
  } else {
    document
      .querySelector(".analysis__item.totals")
      ?.classList.remove("showfilter");
  }
});

const shortWords = document.querySelector("#short-words") as HTMLInputElement;

shortWords.addEventListener("change", () => {
  if (shortWords.checked) {
    document
      .querySelector(".analysis__item.short")
      ?.classList.add("showfilter");
  } else {
    document
      .querySelector(".analysis__item.short")
      ?.classList.remove("showfilter");
  }
});

const frequencies = document.querySelector("#frequencies") as HTMLInputElement;

frequencies.addEventListener("change", () => {
  if (frequencies.checked) {
    document
      .querySelector(".analysis__item.frequencies")
      ?.classList.add("showfilter");
  } else {
    document
      .querySelector(".analysis__item.frequencies")
      ?.classList.remove("showfilter");
  }
});

const reversedWords = document.querySelector(
  "#reversed-words"
) as HTMLInputElement;

reversedWords.addEventListener("change", () => {
  if (reversedWords.checked) {
    document
      .querySelector(".analysis__item.reversed-words")
      ?.classList.add("showfilter");
  } else {
    document
      .querySelector(".analysis__item.reversed-words")
      ?.classList.remove("showfilter");
  }
});

const forbiddenWords = document.querySelector(
  "#forbidden-words"
) as HTMLInputElement;

forbiddenWords.addEventListener("change", () => {
  if (forbiddenWords.checked) {
    document
      .querySelector(".analysis__item.forbidden")
      ?.classList.add("showfilter");
  } else {
    document
      .querySelector(".analysis__item.forbidden")
      ?.classList.remove("showfilter");
  }
});

const camelCaseWords = document.querySelector(
  "#camel-case"
) as HTMLInputElement;

camelCaseWords.addEventListener("change", () => {
  if (camelCaseWords.checked) {
    document
      .querySelector(".analysis__item.camel-case")
      ?.classList.add("showfilter");
  } else {
    document
      .querySelector(".analysis__item.camel-case")
      ?.classList.remove("showfilter");
  }
});
