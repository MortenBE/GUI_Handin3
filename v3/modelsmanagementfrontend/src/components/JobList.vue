<template>
    <div>
        <h2>List of Jobs</h2>
        <div v-for="job in jobs" :key="job.EfJobId">          
            <p> Job Id: {{job.efJobId}} </p>
            <p> Customer: {{job.customer}} </p>
            <p> days:   {{job.days}} </p> 
            <p> Job Location:  <p>   {{job.location}}</p>
            <b> --------------------------------------------- </b>           
        </div>
    </div>
</template>

<script>
var test;
    export default {
        name: "JobList",
        data() {
            return {
                jobs: []
            }
        },
        props: [test],
        methods: {
    
    getJobs()   {
    var url = "https://localhost:5001/api/Jobs/"
    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
        })
      .then(responseJson => responseJson.json())
      .then(data => {
        this.jobs = data;
      })
      .catch(error => () => console.log(error));
      console.log(this.jobs);
    }
    },
      mounted() {
      this.getJobs();
    }
    }
    
    
</script>

<style scoped>

</style>