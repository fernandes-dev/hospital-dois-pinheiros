<template>
  <TabMenu :items="items" :image="'/img/logo-diagn-img.png'" />
</template>

<script>

import TabMenu from '@/components/TabMenu'

export default {
  name: 'Maternity',
  components: {
    TabMenu
  },
  data() {
    return {
      active: null,
      items: [
        { title: 'Saiba Mais', subtitle: 'Imagem Dois Pinheiros', url: '#', img: '/img/card-clinic-img.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Exames Realizados', subtitle: 'Internação, veja como funciona', url: '#', img: '/img/card-clinic-img.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Convênios', subtitle: 'Saiba como ter uma gestação saudável', url: '#', img: '/img/card-clinic-img.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Resultados de Exames', subtitle: 'Veja o que fazer a cada semana de gestação', url: '#', img: '/img/card-clinic-img.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      ]
    }
  },
  methods: {
    next() {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  }
}
</script>

<style scoped>
.bg-imgclinic {
  width: 100%;
}

.imageclinic-item {
  height: 100%;
}

.tab-title {
  font-size: 0.8em !important;
  margin-left: 0px !important;
  font-weight: bold;
  color: #217b43 !important;
}

.tab-subtitle {
  padding: 0px !important;
  margin-bottom: 15px;
  font-weight: bold !important;
  font-size: 1.3em !important;
}

.tab-content {
  padding: 0px !important;
}

.tab-imageclinic .v-slide-group {
  display: -webkit-box !important;
  border-bottom: 1px solid grey !important;
}

.button-tab {
  color: white !important;
}

.imageclinic {
  margin: 60px 0 30px 0px;
}

.content-imgclinic {
  margin-bottom: 60px;
}
</style>