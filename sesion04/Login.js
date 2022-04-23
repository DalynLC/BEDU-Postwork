var privilegio = "admin"



const users = [{email: "myemail@mail.com", password: "securePassword"}]
let count = 0;

const login = (userCredentials) => {
    if(count < 3){
        for (let i = 0; i < users.length; i++) {
            if (userCredentials.email === users[0].email){
                if(userCredentials.password === users[0].password) {
                    console.log('Token generado: ',getToken(userCredentials))
                    return "Bienvenido al sistema";
                }
                if(userCredentials.password !== users[0].password){
                    count += 1;
                    return "Contraseña incorrecta";
                }
            }else{
                count += 1;
                return "Usuario no registrado"
            }
        }
    }
    else{
        task();
        setTimeout(task, 500000);
        return ('Login bloqueado')
    }

    
}

function task() {
    console.log('Login bloqueado')
}

const getToken = (userCredentials) => {
    const encodedBase64Token = Buffer.from(`${userCredentials.email}:${userCredentials.password}:${privilegio}`).toString('base64'); 
    return encodedBase64Token;
};



module.exports = {login, getToken}
