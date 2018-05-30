<template>
  <div class="post">
    <h2 class="post__title">{{post.title}}</h2>
    <div class="post__date">{{post.date}}</div>
    <div class="post__img">
      <img :src="post.img" alt="Place  Image Here">
    </div>
    <div class="post__descr">
      <p>{{post.descr}}</p>
      <transition name="fade">
        <p v-if="showMore">{{post.more}}</p>
      </transition>
    </div>
    <button type="button" class="post__btn" @click="showMore = !showMore">
      <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21.781" height="21.75" viewBox="0 0 21.781 21.75">
          <path fill="currentColor" d="M241.023,860.179a10.887,10.887,0,1,0,10.887,10.887A10.887,10.887,0,0,0,241.023,860.179Zm0,20.14a9.253,9.253,0,1,1,9.254-9.253A9.253,9.253,0,0,1,241.023,880.319Zm4.11-10.515-3.464-3.464a0.816,0.816,0,1,0-1.154,1.155L243,869.977h-5.966a0.364,0.364,0,0,0-.362.363v1.452a0.364,0.364,0,0,0,.362.363H243l-2.482,2.482a0.816,0.816,0,1,0,1.154,1.155l3.464-3.465a0.817,0.817,0,0,0,.225-0.422,0.358,0.358,0,0,0,.02-0.113V870.34a0.347,0.347,0,0,0-.02-0.112A0.815,0.815,0,0,0,245.133,869.8Z" transform="translate(-230.125 -860.188)"/>
        </svg>
      </span>
      <span>Read More</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'AppPost',
    props: ['post'],
    data() {
      return {
        showMore: false
      }
    }
  };
</script>

<style>
.post {
  display: block;
  font-size: 16px;
  color: #000;
  padding: 50px 0;
}
.post__title {
  font-size: 48px;
  font-weight: bold;
  text-align: center;
}
.post__date {
  color: #777;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}
.post__img {
  display: block;
  margin: 50px auto;
  width: 328px;
  height: 288px;
  background-color: #ccc;
  overflow: hidden;
}
.post img {
  min-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
}
.post__descr {
  margin-bottom: 24px;
}
.post__btn {
  background: none;
  border: none;
  color: #111;
  text-decoration: none;
  display: flex;
  align-items: center;
}
.post__link .icon {
  line-height: 0;
  margin-right: 8px;
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(-100px, 0);
}
</style>
