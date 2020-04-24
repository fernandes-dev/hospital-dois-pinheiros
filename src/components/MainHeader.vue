<template>
  <v-card class="overflow-hidden">
    <v-app-bar class="menu-bar" fixed height="80px" color="white">
      <v-toolbar-title class="col-10 col-sm-10 col-md-2 col-lg-4">
        <router-link class="mx-auto mx-md-0 logo-content" to="/">
          <img class="logo" :src="logo" width="200px" />
        </router-link>
      </v-toolbar-title>
      <div v-if="!$vuetify.breakpoint.smAndDown" class="d-flex justify-center">
        <div v-for="(item, i) in menu" :key="i">
          <v-btn
            class="button-menu"
            active-class="active"
            v-if="!item.img"
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
.button-menu {
  margin-right: 10px;
  margin-top: 25px;
  margin-left: 7px;
  background-color: transparent !important;
  text-transform: none !important;
  font-size: 0.8em !important;
}
.active {
  color: white !important;
  background-color: #217b43 !important;
}

.icon-40 {
  margin-left: 10px;
  margin-top: 10px;
}

.overflow-hidden {
  padding-bottom: 80px;
}

.logo {
  padding: 30px;
}

@media (min-width: 770px) {
  .logo-content {
    display: flex;
    justify-content: center;
  }
}
</style>