<template>
    <div>
        <h2>Add model to job</h2>
        <div style="width:100%">
            <form @submit.prevent="AddToJob">
                <div class="form-group">
                    <label for="modelId">Model Id</label>
                    <input class="form-control" type="text" v-model="form.modelId" name="modelId" />
                </div>
                <div class="form-group">
                    <label for="jobId">Job Id</label>
                    <input class="form-control" type="text" v-model="form.jobId" name="jobId" />
                </div>
                <div class="formgroup">
                <input type="submit" class="button1" value="Add model to job" />
            </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddModel",
        data()
        {
            return {
                form: {
                    modelId: "",
                    jobId: ""
                }
            }
        },
         methods: {
     AddToJob() {
      var url =
        "https://localhost:5001/api/jobs/" +
        this.form.jobId +
        "/model/" +
        this.form.modelId;
      fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json"
        }
      })
        .catch(error => () => console.log(error));
        console.log(url);
    }
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