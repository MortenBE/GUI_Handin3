<template>
    <div class="manager">
        <h2>Manager page</h2>
        <div class="card">
            <ModelList />     
        </div>
        <div class="card">
            <JobList />
        </div>
        <div class="card">
            <CreateJob />
        </div>
    </div>
</template>

<script>
    import ModelList from '@/components/ModelList.vue'
    import JobList from '../components/JobList'
    import CreateJob from '../components/CreateJob'

    export default {
        name: 'Manager',
        components: {
            ModelList,
            JobList,
            CreateJob
           
            

        }
    }
</script>

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 500px;
        border-radius: 5px;
        text-align:center;
    } 
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
</style>