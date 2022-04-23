/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/login', (req, res) => {
    const userCredentials = {email: req.body.email, password: req.body.password}
    const response = login(userCredentials)
    res.send(response)
})

app.post('/autentication', (req, res) => {
    const userCredentials = {email: req.body.email, password: req.body.password}
    const response = login(userCredentials)
    res.send(response)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
*/

const {login} = require("./Login");
const {getToken} = require("./Login");
const express = require('express')
const bodyParser = require('body-parser');
const port = 3000
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req, res) => {
    const userCredentials = {email: req.body.email, password: req.body.password}
    const response = login(userCredentials)
    res.send(response)
})

app.post('/authentication', (req, res) => {
    const userCredentials = {email: req.body.email, password: req.body.password}
    const response = getToken(userCredentials)
    res.send(response)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})