class Investment {
    id;
    name;
    description;
    interest;
    startingAmount;
    finalAmount;
    startDate;
    endDate;
    finalAmountAfterTaxes;

    constructor(id, name, description, interest, startingAmount, finalAmount, startDate, endDate,finalAmountAfterTaxes) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.interest = interest;
        this.startingAmount = startingAmount;
        this.finalAmount = finalAmount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.finalAmountAfterTaxes = finalAmountAfterTaxes;
    }

    static addInvestment(name, description, interest, startingAmount, startDate, duration, repository) {
        const endDate = startDate;
        endDate.setDate(endDate.getDate() + duration);

        const finalAmount = Investment._calculateFinalAmount(interest, startingAmount, duration);
        const finalAmountAfterTaxes = Investment.calculateTaxes(finalAmount)
        return new Investment(repository.getId(), name, description, interest, startingAmount, finalAmount, startDate, endDate,finalAmountAfterTaxes)
    }

    static _calculateFinalAmount(interest, startingAmount, duration) {
        const bankingYear = 360;
        const interestAsPercentage = interest / 100;
        return startingAmount * (1 + (((interestAsPercentage) / bankingYear) * duration));
    }

    static calculateTaxes(finalAmount){
        //console.log(finalAmount * 0.92)
        return finalAmount * 0.92;
        /*
        const cuotaFija = 0;
        const porcentajeExcedente = 0;
        const month = 0;
        
        if(duration <= 0){
            month = 1;
        }else{
            month = duration%30
        }

        const finalAmountPerMonth = finalAmount/month
        
        if(finalAmount >= 0.01 && finalAmount <= 644.58){
            cuotaFija = 0.00;
            porcentajeExcedente = 0.0192;
        }
        if(finalAmount >= 644.59 && finalAmount <= 5470.92){
            cuotaFija = 12.38;
            porcentajeExcedente = 0.064;
        }
        if(finalAmount >= 5470.93 && finalAmount <= 9614.66){
            cuotaFija = 321.26;
            porcentajeExcedente = 0.1088;
        }
        if(finalAmount >= 9614.67 && finalAmount <= 11176.62){
            cuotaFija = 772.10;
            porcentajeExcedente = 0.1088;
        }
        isr = cuotaFija + ((finalAmountPerMonth))
        */
    }
}


module.exports = Investment;