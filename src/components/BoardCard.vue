<template>
  <div
    class="board-card"
    :class="{ blank: !board, valid: isValid, 'loading pulsating': loading }"
  >
    <router-link v-if="!loading && board" :to="`/board/${board.id}`" tag="div">
      <p>{{ board.name }}</p>
    </router-link>
    <div v-else>
      <template v-if="!board && !loading">
        <input
          type="text"
          placeholder="..."
          v-model="newBoardName"
          ref="input"
          @keyup.enter="createBoard"
          @blur="clearName"
        />
        <span class="add-icon" v-if="isValid" @click="createBoard">+</span>
      </template>
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
    loading: {
      type: Boolean,
      default: false,
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
        this.newBoardName = "";
        this.$refs["input"].blur();
      }
    },
    clearName() {
      this.newBoardName = "";
    },
  },
};
</script>

<style scoped lang="scss">
.board-card {
  background: var(--secondary);
  border-radius: 4px;
  width: 240px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  &.blank {
    opacity: 0.5;
    &:hover {
      opacity: 0.6;
    }
    &.valid {
      opacity: 0.75;
    }
  }
  &:not(.blank):not(.loading):hover {
    background: var(--secondary-hover);
  }
  &.loading {
    background: var(--gray-100);
  }
  &:not(.loading) {
    box-shadow: var(--shadow-lg);
    cursor: pointer;
  }
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 60px;
  }
  .add-icon {
    font-size: var(--text-sm);
    font-weight: bold;
    color: var(--white);
  }
  input,
  p {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: none;
    width: 100%;
    height: 16px;
    border: none;
    outline: none;
    font-size: var(--text-sm);
    font-weight: bold;
    color: var(--white);
    &::placeholder {
      color: var(--white);
      opacity: 1;
    }
  }
}
</style>