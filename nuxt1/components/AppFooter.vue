<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__nav">
          <nav class="nav">
            <nuxt-link class="nav__link" to="/">Home</nuxt-link>
            <nuxt-link class="nav__link" to="about">About</nuxt-link>
            <nuxt-link class="nav__link" to="archive">Archive</nuxt-link>
            <nuxt-link class="nav__link" to="contact">Contact</nuxt-link>
          </nav>
        </div> 
        <div class="footer__social">
          
        </div>
        <div class="footer__copy">© Copyright 2013 DesignerFirst.com</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style>
.footer {
  padding: 15px 0;
  color: #555;
  font-size: 14px;
}
.footer__inner {
  display: flex;
  justify-content: space-between;
  -ms-align-items: center;
  align-items: center;
  height: 100%;
}

.footer__copy {
  color: #555;
  font-size: 14px;
}

.footer .nav__link {
    color: #555;
};

</style>