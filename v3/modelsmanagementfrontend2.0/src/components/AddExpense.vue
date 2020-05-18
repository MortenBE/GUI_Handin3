<template>
    <div>
        <h2>Add expense to job</h2>
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
                <div class="form-group">
                    <label for="jobId">Expense</label>
                    <input class="form-control" type="text" v-model="form.expense" name="jobId" />
                </div>
                <div class="formgroup">
                <input type="submit" class="button1" value="Add expense to job" />
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
                    jobId: "",
                    expense: 0
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
        // eslint-disable-next-line no-console
        .catch(error => () => console.log(error));
        console.log(url);
    }
    }
   
    }
</script>

<style scoped>

</style>