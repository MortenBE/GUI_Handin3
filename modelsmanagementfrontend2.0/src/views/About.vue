<template>
    <div id ="app">
        <Create/>
        <Jobs v-bind:jobs="jobs" v-on:del-job="deleteJob"/>  
        <button v-on:click="getJobs()">Click me</button>
    </div>
</template>

<script>
import Jobs from '../components/Jobs.vue';
import Create from '../components/CreateJob.vue';
import axios from 'axios';

var test;

export default {
    name: 'Jobsliste',
    components: {
        Jobs,
        Create
    },
      data() {
    return {
      jobs: []
    }
  },
    methods: {
        deleteJob(id) {
            this.jobs = this.jobs.filter(job => job.id !== id);
        },
        getJobs() {
    axios.get('https://localhost:5001/api/jobs/')
      .then(res => this.test = res.data)
      .catch(err => console.log(err));
      console.log(test)
    }
  }
}
</script>