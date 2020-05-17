<template>

  <div class="Job">
      <h3>
          Customer: {{jobs.customer}}, days: {{jobs.days}}, Job Location: {{jobs.location}}
          <button @click="$emit('del-job', jobs.efJobId)" class="del">
              <!--X-->
              <i class="fa fa-trash"></i>
          </button>
          <!--<i class="fa fa-trash"></i>-->
      </h3>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: ["jobs"]
  }
</script>

<style scoped>
  .Job {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  float: right;
  }
  .del:hover {
  background-color: red;
}
</style>
