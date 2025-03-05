import { getCharactersTotalNumber } from "../index.js";

console.log("Test de la función getCharactersTotalNumber:\n");

const test1 = (): void => {
  const text = `Mi nombre es Isa.

  Tengo 34 años.`;

  const expectedCharactersTotal = 26;
  const actualCharactersTotal = getCharactersTotalNumber(text);

  console.log(
    `Test 1:\n "${text}" \n\nResultado esperado: ${expectedCharactersTotal}`
  );

  if (actualCharactersTotal === expectedCharactersTotal) {
    console.log(`Resultado obtenido ${actualCharactersTotal} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualCharactersTotal} - TEST ❌\n`);
  }
};
test1();

const test2 = (): void => {
  const text = "Mi nombre es Isa";
  const expectedCharactersTotal = 13;
  const actualCharactersTotal = getCharactersTotalNumber(text);

  console.log(
    `Test 2:\n "${text}" \n\nResultado esperado: ${expectedCharactersTotal}`
  );

  if (actualCharactersTotal === expectedCharactersTotal) {
    console.log(`Resultado obtenido ${actualCharactersTotal} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualCharactersTotal} - TEST ❌\n`);
  }
};

test2();

const test3 = (): void => {
  const text = "";
  const expectedCharactersTotal = 0;
  const actualCharactersTotal = getCharactersTotalNumber(text);

  console.log(
    `Test 3:\n "${text}" \n\nResultado esperado: ${expectedCharactersTotal}`
  );

  if (actualCharactersTotal === expectedCharactersTotal) {
    console.log(`Resultado obtenido ${actualCharactersTotal} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualCharactersTotal} - TEST ❌\n`);
  }
};
test3();

const test4 = (): void => {
  const text = `
  
  `;

  const expectedWordsTotal = 0;
  const actualCharactersTotal = getCharactersTotalNumber(text);

  console.log(
    `Test 4:\n "${text}" \n\nResultado esperado: ${expectedWordsTotal}`
  );

  if (actualCharactersTotal === expectedWordsTotal) {
    console.log(`Resultado obtenido ${actualCharactersTotal} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualCharactersTotal} - TEST ❌\n`);
  }
};
test4();
