<template>
    <div id="app">        
        <h2>Create Model</h2>   
        <div style="width:100%">
            <form @submit.prevent="checkForm">
                <div class="row">
                    <div class="col-5 form-group">
                        <label for="firstName">First name</label>
                        <input class="form-control" v-model="form.firstName" name="firstName" />
                    </div>
                    <div class="col-5 form-group">
                        <label for="lastName">Last name</label>
                        <input class="form-control" v-model="form.lastName" name="lastName" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-10 form-group">
                        <label for="email">Email</label>
                        <input class="form-control" v-model="form.email" name="email" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-10 form-group">
                        <label for="password">Password</label>
                        <input class="form-control" v-model="form.password" name="password" type="password" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-5 form-group">
                        <label for="addressLine1">Address line 1</label>
                        <input class="form-control" v-model="form.addressLine1" name="addressLine1" />
                    </div>
                    <div class="col-5 form-group">
                        <label for="addressLine2">Address line 2</label>
                        <input class="form-control" v-model="form.addressLine2" name="addressLine2" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 form-group">
                        <label for="zip">Zip code</label>
                        <input class="form-control" v-model="form.zip" name="zip" />
                    </div>
                    <div class="col-7 form-group">
                        <label for="city">City</label>
                        <input class="form-control" v-model="form.city" name="city" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-5 form-group">
                        <label for="country">Country</label>
                        <input class="form-control" v-model="form.country" name="country" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-5 form-group">
                        <label for="birthday">Birthday</label>
                        <input class="form-control" type="date" v-model="form.birthday" name="birthday" />
                    </div>
                    <div class="col-5 form-group">
                        <label for="nationality">Nationality</label>
                        <input class="form-control" v-model="form.nationality" name="nationality" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-5 form-group">
                        <label for="height">Height</label>
                        <input class="form-control" v-model.number="form.height" name="height" type="number" />
                    </div>
                    <div class="col-5 form-group">
                        <label for="shoeSize">Shoe size</label>
                        <input class="form-control"
                               v-model.number="form.shoeSize"
                               name="shoeSize"
                               type="number" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-5 form-group">
                        <label for="haircolor">Hair color</label>
                        <input class="form-control" v-model="form.hairColor" name="hairColor" />
                    </div>
                    <div class="col-5 form-group">
                        <label for="eyeColor">Eye Color</label>
                        <input class="form-control" v-model="form.eyeColor" name="eyeColor" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-10 form-group">
                        <label for="comments">Comments</label>
                        <input class="form-control" v-model="form.comments" name="comments" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-5 form-group">
                        <input type="submit" class="button1" value="Create new model" />
                    </div>
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
        firstName: "",
        lastName: "",
        email: "",
        addressLine1: "",
        addressLine2: "",
        zip: "",
        city: "",
        country: "",
        birthday: "",
        nationality: "",
        height: 0,
        shoeSize: 0,
        hairColor: "",
        eyeColor: "",
        comments: "",




      }
      }
  },
          methods: {
    checkForm() {
        let url = "https://localhost:44368/api/models";
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
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 8px;
  margin: 5px;
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