import { getParagraphsTotalNumber } from "../index.js";

console.log("Test de la función getParagraphsTotalNumber\n");

const test1 = (): void => {
  const text = `Mi nombre es Isa.

  Tengo 34 años.`;

  const expectedParagraphsTotal = 2;
  const actualParagraphsTotal = getParagraphsTotalNumber(text);

  console.log(
    `Texto a testear:\n "${text}" \nResultado esperado: ${expectedParagraphsTotal}`
  );

  if (actualParagraphsTotal === expectedParagraphsTotal) {
    console.log(`Resultado obtenido ${actualParagraphsTotal} - TEST OK\n`);
  } else {
    console.log(
      `Resultado obtenido: ${actualParagraphsTotal} - TEST FALLIDO\n`
    );
  }
};
test1();

const test2 = (): void => {
  const text = "Mi nombre es Isa";
  const expectedParagraphsTotal = 1;
  const actualParagraphsTotal = getParagraphsTotalNumber(text);

  console.log(
    `Texto a testear:\n "${text}" \nResultado esperado: ${expectedParagraphsTotal}`
  );

  if (actualParagraphsTotal === expectedParagraphsTotal) {
    console.log(`Resultado obtenido: ${actualParagraphsTotal} - TEST OK\n`);
  } else {
    console.log(
      `Resultado obtenido: ${actualParagraphsTotal} - TEST FALLIDO\n`
    );
  }
};
test2();

const test3 = (): void => {
  const text = ``;
  const expectedParagraphsTotal = 0;
  const actualParagraphsTotal = getParagraphsTotalNumber(text);

  console.log(
    `Texto a testear:\n "${text}" \nResultado esperado: ${expectedParagraphsTotal}`
  );

  if (actualParagraphsTotal === expectedParagraphsTotal) {
    console.log(`Resultado obtenido: ${actualParagraphsTotal} - TEST OK\n`);
  } else {
    console.log(
      `Resultado obtenido: ${actualParagraphsTotal} - TEST FALLIDO\n`
    );
  }
};
test3();

const test4 = (): void => {
  const text = `

`;
  const expectedParagraphsTotal = 0;
  const actualParagraphsTotal = getParagraphsTotalNumber(text);

  console.log(
    `Texto a testear:\n "${text}" \nResultado esperado: ${expectedParagraphsTotal}`
  );

  if (actualParagraphsTotal === expectedParagraphsTotal) {
    console.log(`Resultado obtenido: ${actualParagraphsTotal} - TEST OK\n`);
  } else {
    console.log(
      `Resultado obtenido: ${actualParagraphsTotal} - TEST FALLIDO\n`
    );
  }
};
test4();
