<template>
    <div>
        <h2>List of Expenses</h2>
        <div v-for="expense in expenses" :key="expense.EfJobId">          
            <p>Expense Amount: {{expense.amount}}   </p>   
            <p>   Text for expense: {{expense.text}}</p>  
            <p> ---------------------------------- </p>
        </div>
    </div>
</template>

<script>
var test;
    export default {
        name: "JobList",
        data() {
            return {
                expenses: []
            }
        },
        props: [test],
        methods: {
    
    getExpenses()   {
    var url = "https://localhost:5001/api/expenses/"
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
        this.expenses = data;
      })
      .catch(error => () => console.log(error));
      console.log(this.expenses);
    }
    },
      mounted() {
      this.getExpenses();
    }
    }
    
    
</script>

<style scoped>

</style>