const express = require('express')
const bodyParser = require('body-parser');
const Investment = require("./Investment");
const InvestmentRepository = require("./InvestmentRepository");
const InvestmentRepositoryContract = require("./InvestmentRepositoryContract");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

class InvestmentRepositoryStub extends InvestmentRepositoryContract {
    constructor(id) {
        super();
        this.id = id;
    }

    getId() {
        return this.id;
    }
}

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

    const investment = Investment.addInvestment(investmentData.name, investmentData.description, investmentData.interest, investmentData.startingAmount, investmentData.startDate, investmentData.duration, repository);

    res.send(investment);
})

app.get('/getDetails',(req,res) => {

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

module.exports = app;