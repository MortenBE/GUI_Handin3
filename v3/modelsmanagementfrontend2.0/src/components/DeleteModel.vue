<template>
    <div>
        <h2>Delete model</h2>
        <!--<ModelList />-->

        <div v-for="job in jobs" :key="job.EfJobId">
            <div class="manage">   
                <p style="width:85%; text-align:left;">Customer: {{job.customer}}, days: {{job.days}}, Job Location: {{job.location}}</p>                 
                <button @click="removeModelFromJob" class="del">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </div>

        








    </div>
</template>

<script>


    export default {
        name: "DeleteModel",
        data() {
            return {
                //isLoading: true,
                jobs: []
            }
        },        
        methods: {            
            removeModelFromJob(ModelId) {
                var url = "https://localhost:44368/api/jobs/" + this.job.jobId + "/model/" + ModelId;
                fetch(url, {
                    method: "DELETE",
                    credentials: "include",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        "Content-Type": "application/json"
                    }
                })
            },
            getJobs() {
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
    .del {
        background-color: DodgerBlue;
        border: none;
        color: white;
        padding: 12px 16px;
        font-size: 16px;
        cursor: pointer;
        float: right;

    }
    .del:hover {
        background-color: red;

    }
    .manage
    {        
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

</style>