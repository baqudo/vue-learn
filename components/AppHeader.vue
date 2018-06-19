<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <nuxt-link class="header__logo" to="/">Classic</nuxt-link>
        <div class="header__nav">
          <nav class="nav">
            <nuxt-link class="nav__link" to="/">Home</nuxt-link>
            <nuxt-link class="nav__link" to="news">News</nuxt-link>
            <nuxt-link class="nav__link" to="about">About</nuxt-link>
            <nuxt-link class="nav__link" to="todo">TODO</nuxt-link>
            <nuxt-link class="nav__link" to="tutorials">Tutorials</nuxt-link>
            <nuxt-link class="nav__link" to="wordPress">WordPress</nuxt-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style lang="scss">
.header {
  background-color: #000000;
  padding: 24px 0;
}
.header__inner {
  display: flex;
  justify-content: space-between;
  height: 100%;
  -ms-align-items: center;
  align-items: center;
}
.header__logo {
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;

}

.nav {
  display: flex;
}
.nav__link {
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  color: #ccc;
}
.nav__link.nuxt-link-exact-active {
  color: #fff;
}
.nav__link + .nav__link {
  margin-left: 30px;
}
</style>
