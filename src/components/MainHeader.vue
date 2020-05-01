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
          <v-btn class="icon-40" icon v-if="item.img" :href="item.path">
            <img :src="icone" width="50px" />
          </v-btn>
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-subheader class="mb-6">
        <div class="col-6 d-flex justify-start">MENU</div>
        <div class="mt-2 ml-2" v-for="(item, i) in menu" :key="i">
          <v-btn class="icon-40" icon v-if="item.img" :href="item.path">
            <img :src="icone" width="40px" />
          </v-btn>
        </div>
      </v-subheader>

      <v-list-item-group v-for="(route, i) in menu" :key="i" v-model="current">
        <v-list-item v-if="!route.childs">
          <v-list-item-title>
            <router-link class="link-menu-app" :to="route.path">{{ route.name }}</router-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-group v-else>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{route.name}}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item class="ml-4" v-for="(admin, i) in route.childs" :key="i" :to="admin.path">
            <v-list-item-title>{{admin.name}}</v-list-item-title>
          </v-list-item>
        </v-list-group>
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
        {
          name: 'Imprensa',
          childs: [
            { path: '/releases', name: 'Releases' },
            { path: '/videos', name: 'Videos' },
            { path: '/fotos-e-eventos', name: 'Fotos e Eventos' },
          ]
        },
        {
          name: 'Social',
          childs: [
            { path: '/releases/olho-no-futuro', name: 'De olho no Futuro' },
            { path: '/page/expedicao-xingu', name: 'Expedição Xingu' },
            { path: '/page/passos-que-salvam', name: 'Passos que Salvam' },
            { path: '/releases/olhar-no-proximo', name: 'Olhar no Próximo' },
            { path: '/page/hospital-do-amor', name: 'Hospital do Amor' },
          ]
        },
        {
          name: 'Projetos',
          childs: [
            { path: '/page/espaco-cultural', name: 'Espaço Cultural' },
            { path: '/page/botica-cultural', name: 'Botica Cultural' },
            { path: '/fotos-e-eventos/jornada-da-amamentacao', name: 'Jornada da Amamentação' },
            { path: '/page/teste-do-olhinho', name: 'Teste do Olhinho' },
            { path: '/nasci-no-h2p', name: 'Nasci no Dois Pinheiros' },
            { path: '/maternidade/dia-do-bebe', name: 'Dia do Bebê' },
            { path: '/maternidade/curso-de-gestante', name: 'Curso de Gestante' },
          ]
        },
        {
          path: '/atendimento',
          name: 'Atendimento',
        },
        {
          name: 'Serviços',
          childs: [
            { path: '/page/internacoes', name: 'Internações' },
            { path: '/page/centro-cirurgico', name: 'Centro Cirúrgico' },
            { path: '/page/especialidades', name: 'Centro de Especialidades' },
            { path: '/page/emergencia', name: 'Emergência' }
          ]
        },
        { path: 'http://40anos.hospitaldoispinheiros.com.br/', img: true },
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