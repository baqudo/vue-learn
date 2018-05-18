<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__nav">
          <nav class="nav">
            <router-link class="nav__link" to="/">Home</router-link>
            <router-link class="nav__link" to="About">About</router-link>
            <router-link class="nav__link" to="Archive">Archive</router-link>
            <router-link class="nav__link" to="Contact">Contact</router-link>
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