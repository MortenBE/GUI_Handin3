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
    label{
        margin: 2px; 
    }
    input{
        margin: 2px;
    }

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
    font-size: 1.5rem;
  color: dodgerblue;
  font-family: "Comic Sans MS", cursive, sans-serif;
  box-sizing: border-box;
}
.button1 {
  
  background-color: #2F2FA2; 
  border: none;
  color: white;  
  padding: 4px 8px;
  float:none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 8px;
  margin: 5px;
  
}

  .add {
  background-color: greenyellow;
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

    .but {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  }
  .del:hover {
  background-color: red;
}
 
</style>