<template>
  <div>
    Menu
    <Box color="blue" />
    <Box color="purple" />
    <Box color="blue" />
    <Box color="green" />
    <Box color="blue" />
    <Box color="purple" />
    <Box />
  </div>
</template>

<script>
import Box from './Box.vue';

export default {
  components: {
    Box,
  },
};
</script>

<style scoped>
div {
  flex: 1;
}
</style>
