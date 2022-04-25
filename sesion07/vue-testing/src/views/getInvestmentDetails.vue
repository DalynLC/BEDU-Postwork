<template>
  <div class="InvestmentClass">
    Id: <input v-model="investmentId" id="investmentId">
    <button id="calculate-button" @click="getDBValues">Calcular</button>
    <br>
    Description: <input v-model="investmentDescription" id="investmentDescription">
    <br>
    Interest: <input v-model="investmentInterest" id="investmentInterest">
    <br>
    Starting Amount: <input v-model="investmentStartingAmount" id="investmentStartingAmount">
    <br>
    Duration Days: <input v-model="investmentDurationDays" id="investmentDurationDays">
    <br>
    Start Date: <input v-model="investmentStartDate" id="investmentStartDate">
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
    getDBValues() {
      axios.get('http://localhost:3000/getDetails', {
        id: this.investmentId,
      }).then((result) => {
        this.investmentName = result.data.finalAmount;
        this.investmentDescription = result.data.finalAmount;
        this.investmentInterest = result.data.finalAmount;
        this.investmentStartingAmount = result.data.finalAmount;
        this.investmentDurationDays = result.data.finalAmount;
        this.investmentStartDate = result.data.finalAmount;
        this.finalAmount = result.data.finalAmount;
      });
    },
  },
};
</script>
