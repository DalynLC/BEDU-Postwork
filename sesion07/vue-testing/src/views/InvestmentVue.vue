<template>
  <div class="InvestmentClass">
    ID Invesment <input v-model="idInvesment" id="idInvesment">
    <br>
    Invesment Name <input v-model="investmentName" id="investmentName">
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
    <button id="calculate-button" @click="getDataById">Calcular</button>
    <br>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'InvestmentClass',
  data() {
    return {
      idInvesment: '33625d58-6178-4cad-86e5-fda1d0bf3fd0',
      investmentName: '',
      investmentDescription: '',
      investmentInterest: '',
      investmentStartingAmount: '',
      investmentDurationDays: '',
      investmentStartDate: '',
      finalAmount: '',
      response: null,
    };
  },
  methods: {
    getDataById() {
      // const id = document.getElementById('idInvesment');
      axios.get('http://localhost:8080/returnDBValues?id=33625d58-6178-4cad-86e5-fda1d0bf3fd0', {
      }).then((result) => {
        const initial = result.data.final_amount * 0.88;
        const after = result.data.final_amount - initial;
        console.log(result.data);
        this.investmentName = result.data.name;
        this.investmentDescription = result.data.description;
        this.investmentInterest = result.data.interest;
        this.investmentStartingAmount = result.data.starting_amount;
        this.investmentStartDate = result.data.start_date;
        this.finalAmount = after;
        return result.data;
      });
    },
  },
};
</script>
