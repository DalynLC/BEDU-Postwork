<template>
  <div class="InvestmentClass">
    Id: <input v-model="investmentId" id="investmentId">
    <button id="calculate-button" @click="getDBValues">Calcular</button>
    <br>
    Name: <span id="investmentName">{{ investmentName }}</span>
    <br>
    Description: <span id="description">{{ investmentDescription }}</span>
    <br>
    Interest: <span id="investmentInterest">{{ investmentInterest }}</span>
    <br>
    Starting Amount: <span id="investmentStartingAmount">{{ investmentStartingAmount }}</span>
    <br>
    Duration Days: <span id="investmentDurationDays">{{ investmentDurationDays }}</span>
    <br>
    Start Date: <span id="investmentDate">{{ investmentDate }}</span>
    <br>
    <p>Final Amount (before taxes): <span id="investmentFinalAmount">{{ finalAmount }}</span></p>
    <p>Final Amount AfterTaxes: <span id="investmentFinalAmount">{{ finalAmount }}</span></p>
    <button id="calculate-button" @click="addInvestmentMethod">Calcular</button>
    <br>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'InvestmentClass',
  data() {
    return {
      investmentId: 'xxxxx-xxxx-xxxxx-xxx',
    };
  },
  methods: {
    getDBValues() {
      axios.get('http://localhost:3000/returnDBValues', {
        id: this.investmentId,
      }).then((result) => {
        this.investmentName = result.data.name;
        this.investmentDescription = result.data.Description;
        this.investmentInterest = result.data.Interest;
        this.investmentStartingAmount = result.data.startingAmount;
        this.investmentDurationDays = result.data.duration;
        this.investmentStartDate = result.data.starDate;
        this.finalAmount = result.data.finalAmount;
      });
    },
  },
};
</script>
