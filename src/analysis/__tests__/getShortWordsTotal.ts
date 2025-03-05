import { getShortWordsTotal } from "../index.js";

console.log("Test de la función getWordsTotal:\n");

const test1 = (): void => {
  const text = `Mi nombre es Isa.

  Tengo 34 años.`;

  const expectedShortWordsTotal = 4;
  const actualShortWordsTotal = getShortWordsTotal(text, 4);

  console.log(
    `Test 1:\n "${text}" \n\nResultado esperado: ${expectedShortWordsTotal}`
  );

  if (actualShortWordsTotal === expectedShortWordsTotal) {
    console.log(`Resultado obtenido ${actualShortWordsTotal} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualShortWordsTotal} - TEST ❌\n`);
  }
};
test1();

const test2 = (): void => {
  const text = "Quiero saber cuantas hay";
  const expectedShortWordsTotal = 1;
  const actualShortWordsTotal = getShortWordsTotal(text, 4);

  console.log(
    `Test 2:\n "${text}" \n\nResultado esperado: ${expectedShortWordsTotal}`
  );

  if (actualShortWordsTotal === expectedShortWordsTotal) {
    console.log(`Resultado obtenido ${actualShortWordsTotal} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualShortWordsTotal} - TEST ❌\n`);
  }
};
test2();

const test3 = (): void => {
  const text = "";
  const expectedShortWordsTotal = 0;
  const actualShortWordsTotal = 0;

  console.log(
    `Test 3:\n "${text}" \n\nResultado esperado: ${expectedShortWordsTotal}`
  );

  if (actualShortWordsTotal === expectedShortWordsTotal) {
    console.log(`Resultado obtenido ${actualShortWordsTotal} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualShortWordsTotal} - TEST ❌\n`);
  }
};
test3();
