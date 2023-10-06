<!-- .vue 주석-->
<template>
  <!-- template 주석 -->
  <!-- html 담당-->
  <div>
    <Header />
    <h3>{{ title }}</h3>
    <input v-model="title" />
    <input
      type="checkbox"
      id="프롬스타"
      value="프롬스타"
      v-model="checkedWebtoons"
    />
    <label for="프롬스타">프롬스타</label>
    <input
      type="checkbox"
      id="햄스터와그녀"
      value="햄스터와 그녀"
      v-model="checkedWebtoons"
    />
    <label for="햄스터와그녀">햄스터와 그녀</label>
    <input
      type="checkbox"
      id="위대한로맨스"
      value="위대한 로맨스"
      v-model="checkedWebtoons"
    />
    <label for="위대한로맨스">위대한 로맨스</label>
    <input type="checkbox" id="아귀" value="아귀" v-model="checkedWebtoons" />
    <label for="아귀">아귀</label>
    <br />
    <span>찜한 웹툰: {{ checkedWebtoons }}</span>
    <div class="wrap">
      <Menu />
      <Content />
    </div>
  </div>
</template>

<script>
//JS 담당
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Content from './components/Content.vue';

export default {
  name: 'app',
  components: {
    //가져온 component 들 등록하기
    Header,
    Menu,
    Content,
  },
  data() {
    return {
      title: '',
      checkedWebtoons: [],
    };
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
