<template>
  <div class="home">
    <div class="container">
      <app-post  v-for="post in posts" :post="post" :key="post.id"/>
    </div>

  </div>
</template>

<script>
import AppPost from '@/components/AppPost';

export default {
  name: 'Home',
  components: {
    AppPost
  },
  data () {
    return {
      msg: 'Privet coderiver',
      posts: [
        {
          id: 1,
          img: 'https://picsum.photos/300/300?image=56',
          title: 'Our Favourite Task Management App!',
          date: 'Posted on March 28, 2013',
          descr: '6Wunderkinder’s flagship product, Wunderlist, has been a massive hit since its inception. Arguably one of the best to manage your tasks in your business and personal life. What makes it different from any other app? Simplicity. You don’t need to fiddle around with so many unnecessary features like you would with traditional to-do apps. Soon as you open the app, Wunderlist dives right into your tasks and you can get to work.'
        },
        {
          id: 2,
          img: 'https://picsum.photos/300/300?image=34',
          title: 'Year in Review: Our Favourite Apps from 2012 ',
          date: 'Posted on March 3, 2013',
          descr: 'The iPad mini is the newly introduced member of the “i” family. Pixeden has done a phenomenal job of replicating iPad Mini into a vector form and has made it freely available for everyone to use. A second version of the iPhone 5 mockup template released by Pixeden, which is the couterpart to the originally released black version. This template also includes high quality background floor textures.'
        },
        {
          id: 3,
          img: 'https://picsum.photos/300/300?image=16',
          title: 'Marketing Tips & Tricks From the Top Brands',
          date: 'Posted on December 8, 2013 ',
          descr: 'Fully scalable 3/4 view of iPhone 5 is available for download from Pixeden. This PSD template includes highly detailed mockup of the white and black iPhone 5. A perfect replica of the newly introduced Macbook Pro with Retina Display. Includes layered PSD file with option to scale to any preferred size. iPad 2 by Pixeden is a fully scalable vector template with smart layers. It comes with 3 detailed views of both black and white iPad 2.'
        },
      ],
    }
  }
};
</script>

<style>
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
</style>
