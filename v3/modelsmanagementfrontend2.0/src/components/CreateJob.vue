<template>
    <div id="app">        
        <h1>Add new Job</h1>   
        
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
        <input type="submit" value="Create new job" class="btn btn-success" />
      </div>
    </form>
    
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
        let url = "https://localhost:44368/api/jobs";
        fetch(url, {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(this.form),
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json"
          }
        })
          // eslint-disable-next-line no-console
          .catch(error => () => console.log(error));
          console.log("posting");
    //   }
    //   this.errors = [];
    //   if (!this.form.customer) {
    //     this.errors.push({ message: "No customer listed" });
    //   }
    //   if (!this.form.startDate) {
    //     this.errors.push({ message: "No start date listed" });
    //   }
    //   if (!this.form.days) {
    //     this.errors.push({ message: "Number of days of work not set" });
    //   }
    //   if (Number(this.form.days) <= 0) {
    //     this.errors.push({
    //       message: "Number of days of work was not listed or invalid number"
    //     });
    //   }
    //   if (!this.form.location) {
    //     this.errors.push({ message: "No location listed" });
    //   }
    //   else console.log(this.form);
    // }
 } } 
};

  

</script>

<style scoped>
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