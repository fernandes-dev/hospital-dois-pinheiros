<template>
  <TabMenu :items="items" :image="logo" />
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
      logo: '/img/logo-diagn-img.png',
      items: [
        { title: 'Exames', path: '/clinica-imagem/exames', img: '/img/card-clinic-img.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Sobre', path: '/clinica-imagem/sobre', img: '/img/card-clinic-img.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      ]
    }
  },
  methods: {

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