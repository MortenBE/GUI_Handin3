<template>
    <div>
        <h2>Create Model</h2>
        <div class="AddModelForm">
            <label>First name</label>
            <input type="text" placeholder="Enter first name" v-model="firstName"/>
            <label>Last name</label>
            <input type="text" placeholder="'Enter last name" v-model="lastName"/>
            <label>Email</label>
            <input type="text" placeholder="Enter email" v-model="email"/>
            <label>Phone number</label>
            <input type="text" placeholder="Enter Phone number" v-model="phoneNumber"/>
            <button class="btn btn-secondary" @click="CreateModel">Create model</button>
        </div>
     </div>
</template>

<script>
    export default {
        data() {
            model: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: ""
            }         
        },

        methods: {
            createModel() {
                var 
            }

            fetch(http://localhost:8085/api/Models/CreateModel, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }})
                .catch (error => this.setState({
                    console.log(error);
                }))






    //        {
    //            firstName = this.firstName,
    //            lastName = this.lastName,
    //            email = this.email,
    //            phoneNumber = this.phoneNumber
    //            })
    //        }
    //    },
    //}

</script>

<style>

</style>