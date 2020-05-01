<template>
  <v-sheet class="bg-press-room d-flex align-center flex-column">
    <div class="press-room">
      <v-row justify="center">
        Sala de Imprensa
        <strong class="ml-2">Dois Pinheiros</strong>
      </v-row>
    </div>
    <v-slide-group class="simple-slide" show-arrows>
      <v-slide-item
        class="card-press-content mx-2"
        v-for="(item, i) in items"
        :key="i"
        v-slot:default="{active, toggle}"
      >
        <v-card @click="toggle" :to="item.path">
          <v-toolbar :src="item.img" height="220px" max-height="390px" width="100%" extended>
            <template v-slot:extension>
              <v-btn color="#217b43" class="icon-press" elevation="0" absolute bottom left fab>
                <v-icon color="white">mdi-{{item.icon}}</v-icon>
              </v-btn>
            </template>
          </v-toolbar>
          <v-card-title class="title-press">{{item.title}}</v-card-title>
          <v-card-text class="descrip-press">{{item.description}}</v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>


<script>
export default {
  name: 'ClinicBody',
  data() {
    return {
      model: null,
      clockIcon: '/img/icons/clock.svg',
      items: [
        { path: '/releases', title: 'Releases', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...', url: '#', img: '/img/news/1.png', date: '10/02/2020', icon: 'newspaper' },
        { path: '/videos', title: 'Videos', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...', url: '#', img: '/img/news/2.png', date: '10/02/2020', icon: 'video' },
        { path: '/fotos-e-eventos', title: 'Fotos e Eventos', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...', url: '#', img: '/img/news/3.png', date: '10/02/2020', icon: 'camera' },
      ]
    }
  }
}
</script>

<style scoped>
.card-press-content:hover {
  cursor: default;
}

.bg-press-room {
  background-color: #f5f5f5 !important;
}
.card-press {
  width: calc(100% - 16px);
  height: 100%;
}

.name-press {
  font-size: 1.2rem;
  color: black;
  padding: 8px 0 0 4px !important;
}

.title-press {
  font-size: 1.3rem;
  font-weight: bold;
  padding-top: 35px;
  padding-bottom: 0;
}

.descrip-press {
  font-size: 1rem;
}

.press-room {
  font-size: 1.9rem;
  margin-bottom: 40px;
  padding-top: 80px;
}

.view-profile {
  text-transform: none !important;
  padding: 4px !important;
  background-color: grey;
}

.btn-comments {
  text-decoration: none;
}

.row-press-items {
  font-size: 0.9rem;
}

.icon-press {
  border: 7px solid white !important;
}
</style>