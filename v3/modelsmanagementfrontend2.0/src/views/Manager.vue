<template>
    <div class="container manager">
        <div class="card">
            <ModelList />
        </div>
        <div class="card">
            <CreateManager />
        </div>
        <!--<div class="card">
        <JobList />
    </div>-->
    </div>
</template>

<script>
    import ModelList from '@/components/ModelList.vue'
    import CreateManager from '@/components/CreateManager.vue'
    //import JobList from '@/components/JobList'


    export default {
        name: 'Manager',
        components: {
            ModelList,
            CreateManager
            //JobList              

        }
    }
</script>

<style>

    /*#center {
        display: flex;
        align-items: center;
        justify-content: center;
    }*/

    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        margin: 10px;
        transition: 0.3s;
        width: 500px;
        border-radius: 5px;
        text-align:center;
    } 
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .manager {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>




<!--<template>
    <div id="app">
        <Create />
        <Jobs v-bind:jobs="jobs" v-on:del-job="deleteJob" />
        <button v-on:click="getJobs()">Click me</button>
    </div>
</template>

<script>
    import Jobs from '../components/Jobs.vue';
    import Create from '../components/CreateJob.vue';
    import axios from 'axios';



    export default {
        name: 'Jobsliste',
        components: {
            Jobs,
            Create
        },
        data() {
            return {
                jobs: []
            }
        },
        methods: {
            deleteJob(id) {
                this.jobs = this.jobs.filter(job => job.id !== id);
            },
            getJobs() {
                axios.get('https://localhost:5001/api/jobs/')
                    .then(res => this.jobs = res.data)
                    .catch(err => console.log(err));
                console.log(this.jobs)
            }
        }
    }
</script>-->
