<template>

  <div class="Job">
      <h1>
          {{jobs.Name}}
          <button @click="$emit('del-job', jobs.id)" class="del">
              X
          </button>
          <!--<i class="fa fa-trash"></i>-->
      </h1>
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
