<template>
  <div>
      <div v-for="job in jobs" :key="job.id">
          <Job v-bind:jobs="job" v-on:del-job="$emit('del-job', job.id)"/>
      </div>
  </div> 
  
</template>

<script>
import Job from './Job.vue';

export default {
  name: "Jobs",
   components: {
     Job
     },
  props: ["jobs"]
}
</script>

<style scoped>
</style>