<template>
  <div id="boards-page">
    <h2 class="page-title">Boards</h2>
    <div id="boards-wrapper">
      <BoardCard v-for="board in boards" :board="board" :key="board.id" />
      <BoardCard @createBoard="createBoard" />
    </div>
  </div>
</template>

<script>
import BoardCard from "@/components/BoardCard";

export default {
  components: {
    BoardCard,
  },
  props: {
    boards: {
      type: Array,
      default: null,
    },
  },
  methods: {
    createBoard(name) {
      console.log(name)
    }
  }
};
</script>

<style scoped lang="scss">
#boards-page {
  max-width: var(--lg);
  margin: 100px auto;
  padding: 0 60px;
}
#boards-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 40px -20px;
  & > div {
    margin: 0 20px 40px;
  }
}
</style>