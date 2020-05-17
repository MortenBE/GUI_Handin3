<template>
    <div>
        <h2>List of Jobs</h2>
        <div v-for="job in jobs" :key="job.EfJobId">          
            <p>Customer: {{job.customer}}, days: {{job.days}}, Job Location: {{job.location}}</p>
        </div>
    </div>
</template>

<script>
var test;
    export default {
        name: "JobList",
        data() {
            return {
              //isLoading: true,
                jobs: []
            }
        },
        props: [test],
        methods: {
    
    getJobs()   {
    var url = "https://localhost:44368/api/Jobs/"
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
        //this.isLoading = false;
      })
      // eslint-disable-next-line no-console
      .catch(error => () => console.log(error));
      //this.isLoading = false;
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