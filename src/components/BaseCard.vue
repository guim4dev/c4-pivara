<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"BaseCard",
  props:{
    location:String
  }
}
</script>
<style scoped>
  .card {
    border: 1px solid var(--color-gray-30);
    background: white;
    box-shadow: 0px 1px 6px rgba(46, 142, 255, 0.1);
    border-radius: 12px;
    padding: 15px 15px 15px 20px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    min-width: 328px;
    width: 100%;
    cursor: pointer;
  }
</style>