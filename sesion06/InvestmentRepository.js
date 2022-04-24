const InvestmentRepositoryContract = require("./InvestmentRepositoryContract");
const {v4: uuidv4} = require('uuid');
//const db = required ("./database");

class InvestmentRepository extends InvestmentRepositoryContract{
    constructor(dbConnection){
        super();
        //this.dbConnection = dbConnection;
    }

    getId(){
        return uuidv4();
    }
}

module.exports = InvestmentRepository