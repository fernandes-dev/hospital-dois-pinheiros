import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Attendance from '../views/Attendance.vue'
import About from '../views/About.vue'
import Page from '../views/Page.vue'
import Profile from '../views/Profile.vue'
import Maternity from '../views/MainMaternity.vue'
import Endoscopy from '../views/Endoscopy.vue'
import ClinicImagem from '../views/MainClinic.vue'
import VaccinationRoom from '../views/VaccinationRoom.vue'
import ReleasesItem from '@/components/press/ReleasesItem'
import MainReleases from '@/views/MainReleases'
import MainVideos from '@/views/MainVideos'
import VideosItem from '@/components/press/VideosItem'
import Video from '@/components/press/Video'
import MainBornInH2P from '@/views/MainBornInH2P'
import MainPhotosEvents from '@/views/MainPhotosEvents'
import PhotosEventsItem from '@/components/press/PhotosEventsItem'

const base_name = 'Hospital Dois Pinheiros'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: base_name,
    component: Home
  },
  {
    path: '/nasci-no-h2p',
    name: 'Nasci no H2P - '+base_name,
    component: MainBornInH2P,
    redirect: { path: "/nasci-no-h2p/videos" },
    children: [
      {
        path: "/nasci-no-h2p/videos",
        name:'Videos - '+ base_name,
        component: () => import("@/components/press/VideosBornInH2P.vue")
      },
      {
        path: "/nasci-no-h2p/fotos",
        name: 'Fotos - '+ base_name,
        component: () => import("@/components/press/PhotosBornInH2P.vue")
      },
    ]
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
    path: '/releases',
    name: 'Releases - '+ base_name,
    component: MainReleases
  },
  {
    path: '/releases/:name',
    name: 'Release - '+ base_name,
    component: ReleasesItem
  },
  {
    path: '/videos',
    name: 'Galeria de Vídeos - '+ base_name,
    component: MainVideos
  },
  {
    path: '/videos/:name',
    name: 'Video - '+ base_name,
    component: VideosItem
  },
  {
    path: '/video/:name',
    name: 'Video',
    component: Video
  },
  {
    path: '/fotos-e-eventos',
    name: 'Fotos e Eventos - '+ base_name,
    component: MainPhotosEvents,
  },
  {
    path: '/fotos-e-eventos/:name',
    name: 'Galeria - '+ base_name,
    component: PhotosEventsItem,
  },
  {
    path: '/page/:name',
    name: 'Page - '+ base_name,
    component: Page
  },
  {
    path: '/perfil/:name',
    name: 'Perfil - '+ base_name,
    component: Profile
  },
  {
    path: '/sala-de-vacinas/',
    name: 'Sala de Vacinas - '+ base_name,
    component: VaccinationRoom,
  },
  {
    path: '/endoscopia/',
    name: 'Endoscopia - '+ base_name,
    component: Endoscopy
  },
  {
    path: '/maternidade/',
    name: 'Maternidade - '+ base_name,
    component: Maternity,
    redirect: { path: "/maternidade/dia-do-bebe" },
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
    path: '/clinica-imagem/',
    name: 'Clínica de Imagem - '+ base_name,
    component: ClinicImagem,
    redirect: { path: "/clinica-imagem/exames" },
    children: [
      {
        path: "/clinica-imagem/exames",
        name:'Exames - '+ base_name,
        component: () => import("@/components/clinicimage/ExamsClinicImage.vue")
      },
      {
        path: "/clinica-imagem/sobre",
        name: 'Sobre - '+ base_name,
        component: () => import("@/components/clinicimage/AboutClinicImage.vue")
      },
    ]
  },
  {
    path: "/clinica-imagem/exames/:exame",
    name:'Exame - '+ base_name,
    component: () => import("@/components/clinicimage/ExamsItem.vue")
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