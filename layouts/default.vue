<template>
  <div class="layout">
    <AppHeader/>
    <nuxt/>
    <AppFooter/>
  </div>
</template>

<script>
  import AppHeader from '~/components/AppHeader';
  import AppFooter from '~/components/AppFooter';
  export default {
    name: 'default',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 70px auto 50px;
  position: relative;
  overflow: hidden;
}
.emptypage-enter-active, .emptypage-leave-active {
  transition: all .3s ease-in-out;
}
.emptypage-enter, .emptypage-leave-to {
  opacity: 0;
}
.emptypage-enter {
  transform: translate(0, -100%);
}
.emptypage-leave-to {
  transform: translate(0, -100%);
}
.emptypage-enter-to, .emptypage-leave {
  opacity: 1;
  transform: translate(0, 0);
}

.fly-enter-active, .fly-leave-active {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: 50% 50% -300px;
  transform-origin: 50% 50% -300px;
  transition: 0.8s ease;
}
.fly-enter, .fly-leave-to {
  opacity: 0;
  -webkit-transform: rotateX(-180deg);
  transform: rotateX(-180deg);
}
.fly-enter-to, .fly-leave {
  -webkit-transform: rotateX(0deg);
  transform: rotateX(0deg);
  opacity: 1;
}

.page-papers {
  display: flex;
  flex-flow: row wrap;
}
.page-paper {
  min-height: 300px;
  min-width: 200px;
  border: 2px solid #aaa;
  background-color: lightblue;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
}
</style>
