<template>
    <div id="app">        
        <h2>Create Job</h2>   

        <div style="width:100%">
            <form @submit.prevent="checkForm">
                <div class="form-group">
                    <label for="customer">Customer</label>
                    <input class="form-control" v-model="form.customer" name="customer" />
                </div>
                <div class="form-group">
                    <label for="startDate">Start date</label>
                    <input class="form-control" type="date" v-model="form.startDate" name="startDate" />
                </div>
                <div class="form-group">
                    <label for="days">Days of work</label>
                    <input class="form-control" v-model.number="form.days" name="days" type="number" />
                </div>
                <div class="form-group">
                    <label for="location">Location</label>
                    <input class="form-control" v-model="form.location" name="location" />
                </div>
                <div class="form-group">
                    <label for="comments">Comments</label>
                    <input class="form-control" v-model="form.comments" name="comments" />
                </div>
                <div class="formgroup">
                    <input type="submit" value="Create new job" class="button1"/>
                </div>
            </form>
        </div>
        
    
    
    </div>
</template>

<script>
export default {
  name: "CreateJob",
  data()
  {
      return{
    form: {
        customer: "",
        days: 0,
        startDate: "",
        location: "",
        comments: ""
      }
      }
  },
          methods: {
    checkForm() {
        let url = "https://localhost:5001/api/jobs";
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
          console.log("posting");
 } } 
};

  

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