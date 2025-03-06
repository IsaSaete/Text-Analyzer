import { getWordReverse } from "../index.js";

console.log("Test de la función getWordBackwards:\n");

const test1 = (): void => {
  const text = `No puedo 
  mas
  con mi vida`;

  const expectedtext = `adiv im noc  
sam  
 odeup oN`;
  const reverseText = getWordReverse(text);

  console.log(`Test 1:\n "${text}" \n\nResultado esperado: ${expectedtext}`);

  if (reverseText === expectedtext) {
    console.log(`Resultado obtenido ${reverseText} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${reverseText} - TEST ❌\n`);
  }
};
test1();

const test2 = (): void => {
  const text = "No puedo mas con mi vida";

  const expectedtext = "adiv im noc sam odeup oN";
  const reverseText = getWordReverse(text);

  console.log(`Test 1:\n "${text}" \n\nResultado esperado: ${expectedtext}`);

  if (reverseText === expectedtext) {
    console.log(`Resultado obtenido ${reverseText} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${reverseText} - TEST ❌\n`);
  }
};
test2();

const test3 = (): void => {
  const text = "";

  const expectedtext = "";
  const reverseText = getWordReverse(text);

  console.log(`Test 1:\n "${text}" \n\nResultado esperado: ${expectedtext}`);

  if (reverseText === expectedtext) {
    console.log(`Resultado obtenido ${reverseText} - TEST ✅\n`);
  } else {
    console.log(`Resultado obtenido: ${reverseText} - TEST ❌\n`);
  }
};
test3();
