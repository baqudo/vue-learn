<template>
  <div class="home">

    <div class="container">
      <div class="search">
        <input class="search__field" v-model="search" placeholder="Search...">
      </div>

      <app-post v-for="post in filterPosts(search)" :post="post" :key="post.id" />

    </div>

  </div>
</template>

<script>
import {TimelineMax} from 'gsap';
import AppPost from '~/components/AppPost'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo,
    AppPost
  },
  transition: {
    name: 'page',
    mode: 'out-in',
    css: false,
    enter: function(el, done) {
      let tl = new TimelineMax({onComplete: done});
      tl.from(el, 0.3, {x: '-100%', opacity: 0});
    },
    leave: function(el, done) {
      let tl = new TimelineMax({onComplete: done});
      tl.to(el, 0.2, {x: '100%', opacity: 0});
    }
  },
  data () {
    return {
      search: '',
      msg: 'Privet coderiver',
      posts: [
        {
          id: 1,
          img: 'https://picsum.photos/300/300?image=56',
          img: '/bg1.jpg',
          title: 'Our Favourite Task Management App!',
          date: 'Posted on March 28, 2013',
          descr: '6Wunderkinder’s flagship product, Wunderlist, has been a massive hit since its inception. Arguably one of the best to manage your tasks in your business and personal life. What makes it different from any other app? Simplicity. You don’t need to fiddle around with so many unnecessary features like you would with traditional to-do apps. Soon as you open the app, Wunderlist dives right into your tasks and you can get to work.',
          more: '6Wunderkinder’s flagship product, Wunderlist, has been a massive hit since its inception. Arguably one of the best to manage your tasks in your business and personal life. What makes it different from any other app? Simplicity. You don’t need to fiddle around with so many unnecessary features like you would with traditional to-do apps. Soon as you open the app, Wunderlist dives right into your tasks and you can get to work.'
        },
        {
          id: 2,
          img: 'https://picsum.photos/300/300?image=34',
          // img: 'bg2.jpg',
          title: 'Year in Review: Our Favourite Apps from 2012 ',
          date: 'Posted on March 3, 2013',
          descr: 'The iPad mini is the newly introduced member of the “i” family. Pixeden has done a phenomenal job of replicating iPad Mini into a vector form and has made it freely available for everyone to use. A second version of the iPhone 5 mockup template released by Pixeden, which is the couterpart to the originally released black version. This template also includes high quality background floor textures.',
          more: 'The iPad mini is the newly introduced member of the “i” family. Pixeden has done a phenomenal job of replicating iPad Mini into a vector form and has made it freely available for everyone to use. A second version of the iPhone 5 mockup template released by Pixeden, which is the couterpart to the originally released black version. This template also includes high quality background floor textures.'
        },
        {
          id: 3,
          img: 'https://picsum.photos/300/300?image=16',
          // img: 'bg2.jpg',
          title: 'Marketing Tips & Tricks From the Top Brands',
          date: 'Posted on December 8, 2013 ',
          descr: 'Fully scalable 3/4 view of iPhone 5 is available for download from Pixeden. This PSD template includes highly detailed mockup of the white and black iPhone 5. A perfect replica of the newly introduced Macbook Pro with Retina Display. Includes layered PSD file with option to scale to any preferred size. iPad 2 by Pixeden is a fully scalable vector template with smart layers. It comes with 3 detailed views of both black and white iPad 2.',
          more: 'Fully scalable 3/4 view of iPhone 5 is available for download from Pixeden. This PSD template includes highly detailed mockup of the white and black iPhone 5. A perfect replica of the newly introduced Macbook Pro with Retina Display. Includes layered PSD file with option to scale to any preferred size. iPad 2 by Pixeden is a fully scalable vector template with smart layers. It comes with 3 detailed views of both black and white iPad 2.'
        },
      ],
    }
  },
  methods: {
    filterPosts: function (value) {
      return this.posts.filter((post) => {
        return value.length > 0 ? post.title.toLowerCase().indexOf(value.toLowerCase()) !== -1 : true
      })
    },
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5,
h6, p, blockquote, pre,a, abbr, acronym, address, big,
cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small,
strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt,
dd, ol, ul, li,fieldset, form, label, legend,table, caption,
tbody, tfoot, thead, tr, th, td,article, aside, canvas, details,
embed, figure, figcaption, footer, header, hgroup, menu, nav,
output, ruby, section, summary,time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}
html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
img,fieldset, a img {
    border: none;
}
input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
    -webkit-appearance: none;
}
input[type="submit"],
button {
    cursor: pointer;
}

textarea {
    overflow: auto;
}
input, button {
    margin: 0;
    padding: 0;
    border: 0;
}
div, input, textarea, select,button,
h1,h2,h3,h4,h5,h6,a,span,a:focus {
    outline: none;
}
ul,ol {
    list-style-type: none;
}
table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
}
html {
    box-sizing: border-box;
}
*, *:before, *:after {
    box-sizing: inherit;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111111;
}

.app-wrapper {
  display: grid;
  min-height: 100vh;
  grid-template-rows: 80px auto 70px
}

.container {
  max-width: 940px;
  margin: 0 auto;
  padding: 0 10px;
  height: 100%;
}
@media screen and (min-width: 940px) {
  .container {
    padding: 0;
  }
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.search {
  margin: 20px auto 20px 0;
}
.search__field {
  border: 1px solid #ddd;
  padding: 10px;

}

</style>
