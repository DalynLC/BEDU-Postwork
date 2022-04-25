const {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase, castPascalCaseToCamelCase, castSnakeCaseToCamelCase,castCamelCaseToSnakeCase, castCamelCaseToPascalCase} = require("./StringOperations");

// Test for Pascal - Snake
const testCastPascalCaseToSnakeCase = () => {
    console.log("\nPascal to Snake Test");
    executeTest("EstoEsUnEjemplo", "esto_es_un_ejemplo", castPascalCaseToSnakeCase);
    executeTest("otroEjemplo", "otro_ejemplo", castPascalCaseToSnakeCase);
    executeTest("otroejemplo", "otro_ejemplo", castPascalCaseToSnakeCase);
  
}

const testCastSnakeCaseToPascalCase = () => {
  console.log("\nSnake to Pascal Test");  
  executeTest("esto_es_un_ejemplo", "EstoEsUnEjemplo", castSnakeCaseToPascalCase);
    executeTest("otro_ejemplo", "OtroEjemplo", castSnakeCaseToPascalCase);
    // Caso de prueba que falla
    executeTest("aotroejemplo", "AOtroejemplo", castSnakeCaseToPascalCase);
}

const testCastPascalCaseToCamelCase = () => {
    console.log("\nPascal to Camel Test");
    executeTest("EstoEsUnEjemplo", "estoEsUnEjemplo", castPascalCaseToCamelCase);
    executeTest("OtroEjemplo", "otroEjemplo", castPascalCaseToCamelCase);
    // Caso de prueba que falla
    executeTest("A_OtroEjemplo", "aOtroEjemplo", castPascalCaseToCamelCase);
}

const testCastSnakeCaseToCamelCase = () => {
  console.log("\nSnake to Camel Test");
    executeTest("esto_es_un_ejemplo", "estoEsUnEjemplo", castSnakeCaseToCamelCase);
    executeTest("otro_ejemplo", "otroEjemplo", castSnakeCaseToCamelCase);
    // Caso de prueba que falla
    executeTest("aotroejemplo", "aotroEjemplo", castSnakeCaseToCamelCase);
}

const testCastCamelCaseToSnakeCase = () => {
  console.log("\nCamel to Snake Test");
    executeTest("estoEsUnEjemplo", "esto_es_un_ejemplo", castCamelCaseToSnakeCase);
    executeTest("otroEjemplo", "otro_ejemplo", castCamelCaseToSnakeCase);
    // Caso de prueba que falla
    executeTest("a_otro_ejemplo", "aotro_Ejemplo", castCamelCaseToSnakeCase);
}

const testCastCamelCaseToPascalCase = () => {
  console.log("\nCamel to Pascal Test");
    executeTest("estoEsUnEjemplo", "EstoEsUnEjemplo", castCamelCaseToPascalCase);
    executeTest("otroEjemplo", "OtroEjemplo", castCamelCaseToPascalCase);
    // Caso de prueba que falla
    executeTest("a_otro_ejemplo", "AOtroEjemplo", castCamelCaseToPascalCase);
}



const executeTest = (input, expectedOutput, functionToExecute) => {
  console.log(`Entrada: ${input}`)
    const actualOutput = functionToExecute(input)
    
    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. \nExpected output: ${expectedOutput}  \nActual output: ${actualOutput}`)
    } else {
        console.log(`Test Passed. \nExpected output: ${expectedOutput}  \nActual output: ${actualOutput}`)
    }
  console.log("\n");
}


testCastPascalCaseToSnakeCase();
testCastSnakeCaseToPascalCase();
testCastPascalCaseToCamelCase();
testCastSnakeCaseToCamelCase();
testCastCamelCaseToSnakeCase();
testCastCamelCaseToPascalCase();