import { getWordsTotalNumber } from "../index.js";

console.log("Test de la función getWordsTotalNumber:\n");

const test1 = (): void => {
  const text = `Mi nombre es Isa.

  Tengo 34 años.`;

  const expectedWordsTotal = 7;
  const actualWordsTotal = getWordsTotalNumber(text);

  console.log(
    `Test 1:\n "${text}" \n\nResultado esperado: ${expectedWordsTotal}`
  );

  if (actualWordsTotal === expectedWordsTotal) {
    console.log(`Resultado obtenido ${actualWordsTotal} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualWordsTotal} - TEST ❌\n`);
  }
};
test1();

const test2 = (): void => {
  const text = "Mi nombre es Isa";
  const expectedWordsTotal = 4;
  const actualWordsTotal = getWordsTotalNumber(text);

  console.log(
    `Test 2:\n "${text}" \n\nResultado esperado: ${expectedWordsTotal}`
  );

  if (actualWordsTotal === expectedWordsTotal) {
    console.log(`Resultado obtenido ${actualWordsTotal} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualWordsTotal} - TEST ❌\n`);
  }
};

test2();

const test3 = (): void => {
  const text = "";
  const expectedWordsTotal = 0;
  const actualWordsTotal = getWordsTotalNumber(text);

  console.log(
    `Test 3:\n "${text}" \n\nResultado esperado: ${expectedWordsTotal}`
  );

  if (actualWordsTotal === expectedWordsTotal) {
    console.log(`Resultado obtenido ${actualWordsTotal} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualWordsTotal} - TEST ❌\n`);
  }
};
test3();

const test4 = (): void => {
  const text = `
  
  `;

  const expectedWordsTotal = 0;
  const actualWordsTotal = getWordsTotalNumber(text);

  console.log(
    `Test 4:\n "${text}" \n\nResultado esperado: ${expectedWordsTotal}`
  );

  if (actualWordsTotal === expectedWordsTotal) {
    console.log(`Resultado obtenido ${actualWordsTotal} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualWordsTotal} - TEST ❌\n`);
  }
};
test4();
