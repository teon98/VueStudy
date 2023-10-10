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
    <h2>성별</h2>
    <input type="radio" id="male" value="male" v-model="gender" />
    <label for="male">남</label>
    <br />
    <input type="radio" id="female" value="female" v-model="gender" />
    <label for="female">여</label>
    <br />
    <span>당신의 성별을 알려주세요: {{ gender }}</span>
    <h2>선호 장르</h2>
    <select v-model="category">
      <option disabled value>선택해주세요</option>
      <option>로맨스</option>
      <option>호러</option>
      <option>스릴러</option>
    </select>
    <span>선택: {{ category }}</span>
  </div>
  <input v-model="firstname" />
  <input v-model="lastname" />

  <h2>{{ fullname }}</h2>
  <span></span>
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
      gender: '',
      category: '',
      firstname: '',
      lastname: '',
      fullname: '',
    };
  },
  watch: {
    firstname(val) {
      this.fullname = `${val} ${this.lastname}`;
    },
    lastname(val) {
      this.fullname = `${this.firstname} ${val}`;
    },
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
