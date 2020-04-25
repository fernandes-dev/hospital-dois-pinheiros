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
import Page from '../views/Page.vue'
import Profile from '../views/Profile.vue'
import Maternity from '../views/MainMaternity.vue'

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
    name: 'Artigos - '+ base_name,
    component: Articles
  },
  {
    path: '/artigos/:id',
    name: 'Artigo - '+ base_name,
    component: Article
  },
  {
    path: '/page/:name',
    name: 'Page - '+ base_name,
    component: Page
  },
  {
    path: '/perfil/:id',
    name: 'Perfil - '+ base_name,
    component: Profile
  },
  {
    path: '/maternidade/:page',
    name: 'Maternidade - '+ base_name,
    component: Maternity,
    redirect: { path: "/dia-do-bebe" },
    children: [
      {
        path: "/maternidade/dia-do-bebe",
        name:'Dia do bebê - '+ base_name,
        component: () => import("../components/DayChild.vue")
      },
      {
        path: "/maternidade/calendario",
        name: 'Calendário - '+ base_name,
        component: () => import("../components/Calendars.vue")
      },
      {
        path: "/maternidade/internacao",
        name: 'Internação - '+ base_name,
        component: () => import("../components/Internation.vue")
      },
      {
        path: "/maternidade/tabela-de-crescimento",
        name: 'Tabela de Crescimento - '+ base_name,
        component: () => import("../components/TableChart.vue")
      },
      {
        path: "/maternidade/tabela-de-tanner",
        name: 'Tabela de Tanner - '+ base_name,
        component: () => import("../components/TableTanner.vue")
      },
      {
        path: "/maternidade/dicas",
        name: 'Dicas - '+ base_name,
        component: () => import("../components/Tips.vue")
      }
      ,
      {
        path: "/maternidade/curso-de-gestante",
        name: 'Curso de Gestante - '+ base_name,
        component: () => import("../components/Course.vue")
      }
    ]
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