<template>
  <div class="InvestmentClass">
    Name: <input v-model="investmentName" id="investmentName">
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
    <p>Final Amount: <span id="investmentFinalAmount">{{ finalAmount }}</span></p>
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
      investmentName: 'cetes 28 days',
      investmentDescription: 'cetes 28 days',
      investmentInterest: '4.5',
      investmentStartingAmount: '10',
      investmentDurationDays: '28',
      investmentStartDate: '2021-01-01',
      finalAmount: 0,
      response: null,
    };
  },
  methods: {
    addInvestmentMethod() {
      axios.post('http://localhost:3000/add-investment', {
        name: this.investmentName,
        description: this.investmentDescription,
        interest: this.investmentInterest,
        startingAmount: this.investmentStartingAmount,
        duration: this.investmentDurationDays,
        startDate: this.investmentStartDate,
      }).then((result) => {
        this.finalAmount = result.data.finalAmount;
      });
    },
  },
};
</script>
