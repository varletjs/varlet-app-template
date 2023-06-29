<template>
  <mobile-detector>
    <router-view />
  </mobile-detector>
</template>

<style lang="less">
* {
  box-sizing: border-box;
}

body {
  transition: background-color 0.25s, color 0.25s;
  color: var(--color-text);
  background-color: var(--color-body);
  overflow: hidden;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
</style>
