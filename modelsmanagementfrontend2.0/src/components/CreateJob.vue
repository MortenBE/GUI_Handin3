<template>
    <div id="app">        
        <!-- <input type="text">
        <input type="text">
        <button class="add">add</button> -->        
    <form action="">
        <label for="fname">Name:</label><br>
        <input type="text" id="Name" name="Name" value="Name"><br>
        <label for="lname">Id:</label><br>
        <input type="text" id="Id" name="Id" value="Id"><br><br>
        <input type="submit" value="Add" class=but>        
    </form> 
    </div>
</template>

<script>
export default {
  name: "CreateJob",
  data()
  {
      return{
          Name: '',
          id: ''
      }
  },
  methods:
  {
      add() {
          const NewJob = {
              id: this.id,
              Name: this.Name
          }
          this.$emit('add-job',NewJob);

          this.Name = '';
      }
    }
  }
  

</script>

<style>
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