import { getWordFrecuency } from "../index.js";

console.log("Test de la función getWordFrecuency:\n");

const test1 = (): void => {
  const text = `Hola Hola
  
  Hola`;

  const expectedWordfrecuency = 3;
  const actualWordFrecuency = getWordFrecuency(text, "Hola");

  console.log(
    `Test 1:\n "${text}" \n\nResultado esperado: ${expectedWordfrecuency}`
  );

  if (actualWordFrecuency === expectedWordfrecuency) {
    console.log(`Resultado obtenido ${actualWordFrecuency} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualWordFrecuency} - TEST ❌\n`);
  }
};
test1();

const test2 = (): void => {
  const text = `Hola 
  
  `;

  const expectedWordfrecuency = 1;
  const actualWordFrecuency = getWordFrecuency(text, "Hola");

  console.log(
    `Test 1:\n "${text}" \n\nResultado esperado: ${expectedWordfrecuency}`
  );

  if (actualWordFrecuency === expectedWordfrecuency) {
    console.log(`Resultado obtenido ${actualWordFrecuency} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualWordFrecuency} - TEST ❌\n`);
  }
};
test2();

const test3 = (): void => {
  const text = "";

  const expectedWordfrecuency = 0;
  const actualWordFrecuency = getWordFrecuency(text, "Hola");

  console.log(
    `Test 1:\n "${text}" \n\nResultado esperado: ${expectedWordfrecuency}`
  );

  if (actualWordFrecuency === expectedWordfrecuency) {
    console.log(`Resultado obtenido ${actualWordFrecuency} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualWordFrecuency} - TEST ❌\n`);
  }
};
test3();
