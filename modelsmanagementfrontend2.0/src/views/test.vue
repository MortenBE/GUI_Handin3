<template>
    <div>
    <ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
    </ul>    
    </div>
</template>


<script>
export default {
    example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
}
</script>