<!-- .vue 주석-->
<template>
  <!-- template 주석 -->
  <!-- html 담당-->
  <div>
    <Header />
    <div class="wrap">
      <Menu />
      <Content />
    </div>
  </div>
  <Box color="blue" />
  <Box color="purple" />
  <Box color="blue" />
  <Box color="green" />
  <Box color="blue" />
  <Box color="purple" />
  <Box />
</template>

<script>
//JS 담당
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Content from './components/Content.vue';
import Box from './components/Box.vue';

export default {
  name: 'app',
  components: {
    //가져온 component 들 등록하기
    Header,
    Menu,
    Content,
    Box,
  },
};
</script>

<style scoped>
/* CSS 담당 */
h1 {
  color: #03a9f4;
}
.wrap {
  display: flex;
}
</style>
