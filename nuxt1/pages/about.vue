<template>
  <div class="about">
    <div class="container">
      <div class="search">
        <label for="search">Search by post title</label>
        <input name="search" class="search__field" v-model="search" placeholder="Search...">
      </div>

      <div class="about__block">
        <h2>{{about.title}}</h2>
        <p v-for="text in about.text" :key="text.index">{{text}}</p>
      </div>

      <div class="about__block">
        <h2>{{team.title}}</h2>
        <div class="about__team" >
          <AppTeamItem v-for="teammate in team.list" :item="teammate" :key="teammate.id">

            <p><b>Teammate #{{teammate.id}}: Slot</b></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, voluptatibus.</p>

          </AppTeamItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTeamItem from '~/components/AppTeamItem'
import pageAnimation from '~/mixins/pageAnimation'

export default {
  name: 'about',
  components: {
    AppTeamItem
  },
  mixins: [pageAnimation],
  data() {
    return {
      search: '',
      about: {
        title: 'What We Are All About',
        text: [
          'It’s not always easy to filter out noise and purely focus on the content. Too many blogs and news sites are filled with colourful and distracting advertisement left right and centre. This is where we do things differently! Rather than just focusing purely and generating revenue, we focus on great user experience.', 'You will notice that our news articles are content focused and free of any distractions. On top of that, we deliver content revolving design on a daily basis. Offering you insightful tutorials, techniques, design inspirations, mobile app development, coding, unique advertisements, and freebies.', 'Our focus is and forever will be to bring high quality resources to lean from and to be inspired. Visit us daily for new design related articles!' ],
      },
      team: {
        title: 'Meet Our Team!',
        list: [
          {
            id: 1,
            img: 'https://picsum.photos/200/200?image=1062',
            title: 'Kimberly Thompson',
            position: 'Founder & CEO',
            descr: 'Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she ensures all operations are running smoothly.',
          },
          {
            id: 2,
            img: 'https://picsum.photos/200/200?image=1074',
            title: 'Rico Masi',
            position: 'Code Master',
            descr: 'There’s no challege Rico can’t tame! Making sure everything is safe and secure on the back end, you can say that he’s the heart of this team. ',
          },
          {
            id: 3,
            img: 'https://picsum.photos/200/200?image=1013',
            title: 'Uku Mason',
            position: 'Marketing Expert',
            descr: 'Not your average marketer. Uku manages everything from, marketing and finance to customer relation.',
          },
          {
            id: 4,
            img: 'https://picsum.photos/200/200?image=1049',
            title: 'Blaz Robar',
            position: 'Design Guru',
            descr: 'A Highly experienced UI/UX designer, Blaz brings our ideas to life with his beautiful visual designs.',
          },
          {
            id: 5,
            img: 'https://picsum.photos/200/200?image=514',
            title: 'Jamie Adams',
            position: 'Assistant',
            descr: 'Don’t let the picture fool you. Jamie is the glue that holds our team together! Managing everthing from recruitments, social gatherings, and everyday operations.',
          },
        ]
      }
    }
  },
  computed: {
    postComputed() {
      return this.posts.find((post) => {
        return this.search.length > 0 ? post.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 : true
      })
    },
  },
};
</script>

<style>
.about {
  font-size: 16px;
  line-height: 20px;
}
.about__block {
  margin-top: 100px;
}

.about__team {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.about__team > div {
  max-width: 300px;
}

.about h2 {
  text-align: center;
  font-size: 48px;
  line-height: 50px;
  margin-bottom: 60px;
}
.about p {
  margin-bottom: 2em;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
