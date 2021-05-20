<template>
  <div id="board-detail-page">
    <div class="board-detail-header">
      <span v-if="loading" class="page-title loading pulsating"></span>
      <h2 class="page-title" v-else-if="board">{{ board.name }}</h2>
    </div>
    <div class="lists-wrapper" v-if="loading" key="loading">
      <ListCard loading v-for="i in 3" :key="i" />
    </div>
    <div class="lists-wrapper" v-else-if="board" key="loaded">
      <ListCard
        v-for="list in board.lists"
        :list="list"
        :key="list.id"
        @createItem="createItem"
      />
      <ListCard @createList="createList" />
    </div>
  </div>
</template>

<script>
import ListCard from "@/components/ListCard";
import { getBoard, createList, createItem } from "@/api/index";

export default {
  components: {
    ListCard,
  },
  data() {
    return {
      loading: true,
      board: null,
    };
  },
  watch: {
    "$route.params.id": {
      immediate: true,
      handler: function (next, prev) {
        if (next && next !== prev) {
          this.loadBoard(next);
        }
      },
    },
  },
  methods: {
    async loadBoard(id) {
      this.loading = true;
      this.board = await getBoard(id);
      this.loading = false;
    },
    createList(name) {
      const boardId = this.board.id;
      const list = createList(boardId, name);
      // Update local state
      if (!this.board.lists) {
        this.board = { ...this.board, lists: [] };
      }
      this.board.lists.push(list);
    },
    createItem(listId, name) {
      const boardId = this.board.id;
      const item = createItem(boardId, listId, name);
      // Update local state
      this.board.lists = this.board.lists.map((list) => {
        if (list.id === listId) {
          if (!list.items) {
            list.items = [];
          }
          list.items.push(item);
        }
        return list;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#board-detail-page {
  max-width: var(--lg);
  margin: 100px auto;
  padding: 0 60px;
  .lists-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 40px -20px;
    & > div {
      margin: 0 20px 40px;
    }
  }
}
</style>