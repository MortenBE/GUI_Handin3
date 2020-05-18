<template>
    <div>
        <h2>Create Manager</h2>
        <form @submit.prevent="createManager">
            <div class="form-group">
                <label for="firstName">First name</label>
                <input class="form-control" v-model="form.firstName" name="firstName" />
            </div>
            <div class="form-group">
                <label for="lastName">Last name</label>
                <input class="form-control" v-model="form.lastName" name="lastName" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input class="form-control" v-model="form.email" name="email" />
            </div>
            <div class="form-group">
                <label for="password">password</label>
                <input class="form-control" v-model="form.password" name="password" />
            </div>
            <div class="formgroup">
                <input type="submit" class="button1" value="Create new manager" />
            </div>
        </form>

    </div>
</template>

<script>
    export default {
        name: "CreateManager",
        data() {
            return {
                form: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                }
            }

        
        },
        methods: {
            createManager() {
                let url = "https://localhost:5001/api/Managers";
                console.log(url);
                fetch(url, {
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify(this.form),
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        "Content-Type": "application/json"
                    }
                }).catch(error => () => console.log(error));
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
        text-align: center; 
        text-decoration: none; 
        display: inline-block; 
        font-size: 14px; 
        border-radius: 8px; 
        margin: 5px;
    }

</style>
