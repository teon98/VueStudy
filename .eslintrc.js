module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  plugins: ['vue', '@typescript-eslint'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  // rules: { //Product에 배포되어야 하지 않을 코드들 사전 방지 규칙
  //   "no-console": "warn",//console.log 사용 시 경고
  //   "no-unused-vars": "warn",//할당되지 않은 변수 있을 시 경고
  // },
};
