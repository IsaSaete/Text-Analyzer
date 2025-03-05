import { joinListWordsWithCommas } from "../index.js";

console.log("Test de la función joinListWordsWithCommas:\n");

const test1 = (): void => {
  const listWords = ["Mi", "nombre", "es", "Isa", "Tengo", "34", "años"];
  const expectedListWord = "Mi,nombre,es,Isa,Tengo,34,años";
  const actualListWord = joinListWordsWithCommas(listWords);

  console.log(
    `Test 1:\n "${listWords}" \n\nResultado esperado: ${expectedListWord}`
  );

  if (actualListWord === expectedListWord) {
    console.log(`Resultado obtenido ${actualListWord} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualListWord} - TEST ❌\n`);
  }
};
test1();

const test2 = (): void => {
  const listWords = [""];
  const expectedListWord = "";
  const actualListWord = joinListWordsWithCommas(listWords);

  console.log(
    `Test 1:\n "${listWords}" \n\nResultado esperado: "${expectedListWord}"`
  );

  if (actualListWord === expectedListWord) {
    console.log(`Resultado obtenido "${actualListWord}" - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: "${actualListWord}" - TEST ❌\n`);
  }
};
test2();

const test3 = (): void => {
  const listWords = ["Mi", "nombre", "es", "Isa", "", "tengo", "34", "años"];
  const expectedListWord = "Mi,nombre,es,Isa,tengo,34,años";
  const actualListWord = joinListWordsWithCommas(listWords);

  console.log(
    `Test 1:\n "${listWords}" \n\nResultado esperado: ${expectedListWord}`
  );

  if (actualListWord === expectedListWord) {
    console.log(`Resultado obtenido ${actualListWord} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${actualListWord} - TEST ❌\n`);
  }
};
test3();
