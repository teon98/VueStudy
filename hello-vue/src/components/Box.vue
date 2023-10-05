<template>
  <div>Header</div>
  <div v-bind:style="{color: #ebebeb}"></div>
  <div></div>
</template>

<script>
export default {
  data() {
    // Box 의 state
    return {
      width: 40, // 넓이
      height: 80, // 높이
    };
  },
};
</script>

<style scoped></style>
