import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Attendance from '../views/Attendance.vue'
import Services from '../views/Services.vue'
import About from '../views/About.vue'
import Articles from '../views/Articles.vue'
import Article from '../views/Article.vue'
import Page from '../views/Page.vue'
import Profile from '../views/Profile.vue'
import Maternity from '../views/MainMaternity.vue'
import ClinicImagem from '../views/MainClinic.vue'

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
        component: () => import("@/components/maternity/DayChild.vue")
      },
      {
        path: "/maternidade/calendario",
        name: 'Calendário - '+ base_name,
        component: () => import("@/components/maternity/Calendars.vue")
      },
      {
        path: "/maternidade/internacao",
        name: 'Internação - '+ base_name,
        component: () => import("@/components/maternity/Internation.vue")
      },
      {
        path: "/maternidade/tabela-de-crescimento",
        name: 'Tabela de Crescimento - '+ base_name,
        component: () => import("@/components/maternity/TableChart.vue")
      },
      {
        path: "/maternidade/tabela-de-tanner",
        name: 'Tabela de Tanner - '+ base_name,
        component: () => import("@/components/maternity/TableTanner.vue")
      },
      {
        path: "/maternidade/dicas",
        name: 'Dicas - '+ base_name,
        component: () => import("@/components/maternity/Tips.vue")
      }
      ,
      {
        path: "/maternidade/curso-de-gestante",
        name: 'Curso de Gestante - '+ base_name,
        component: () => import("@/components/maternity/Course.vue")
      }
    ]
  },
  {
    path: '/clinica-imagem/:page',
    name: 'Clínica de Imagem - '+ base_name,
    component: ClinicImagem,
    redirect: { path: "/exames" },
    children: [
      {
        path: "/clinica-imagem/exames",
        name:'Dia do bebê - '+ base_name,
        component: () => import("@/components/clinicimage/ExamsClinicImage.vue")
      },
      {
        path: "/clinica-imagem/sobre",
        name: 'Sobre - '+ base_name,
        component: () => import("@/components/clinicimage/AboutClinicImage.vue")
      },
      {
        path: "/clinica-imagem/noticias",
        name: 'Notícias - '+ base_name,
        component: () => import("@/components/clinicimage/NewsClinicImage.vue")
      },
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