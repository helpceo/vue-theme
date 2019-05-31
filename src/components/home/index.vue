<script>

export default {
  name: 'home',
  data (){
    return {
      name:'按钮'
    }
  },
  created(){
    console.log(this.$http)
  },
  methods: {
    changColor1(theme){
      window.document.documentElement.setAttribute('data-theme',theme);
    },
    changColor2(theme){
      window.document.documentElement.setAttribute('data-theme',theme);
    }
  },
};
</script>
<template src="./index.html"></template>
<style src="./index.scss" scoped lang="scss"></style>
