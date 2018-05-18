<template>
  <div class="team-item">
    <div class="team-item__img">
      <img v-bind:src="item.img" alt="Place  Image Here">
    </div>
    <h4 class="team-item__title">{{item.title}}</h4>
    <div class="team-item__position">{{item.position}}</div>
    <div class="team-item__desr">{{item.descr}}</div>
  </div>
</template>

<script>
  export default {
    name: 'teamItem',
    props: ['item'],
  };
</script>

<style>
.team-item {
  color: #000;
  text-align: center;
  font-size: 16px;
  padding: 0 40px 70px;
}
.team-item__img {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: #000;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 30px;
}
.team-item__img img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
}
.team-item__title {
  font-size: 18px;
  margin-bottom: 0.2em;
}
.team-item__position {
  color: #555555;
  margin-bottom: 30px;
}
</style>