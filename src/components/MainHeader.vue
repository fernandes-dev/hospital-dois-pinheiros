<template>
  <v-card class="overflow-hidden">
    <v-app-bar class="menu-bar" fixed height="85px" color="white">
      <v-toolbar-title class="col-10 col-sm-10 col-md-2 col-lg-4">
        <router-link class="mx-auto mx-md-0 logo-content" to="/">
          <img class="logo" :src="logo" width="200px" />
        </router-link>
      </v-toolbar-title>
      <div v-if="!$vuetify.breakpoint.smAndDown" class="d-flex justify-center">
        <div v-for="(item, i) in menu" :key="i">
          <v-menu v-if="item.childs" open-on-hover offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                elevation="0"
                active-class="active"
                class="button-menu"
                small
                :to="item.path"
                v-on="on"
              >{{item.name}}</v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(child, i) in item.childs" :key="i" :to="child.path">
                <v-list-item-title>{{ child.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
            elevation="0"
            small
            v-if="!item.img && !item.childs"
            :to="item.path"
            v-on="on"
            class="button-menu"
            active-class="active"
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
        <v-list-item v-for="(route, i) in menu" :key="i">
          <v-list-item-title v-if="!route.childs">
            <router-link class="link-menu-app" :to="route.path">{{ route.name }}</router-link>
          </v-list-item-title>
          <v-list-group v-else>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{route.name}}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item class="pa-0" v-for="(admin, i) in route.childs" :key="i" :to="admin.path">
              <v-list-item-title class="pl-5">{{admin.name}}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      on: null,
      logo: '/img/logo.png',
      icone: '/img/icone2.png',
      drawer: false,
      menu: [
        { path: '/', name: 'Início', },
        { path: '/sobre', name: 'Sobre nós' },
        { path: '/imprensa', name: 'Imprensa' },
        {
          path: '/social',
          name: 'Social',
          childs: [
            { path: '/olho-no-futuro', name: 'De olho no Futuro' },
            { path: '/expedicao-xingu', name: 'Expedição Xingu' },
            { path: '/passos-que-salvam', name: 'Passos que Salvam' },
            { path: '/olhar-no-proximo', name: 'Olhar no Próximo' },
            { path: '/hospital-do-amor', name: 'Hospital do Amor' },
          ]
        },
        {
          path: '/projetos',
          name: 'Projetos',
          childs: [
            { path: '/espaco-cultural', name: 'Espaço Cultural' },
            { path: '/botica', name: 'Botica Cultural' },
            { path: '/jornada-da-amamentacao', name: 'Jornada da Amamentação' },
            { path: '/teste-do-olhinho', name: 'Teste do Olhinho' },
            { path: '/nasci-no-2p', name: 'Nasci no Dois Pinheiros' },
            { path: '/dia-do-bebe', name: 'Dia do Bebê' },
            { path: '/curso-de-gestante', name: 'Curse de Gestante' },
          ]
        },
        {
          path: '/atendimento',
          name: 'Atendimento',
        },
        {
          path: '/servicos',
          name: 'Serviços',
          childs: [
            { path: '/internacoes', name: 'Internações' },
            { path: '/centro-cirurgico', name: 'Centro Cirúrgico' },
            { path: '/especialidades', name: 'Centro de Especialidades' },
            { path: '/emergencia', name: 'Emergência' }
          ]
        },
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

.itemm {
  padding-right: 40px !important;
}

.list-item {
  padding-left: 20px !important;
}

.item-template {
  padding-left: 0px !important;
}

.link-menu-app {
  text-decoration: none !important;
}
</style>