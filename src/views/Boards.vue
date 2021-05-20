<template>
  <div id="boards-page">
    <h2 class="page-title">Boards</h2>
    <div class="boards-wrapper" v-if="loading" key="loading">
      <BoardCard loading v-for="i in 3" :key="i" />
    </div>
    <div class="boards-wrapper" v-else-if="boards" key="loaded">
      <BoardCard v-for="board in boards" :board="board" :key="board.id" />
      <BoardCard @createBoard="createBoard" />
    </div>
  </div>
</template>

<script>
import BoardCard from "@/components/BoardCard";
import { getBoard, createBoard } from "@/api/index";

export default {
  components: {
    BoardCard,
  },
  data() {
    return {
      loading: true,
      boards: null,
    };
  },
  created() {
    this.loadBoards();
  },
  methods: {
    createBoard(name) {
      const board = createBoard(name);
      // Update local state
      this.boards.push(board);
    },
    async loadBoards() {
      this.loading = true;
      this.boards = await getBoard();
      this.loading = false;
    },
  },
};
</script>

<style scoped lang="scss">
#boards-page {
  max-width: var(--lg);
  margin: 100px auto;
  padding: 0 60px;
  .boards-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 40px -20px;
    & > div {
      margin: 0 20px 40px;
    }
  }
}
</style>