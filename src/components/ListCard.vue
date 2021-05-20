<template>
  <div
    class="list-card"
    :class="{ blank: !list, valid: isValid, 'loading pulsating': loading }"
  >
    <div v-if="!loading && list">
      <p>{{ list.name }}</p>
      <div class="list-items">
        <ListItem v-for="item in list.items" :item="item" :key="item.id"/>
        <ListItem @createItem="createItem"/>
      </div>
    </div>
    <div v-else>
      <template v-if="!list && !loading">
        <input
          type="text"
          placeholder="..."
          v-model="newListName"
          ref="input"
          @keyup.enter="createList"
          @blur="clearName"
        />
        <span class="add-icon" v-if="isValid" @click="createList">+</span>
      </template>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'

export default {
  components: {
    ListItem
  },
  props: {
    list: {
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
      newListName: "",
    };
  },
  computed: {
    isValid() {
      // List names shouldn't be empty strings
      return this.newListName.length;
    },
  },
  methods: {
    createList() {
      if (this.isValid) {
        this.$emit("createList", this.newListName);
        this.newListName = "";
        this.$refs["input"].blur();
      }
    },
    createItem(name) {
      const listId = this.list.id
      this.$emit('createItem', listId, name)
    },
    clearName() {
      this.newListName = "";
    },
  },
};
</script>

<style scoped lang="scss">
.list-card {
  background: var(--secondary);
  border-radius: 4px;
  width: 240px;
  display: flex;
  box-sizing: border-box;
  &.blank {
    opacity: 0.5;
    &:hover {
      opacity: 0.6;
    }
    &.valid {
      opacity: 0.75;
    }
    & > div {
      display: flex;
    }
  }
  &.loading {
    background: var(--gray-100);
  }
  &:not(.loading) {
    box-shadow: var(--shadow-lg);
  }
  & > div {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
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