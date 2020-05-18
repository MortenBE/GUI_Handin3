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
                    <label for="date">Date</label>
                    <input class="form-control" type="date" v-model="form.date" name="Date" />
                </div>
                <div class="form-group">
                    <label for="amount">Expense</label>
                    <input class="form-control" type="text" v-model="form.amount" name="amount" />
                </div>
                <div class="form-group">
                    <label for="text">Text</label>
                    <input class="form-control" type="text" v-model="form.text" name="Text" />
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
                    modelId: 1,
                    jobId: 1,
                    amount: 3,
                    date: "",
                    text: "123"
                },
                Modelid: 
                {
                    id: localStorage.getItem("modelId")
                }
            }
        },
         methods: {
     AddToJob() {
      var url =
        "https://localhost:5001/api/expenses/"
      fetch(url, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(this.form),
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

</style>