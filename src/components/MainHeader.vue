<template>
  <v-card class="overflow-hidden">
    <v-app-bar fixed :prominent="$vuetify.breakpoint.mdAndUp" height="100px" color="white">
      <v-toolbar-title class="col-10 col-sm-10 col-md-4 d-flex justify-center">
        <router-link class="h-100 mx-auto mx-md-0 white--text" to="/">
          <img class="logo" :src="logo" width="150px" />
        </router-link>
      </v-toolbar-title>
      <div v-if="!$vuetify.breakpoint.smAndDown" class="d-flex justify-center">
        <div v-for="(item, i) in menu" :key="i">
          <v-btn
            class="button-menu"
            active-class="active"
            v-if="!item.img"
            small
            elevation="0"
            :to="item.path"
          >{{item.name}}</v-btn>
          <img class="icon-40" v-if="item.img" :src="icone" width="50px" />
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-subheader>MENU</v-subheader>
      <v-list-item-group v-model="current">
        <v-list>
          <v-list-item v-for="(route, i) in menu" :key="i" :to="route.path" link>
            <v-list-item-title>{{ route.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-list-item-group>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      logo: '/img/logo.png',
      icone: '/img/icone2.png',
      drawer: false,
      menu: [
        { path: '/', name: 'Início' },
        { path: '/sobre', name: 'Sobre nós' },
        { path: '/imprensa', name: 'Imprensa' },
        { path: '/social', name: 'Social' },
        { path: '/projetos', name: 'Projetos' },
        { path: '/atendimento', name: 'Atendimento' },
        { path: '/servicos', name: 'Serviços' },
        { path: '/', img: true },
      ],
    }
  },
  computed: {
    current: {
      get() {
        return this.$route.path
      },
      set() {

      }
    }
  }
}
</script>

<style>
.active {
  color: white !important;
  background-color: #217b43 !important;
}

.button-menu {
  margin-right: 10px;
  margin-top: 35px;
  padding: 5px !important;
  text-transform: none !important;
}

.icon-40 {
  margin-left: 10px;
  margin-top: 20px;
}

.overflow-hidden {
  padding-bottom: 100px;
}
</style>