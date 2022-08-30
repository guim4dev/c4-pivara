<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
  .card {
    border: 1px solid var(--color-gray-30);
    background: white;
    box-shadow: 0px 1px 6px rgba(46, 142, 255, 0.1);
    border-radius: 4px;
    padding: 24px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    min-width: 328px;
    width: 100%;
  }
  @media (min-width: 750px){
    .card{
      width: 750px;
    }
  }
</style>