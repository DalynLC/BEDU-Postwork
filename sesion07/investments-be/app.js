const express = require('express')
const bodyParser = require('body-parser');
const Investment = require("./Investment");
const InvestmentRepository = require("./InvestmentRepository");
const InvestmentRepositoryContract = require("./InvestmentRepositoryContract");
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(cors())


app.post('/add-investment', (req, res) => {

    const investmentData = {
        name: req.body.name,
        description: req.body.description,
        interest: req.body.interest,
        startingAmount: req.body.startingAmount,
        startDate: new Date(req.body.startDate),
        duration: req.body.duration,
    };
    const repository = new InvestmentRepository()

    const investment = Investment.addInvestment(investmentData.name, investmentData.description, parseInt(investmentData.interest), parseInt(investmentData.startingAmount), investmentData.startDate, parseInt(investmentData.duration), repository);
    console.log(investment)
    repository.save(investment)
    res.send(investment);
})

app.get('/returnDBValues', (req, res) => {
    const repository = new InvestmentRepository();
    const response = repository.getInvestmentFromDB(req.query.id);
    res.send(response);
})

app.get('/getDetails',(req,res) => {
    const repository = new InvestmentRepository();
    const inv = repository.getInvestmentFromDB(req.query.id);
    
    const investmentData = {
        name: inv.name,
        description: inv.description,
        interest: inv.interest,
        startingAmount: inv.startingAmount,
        startDate: new Date(inv.startDate),
        duration: inv.duration,
    };
    
    console.log('test getDetails', investmentData);
    const investment = Investment.addInvestment(investmentData.name, investmentData.description, investmentData.interest, investmentData.startingAmount, investmentData.startDate, investmentData.duration, repository);

    res.send(investment);
})

/*app.get('/getDetails',(req,res) => {

    const investmentData = {
        name: "cetes 28 days",
        description: "cetes for 28 days",
        interest: 4.5,
        startingAmount: 10,
        startDate: new Date('2021-01-01'),
        duration: 28,
    };
    const repository = new InvestmentRepositoryStub(req.body.id);
    
    const investment = Investment.addInvestment(investmentData.name, investmentData.description, investmentData.interest, investmentData.startingAmount, investmentData.startDate, investmentData.duration, repository);

    res.send(investment);
})
*/
module.exports = app;