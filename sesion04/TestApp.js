const axios = require('axios');

//Execute functions
const executeTest = async (input, expectedOutput, functionToExecute) => {
    const actualOutput = await functionToExecute(input)

    if (actualOutput !== expectedOutput) {
        console.log(`Test fail. Expected output: ${expectedOutput}  actual output: ${actualOutput}`)
    } else {
        console.log("Test pass")
    }
}

//Test /login endpoint 
const makePostApiCall = async (userCredentials) => {
    const response = await axios.post('http://localhost:3000/login', userCredentials)
    return response.data
}

//Test /authentication endpoint
const makePostApiCallToken = async (userCredentials) => {
    const response = await axios.post('http://localhost:3000/authentication', userCredentials)
    return response.data
}

//Prueba Login con datos válidos. Obtiene el token
const testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "myemail@mail.com", password: "securePassword"}
    const successMessage = "Bienvenido al sistema"
    executeTest(userCredentials, successMessage, makePostApiCall)
}

//Prueba Login con email inválido
const testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "myemail@mail.com", password: "invalidPassword"}
    const successMessage = "Contraseña incorrecta"
    executeTest(userCredentials, successMessage, makePostApiCall)
}

//Prueba Login con contraseña inválida
const testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "unregistered_user@mail.com", password: "securePassword"}
    const successMessage = "Usuario no registrado"
    executeTest(userCredentials, successMessage, makePostApiCall)
}

//Prueba de bloqueo
const testReturnsLoginBlockedWhenUserLogsInWithValidEmailAndPassword = () => {
    const userCredentials = {email: "unregistered_user@mail.com", password: "insecurePassword"}
    const successMessage = "Login bloqueado"
    //Tercer intento inválido. Usuario no registrado
    executeTest(userCredentials, "Usuario no registrado", makePostApiCall)
    //Cuarto intento. Se bloquea el acceso.
    executeTest(userCredentials, successMessage, makePostApiCall)
}



//Prueba token válido 
const testReturnsValidToken = () => {
    const userCredentials = {email: "myemail@mail.com", password: "securePassword"}
    const successMessage = "bXllbWFpbEBtYWlsLmNvbTpzZWN1cmVQYXNzd29yZDphZG1pbg=="
    executeTest(userCredentials, successMessage, makePostApiCallToken)
}
//Prueba token inválido
const testReturnsInvalidToken = () => {
    const userCredentials = {email: "myemail@mail.com", password: "securePassword"}
    const successMessage = "abXllbWFpbEBtYWlsLmNvbTpzZWN1cmVQYXNzd29yZDphZG1pbg=="
    executeTest(userCredentials, successMessage, makePostApiCallToken)
}

/*Función para comprobar que el cifrado es correcto y puede descifrarse. Si se implenta afecta al primer test por alguna razón
const testDecypherToken = () => {
    const userCredentials = {email: "myemail@mail.com", password: "securePassword"}
    const successMessage = "myemail@mail.com:securePassword:admin"
    let buff = new Buffer('bXllbWFpbEBtYWlsLmNvbTpzZWN1cmVQYXNzd29yZDphZG1pbg==', 'base64');
    let text = buff.toString('ascii');

    console.log(`Test fail. Expected output: ${successMessage}  actual output: ${text}`)

}*/

//Bloque de pruebas /login endpoint
testReturnsSuccessMessageWhenUserLogsInWithValidEmailAndPassword()
testReturnsInvalidPasswordMessageWhenUserLogsInWithValidEmailAndPassword()
testReturnsUserNotFoundMessageWhenUserLogsInWithValidEmailAndPassword()

//Bloque de pruebas /authentication endpoint
testReturnsValidToken()
testReturnsInvalidToken()
//testDecypherToken()

testReturnsLoginBlockedWhenUserLogsInWithValidEmailAndPassword()

