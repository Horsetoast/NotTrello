<template>
  <div id="header">
    <h1>NotTrello™</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
#header {
  height: 80px;
  background: var(--white);
  color: var(--gray-300);
  display: flex;
  align-items: center;
  padding: 0 40px;
  box-shadow: var(--shadow-sm);
  border-bottom: 4px solid var(--secondary);
  h1 {
    font-weight: bold;
    font-size: var(--text-md);
  }
}
</style>