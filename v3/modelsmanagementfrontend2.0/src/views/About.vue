<template>
    <div class="manager">
        <h1>Manager page</h1>
        <Jobs/>
        <h2>About:</h2>
        <p></p>
        <ModelsList />
    </div>
</template>

<script>
    // @ is an alias to /src
    import ModelsList from '@/components/Jobs.vue'

    export default {
        name: 'Manager',
        components: {
            ModelsList
        }
    }
</script>




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
