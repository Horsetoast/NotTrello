<template>
  <div id="header">
    <h1><router-link to="/">NotTrello™</router-link></h1>
    <a @click="toggleTheme" href="#" class="theme-toggle"
      ><NightModeIcon width="20" height="20"
    /></a>
  </div>
</template>

<script>
import NightModeIcon from "@/assets/icons/night_mode.svg";

export default {
  components: {
    NightModeIcon,
  },
  data() {
    return {
      theme: "default",
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "default" ? "dark" : "default";
      document.documentElement.setAttribute("data-theme", this.theme);
    },
  },
};
</script>

<style scoped lang="scss">
#header {
  height: 80px;
  background: var(--bg-color);
  color: var(--font-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-shadow: var(--shadow-sm);
  border-bottom: 4px solid var(--color-primary);
  h1 {
    font-weight: bold;
    font-size: var(--text-md);
    a {
      color: var(--font-color);
      text-decoration: none;
    }
  }
  .theme-toggle {
    display: block;
    background: var(--color-gray-200);
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    svg {
      fill: var(--bg-color);
      position: relative;
      top: 1px;
    }
    &:hover {
      background: var(--font-color);
    }
  }
}
</style>