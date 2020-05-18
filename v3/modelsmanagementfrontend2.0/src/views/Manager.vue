<template>
    <div class="container">
        <div class="manager">
                    <div class="card">
            <ModelList />
        </div>
            <div class="card" style="width=1000px">
                <JobList />
            </div>
            <div class="card" style="min-height:300px">
                <CreateJob />
            </div>
        </div>
        <div class="manager">
            <div class="card" style="min-height:500px">
                <CreateModel />
            </div>
            <div class="card" style="min-height:500px">
                <DeleteModel />
            </div>
        </div>
        <div class="manager">
            <div class="card">
                <CreateManager />
            </div>
            <div class="card">
                <AddModel />
            </div>
            <div class="card">
                <Expenses />
            </div>
        </div>
    </div>
</template>

<script>
    import ModelList from '@/components/ModelList.vue'
    import JobList from '../components/JobList'
    import CreateJob from '../components/CreateJob'
    import CreateManager from '@/components/CreateManager.vue'
    import CreateModel from '@/components/CreateModel.vue'
    import AddModel from '@/components/AddModel.vue'
    import DeleteModel from '@/components/DeleteModel.vue'
    import Expenses from '../components/ExpensesList'
    

    export default {
        name: 'Manager',
        components: {
            ModelList,
            JobList,
            CreateJob,
            CreateManager,
            CreateModel,
            AddModel,
            DeleteModel,
            Expenses
        }
    }
</script>

<style>

    /*#center {
        display: flex;
        align-items: center;
        justify-content: center;
    }*/
    .manager
    {        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        margin: 10px;
        transition: 0.3s;
        width: 1000px;
        border-radius: 5px;
        text-align:center;       
        background-color:white;
    } 
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
</style>
