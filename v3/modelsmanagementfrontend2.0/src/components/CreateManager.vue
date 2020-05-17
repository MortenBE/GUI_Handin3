<template>
    <div>
        <h2>Create Manager component</h2>
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
                <input type="submit" value="Create new manager" class="btn btn-success" />
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
                let url = "https://localhost:44368/api/Managers";
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

</style>
