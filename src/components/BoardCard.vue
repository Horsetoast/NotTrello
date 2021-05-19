<template>
  <div class="board-card" :class="{ blank: !board, valid: isValid }">
    <div v-if="!board">
      <input type="text" placeholder="..." v-model="newBoardName" @keyup.enter="createBoard"/>
      <span class="add-icon" v-if="isValid" @click="createBoard">+</span>
    </div>
    <div v-else>
      <p>{{ board.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    board: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      newBoardName: "",
    };
  },
  computed: {
    isValid() {
      // Board names shouldn't be empty strings
      return this.newBoardName.length;
    },
  },
  methods: {
    createBoard() {
      if (this.isValid) {
        this.$emit("createBoard", this.newBoardName);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.board-card {
  background: var(--secondary);
  border-radius: 4px;
  width: 240px;
  height: 60px;
  padding: 0 20px;
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  &.blank {
    opacity: 0.5;
    &:hover {
      opacity: 0.6;
    }
    &.valid {
      opacity: 0.75;
    }
  }
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }
  p, span {
    font-size: var(--text-sm);
    font-weight: bold;
    color: var(--white);
  }
  input {
    box-sizing: border-box;
    background: none;
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    font-size: var(--text-sm);
    font-weight: bold;
    color: var(--white);
    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: var(--white);
      opacity: 1; /* Firefox */
    }
  }
}
</style>