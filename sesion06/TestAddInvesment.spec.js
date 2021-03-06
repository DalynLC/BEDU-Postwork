const request = require("supertest");
const app = require("./app");


describe('add-investment endpoint', () => {
    it('returns new created investment', async () => {
        const name = "cetes 28 days";
        const description = "cetes for 28 days";
        const interest = 4.5;
        const startingAmount = 10;
        const durationDays = 28;
        const startDate = '2021-01-01';
        const expectedEndDate = '2021-01-29T00:00:00.000Z';
        const expectedFinalAmount = 10.035;

        const response = await request(app).post("/add-investment").send({
            name, description, interest, startingAmount, duration: durationDays, startDate
        });


        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(name);
        expect(response.body.description).toBe(description);
        expect(response.body.interest).toBe(interest);
        expect(response.body.startingAmount).toBe(startingAmount);
        expect(response.body.endDate).toBe(expectedEndDate);

    });

    it('returns final amount after taxes', async () => {
        const response = await request(app).get("/getDetails").send({
            id:  '123e4567-e89b-12d3-a456-426655440000'
        });
        
        expect(response.body.id).toBe('123e4567-e89b-12d3-a456-426655440000');
        expect(response.body.finalAmountAfterTaxes).toBe(9.2322);
    });
})