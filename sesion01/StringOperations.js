//Pascal-Snake

const castPascalCaseToSnakeCase = (pascalCaseString) => {
    return pascalCaseString.split(/(?=[A-Z])/).join('_').toLowerCase();
}

const castSnakeCaseToPascalCase = (snakeCaseString) => {
    const words = snakeCaseString.split('_');
    return words.map(word => word[0].toUpperCase() + word.substr(1)).join('');
}

//Pascal - Camel

const castPascalCaseToCamelCase = (pascalCaseString) => {
  return pascalCaseString.charAt(0).toLowerCase() +           
  pascalCaseString.slice(1);
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

module.exports = {castPascalCaseToSnakeCase, castSnakeCaseToPascalCase, castPascalCaseToCamelCase, castSnakeCaseToCamelCase, castCamelCaseToSnakeCase, castSnakeCaseToCamelCase, castCamelCaseToPascalCase};