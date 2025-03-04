import { getTotalNumberOfParagraphs } from "../index.js";

const test1 = (): void => {
  const text = `Mi nombre es Isa.

  Tengo 34 años.`;
  const expectedTest = 2;

  console.log(
    `Texto a testear:\n ${text} \nResultado esperado: ${expectedTest}`
  );

  if (getTotalNumberOfParagraphs(text) === expectedTest) {
    console.log(
      `Resulado obtenito ${getTotalNumberOfParagraphs(text)} - TEST OK\n`
    );
  } else {
    console.log("Test failed");
  }
};
test1();

const test2 = (): void => {
  const text = `Mi nombre es Isa`;
  const expectedTest = 1;

  console.log(
    `Texto a testear:\n ${text} \nResultado esperado: ${expectedTest}`
  );

  if (getTotalNumberOfParagraphs(text) === 1) {
    console.log(
      `Resulado obtenito ${getTotalNumberOfParagraphs(text)} - TEST OK\n`
    );
  } else {
    console.log("Test failed");
  }
};
test2();

const test3 = (): void => {
  const text = "";
  const expectedTest = 0;

  console.log(
    `Texto a testear:\n ${text} \nResultado esperado: ${expectedTest}`
  );

  if (getTotalNumberOfParagraphs(text) === 0) {
    console.log(
      `Resulado obtenito ${getTotalNumberOfParagraphs(text)} - TEST OK\n`
    );
  } else {
    console.log("Test failed");
  }
};
test3();

const test4 = (): void => {
  const text = `

`;
  const expectedTest = 0;

  console.log(`Texto testear:\n ${text} \nResultado esperado: ${expectedTest}`);

  if (getTotalNumberOfParagraphs(text) === 0) {
    console.log(
      `Resulado a obtenito ${getTotalNumberOfParagraphs(text)} - TEST OK\n`
    );
  } else {
    console.log("Test failed");
  }
};
test4();
