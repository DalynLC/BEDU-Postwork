## Integrantes

- Osmar Barraza
- Cruz Gil
- Dalyn Lara
- Carlos Valdivia

___

# Postwork

Recuerda que tambi茅n puedes consultar tu postwork en la app Bedu


## 馃幆 OBJETIVOS

- Practicar la creaci贸n de pruebas unitarias
- Desarrollar funcionalidad adicional 
- Desarrollar pruebas unitarias


## 馃殌 DESARROLLO

A continuaci贸n realizaremos un m茅todo que nos permite hacer conversiones de PascalCase y snake_case a camelCase

Sigue estas instrucciones:

1. En el archivo StringOperations.js a帽ade una funci贸n llamada: castPasalCaseToCamelCase
1. Realiza su implementaci贸n
1. En el archivo TestStringOperations.js a帽ade la funci贸n testCastPasalCaseToCamelCase
1. Realiza las pruebas que consideres necesarias
1. Repite los pasos anteriores ahora para la funci贸n castSnakeCaseToCamelCase

### C脫DIGO
```javascript
StringOperations.js
```
``` javascript

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
```

```javascript
TestStringOperations.js
```
```javascript

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
```

### Reflexiones finales 

Una vez que hayas terminado  la actividad responde las siguientes preguntas:

- __驴C贸mo elegiste los casos de prueba para validar el correcto funcionamiento del sistema?__
Seleccion茅 dos casos de prueba con distintas caracter铆sticas que deb铆an dar el resultado esperado y una con un caso inesperado que produjera un error, esto con la intenci贸n de asegurarme que donde deb铆a fallar fallara, y donde no, hiciera lo esperado.
- __驴Despu茅s de concluir el reto refactorizaste el c贸digo? 驴Qu茅 cambios realizaste?__
S铆, despu茅s de concluir el reto y correr el primer set de pruebas agregu茅 l铆neas de c贸digo que hicieran m谩s f谩cil leer los resultados y comparar las entradas con las salidas.
- __驴Utilizaste un m茅todo com煤n o m煤ltiples m茅todos individuales? 驴Por qu茅?__
Realic茅 m茅todos individuales para cada tipo de conversi贸n, test y un m茅todo gen茅rico para mostrar resultados con el fin de hacer el c贸digo m谩s legible y que las modificaciones afectaran individualmente cada parte. 


## 鉁? Checklist 

Aseg煤rate que tu postwork contenga todo lo siguiente, ya que esto se evaluar谩 al t茅rmino del m贸dulo.

- [ ] El archivo StringOperations cuenta con una funci贸n para convertir textos de formato PascalCase a camelCase
- [ ] El archivo StringOperations cuenta con una funci贸n para convertir textos de formato snake_case a camelCase
- [ ] En el archivo TestStringOperations cuenta con las pruebas para verificar el funcionamiento de la conversi贸n de PascalCase a camelCase
- [ ] En el archivo TestStringOperations cuenta con las pruebas para verificar el funcionamiento de la conversi贸n de snake_case a camelCase
