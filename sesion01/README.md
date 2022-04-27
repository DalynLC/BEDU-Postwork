## Integrantes

- Osmar Barraza
- Cruz Gil
- Dalyn Lara
- Carlos Valdivia

___

# Postwork

Recuerda que también puedes consultar tu postwork en la app Bedu


## 🎯 OBJETIVOS

- Practicar la creación de pruebas unitarias
- Desarrollar funcionalidad adicional 
- Desarrollar pruebas unitarias


## 🚀 DESARROLLO

A continuación realizaremos un método que nos permite hacer conversiones de PascalCase y snake_case a camelCase

Sigue estas instrucciones:

1. En el archivo StringOperations.js añade una función llamada: castPasalCaseToCamelCase
1. Realiza su implementación
1. En el archivo TestStringOperations.js añade la función testCastPasalCaseToCamelCase
1. Realiza las pruebas que consideres necesarias
1. Repite los pasos anteriores ahora para la función castSnakeCaseToCamelCase

### CÓDIGO
´´´javascript
StringOperations.js
´´´
´´´javascript

//Pascal - Camel
const castPascalCaseToCamelCase = (pascalCaseString) => {
    return pascalCaseString.charAt(0).toLowerCase() + pascalCaseString.slice(1);
}
const castCamelCaseToPascalCase = (camelCaseString) => {
    return camelCaseString.charAt(0).toUpperCase() + camelCaseString.slice(1);
}

//Snake - Camel
const castSnakeCaseToCamelCase = (snakeCaseString) => {
    const pascalCase = castSnakeCaseToPascalCase(snakeCaseString);
    return castPascalCaseToCamelCase(pascalCase);
}

const castCamelCaseToSnakeCase = (camelCaseString) => {
    const pascalCase = castCamelCaseToPascalCase(camelCaseString);
    return castPascalCaseToSnakeCase(pascalCase);
}
´´´

´´´javascript
TestStringOperations.js
´´´
´´´javascript

/const testCastPascalCaseToCamelCase = () => {
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
´´´

### Reflexiones finales 

Una vez que hayas terminado  la actividad responde las siguientes preguntas:

¿Cómo elegiste los casos de prueba para validar el correcto funcionamiento del sistema?
Seleccioné dos casos de prueba con distintas características que debían dar el resultado esperado y una con un caso inesperado que produjera un error, esto con la intención de asegurarme que donde debía fallar fallara, y donde no, hiciera lo esperado.
¿Después de concluir el reto refactorizaste el código? ¿Qué cambios realizaste?
Sí, después de concluir el reto y correr el primer set de pruebas agregué líneas de código que hicieran más fácil leer los resultados y comparar las entradas con las salidas.
¿Utilizaste un método común o múltiples métodos individuales? ¿Por qué?
Realicé métodos individuales para cada tipo de conversión, test y un método genérico para mostrar resultados con el fin de hacer el código más legible y que las modificaciones afectaran individualmente cada parte. 


## ✅ Checklist 

Asegúrate que tu postwork contenga todo lo siguiente, ya que esto se evaluará al término del módulo.

- [ ] El archivo StringOperations cuenta con una función para convertir textos de formato PascalCase a camelCase
- [ ] El archivo StringOperations cuenta con una función para convertir textos de formato snake_case a camelCase
- [ ] En el archivo TestStringOperations cuenta con las pruebas para verificar el funcionamiento de la conversión de PascalCase a camelCase
- [ ] En el archivo TestStringOperations cuenta con las pruebas para verificar el funcionamiento de la conversión de snake_case a camelCase