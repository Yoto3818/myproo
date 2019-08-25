import Vue from 'vue';
import Router from 'vue-router';
import FilmRouter from './Film'
import cinemaRouter from './cinema'
import mineRouter from './Mine'

Vue.use(Router);



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    FilmRouter,
    cinemaRouter,
    mineRouter,
    {
      path : '/*',
      redirect : '/Film/nowPlaying'
    }
  ],
});
