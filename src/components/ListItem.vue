<template>
  <div class="list-item">
    <p v-if="item">
      {{ item.name }}
    </p>
    <input
      v-else
      type="text"
      placeholder="..."
      v-model="newItemName"
      ref="input"
      @keyup.enter="createItem"
      @blur="clearName"
    />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      newItemName: "",
    };
  },
  computed: {
    isValid() {
      // Item names shouldn't be empty strings
      return this.newItemName.length;
    },
  },
  methods: {
    createItem() {
      if (this.isValid) {
        this.$emit("createItem", this.newItemName);
        this.newItemName = "";
        this.$refs["input"].blur();
      }
    },
    clearName() {
      this.newItemName = "";
    },
  },
};
</script>

<style scoped lang="scss">
.list-item {
  display: block;
  margin-top: 15px;
  p {
    padding: 10px;
    background: var(--bg-color);
    color: var(--font-color);
    font-size: var(--text-sm);
    border-radius: 2px;
  }
  input {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: none;
    width: 100%;
    border: none;
    outline: none;
    font-size: var(--text-sm);
    color: var(--font-color);
    padding: 9px 10px;
    border-radius: 2px;
    background: var(--color-primary-darker);
    &::placeholder {
      color: var(--font-color);
      opacity: 1;
    }
  }
}
</style>