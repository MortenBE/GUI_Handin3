<template>
    <div>
        <h2>All models</h2>
        <div v-if="isLoading">
            <p>Loading content..</p>
        </div>
        <div v-for="model in models" :key="model.efModelId">
            <p>Model Email: {{model.email}} </p>
            <p>Model Name: {{model.firstName}} {{model.lastName}} 
            <p>Model PhoneNo: {{model.phoneNo}}
            <p>ModelId: {{model.efModelId}} </p> 
            <b>---------------------------------------------</b>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModelsList',
        data() {
            return {
                isLoading: true,
                message: '',
                models: []
            }
        },
        methods: {
            GetModels() {
                fetch('https://localhost:5001/api/Models', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => {
                        if (res.status == 200) {
                            return res.json();
                        }
                    })
                    .then(responseJson => {
                        this.models = responseJson;
                        this.isLoading = false;
                    })
                    .catch(error => {
                        this.isLoading = false;
                        this.message = 'Something bad happened ' + error;
                    });
            }
        },
        mounted() {
            this.GetModels();
        }
    }
</script>


<style scoped>

</style>


