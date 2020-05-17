<template>
    <div class="container manager">
        <div class="card">
            <ModelList />     
        </div>
        <div class="card">
            <JobList />
        </div>
        <div class="card">
            <CreateJob />
        </div>
                <div class="card">
            <CreateModel />
        </div>
    </div>
</template>

<script>
    import ModelList from '@/components/ModelList.vue'
    import JobList from '../components/JobList'
    import CreateJob from '../components/CreateJob'
    import CreateModel from '../components/CreateModel'

    export default {
        name: 'Manager',
        components: {
            ModelList,
            JobList,
            CreateJob,
            CreateModel
           
            

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
</style>
