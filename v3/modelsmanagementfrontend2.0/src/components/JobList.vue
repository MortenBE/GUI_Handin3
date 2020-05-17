<template>
    <div>
        <h1>This is the joblist</h1>

        <!--<div v-if="isLoading">
        <p>Loading content..</p>
            </div>-->
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "JobList",
        data() {
            return {
                //isLoading: true,
                //message: '',
                jobs: []
            }
        },
        methods: {
            getJobs() {
                axios.get('https://localhost:44368/api/Jobs')
                    .then(res => this.jobs = res.data)
                    .catch(err => console.log(err));
                console.log(this.jobs)
            }
        }

               


        //methods: {
        //    showJobList() {
        //        fetch('https://localhost:44368/api/Jobs', {
        //            method: 'Get',
        //            credentials: 'include',
        //            headers: {
        //                'Authorization': 'Bearer ' + localStorage.getItem("token"),
        //                'Content-Type': 'application/json'
        //            }
        //        }).then(res => {
        //            if (res.status == 200) {
        //                return res.json();
        //            }
        //        })
        //        .then(responseJson => {
        //            this.jobs = responseJson; //JSON.parse(responseJson); //ellers responseJson
        //            this.isLoading = false;
        //        }).catch(error => {
        //            this.isLoading = false;
        //            this.message = 'Somethng bad happened ' + error;
        //        });                  
        //    }
        //}
    }
</script>

<style scoped>

</style>