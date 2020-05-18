<template>

    <div>
        <h2>Add model to job</h2>
        <div style="width:100%">
            <form @submit.prevent="checkForm">
                <div class="form-group">
                    <label for="modelId">Model Id</label>
                    <input class="form-control" type="text" v-model="form.modelId" name="modelId" />
                </div>
                <div class="form-group">
                    <label for="jobId">Job Id</label>
                    <input class="form-control" type="text" v-model="form.jobId" name="jobId" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddModel",
        data()
        {
            return {
                form: {
                    modelId: "",
                    jobId: ""
                }
            }
        },
    }
</script>

<style scoped>

</style>