<template>
    <div>
        <h2>Delete model from job</h2>
        <form @submit.prevent="removeModelFromJob">
            <div class="form-group">
                <label for="modelId">Model Id</label>
                <input class="form-control" v-model="form.modelId" name="firstName" />
            </div>
            <div class="form-group">
                <label for="jobId">Job Id</label>
                <input class="form-control" v-model="form.jobId" name="lastName" />
                            <div class="col-5 form-group">
                        <input type="submit" class="button1" value="Delete Model" />
                </div>
        </div>
        </form>
    </div>
</template>

<script>


    export default {
        name: "DeleteModel",
  data()
  {
      return{
            form: {
              jobId: 1,
              modelId: 1,

            },
                jobs: []
            }
        },        
        methods: {            
            removeModelFromJob() {
                var url = "https://localhost:5001/api/jobs/" + this.form.jobId + "/model/" + this.form.modelId;
                fetch(url, {
                    method: "DELETE",
                    credentials: "include",
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        "Content-Type": "application/json"
                    }
                })
                 .catch(error => () => console.log(error));
                 console.log(url);
            },
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