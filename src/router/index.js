import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Press from '../views/Press.vue'
import Projects from '../views/Projects.vue'
import Attendance from '../views/Attendance.vue'
import Services from '../views/Services.vue'
import Social from '../views/Social.vue'
import About from '../views/About.vue'
import Articles from '../views/Articles.vue'
import Article from '../views/Article.vue'

const base_name = 'Hospital Dois Pinheiros'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: base_name,
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre nós - '+base_name,
    component: About
  },
  {
    path: '/imprensa',
    name: 'Imprensa - '+ base_name,
    component: Press
  },
  {
    path: '/social',
    name: 'Social - '+ base_name,
    component: Social
  },
  {
    path: '/projetos/',
    name: 'Projetos - '+ base_name,
    component: Projects
  },
  {
    path: '/atendimento',
    name: 'Atendimento - '+ base_name,
    component: Attendance
  },
  {
    path: '/servicos',
    name: 'Serviços - '+ base_name,
    component: Services
  },
  {
    path: '/artigos',
    name: 'Artigo - '+ base_name,
    component: Articles
  },
  {
    path: '/artigos/:id',
    name: 'Artigo - '+ base_name,
    component: Article
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(to => {
  document.title = to.name
  window.scrollTo(0, 0)
})

export default router
