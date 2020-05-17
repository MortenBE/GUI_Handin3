<template>
    <div>
        <div class="card">
            <JobList />
        </div>
    </div>
</template>

<script>
    import JobList from '../components/JobList'

    export default {
        name: "Model",
        components: {
            JobList
        }
    }
</script>

<style scoped>    
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        margin: 10px;
        transition: 0.3s;
        width: 500px;
        border-radius: 5px;
        text-align:center;
        background-color:white;
    } 
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
</style>


