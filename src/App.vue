<template>
  <div id="app">
    <KanbanView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KanbanView from './components/KanbanView.vue';

export default defineComponent({
  name: 'App',
  components: {
    KanbanView,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0;
}
</style>
