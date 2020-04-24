<template>
  <v-sheet class="bg-press-room d-flex align-center flex-column" elevation="0">
    <div class="press-room">
      <v-row>
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
        <v-card max-height="390px" elevation="2" class="card-press" @click="toggle">
          <v-img height="220" :src="item.img">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <div class="body-press">
            <div class="name-press">{{item.name}}</div>
            <div class="descrip-press">{{item.description}}</div>
          </div>
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
        { id: 1, name: 'Releases', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...', url: '#', img: '/img/news/1.png', date: '10/02/2020', icon: 'film' },
        { id: 2, name: 'Videos', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...', url: '#', img: '/img/news/2.png', date: '10/02/2020', icon: 'film' },
        { id: 3, name: 'Fotos e Eventos', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...', url: '#', img: '/img/news/3.png', date: '10/02/2020', icon: 'film' },

      ]
    }
  }
}
</script>

<style scoped>
.card-press-content:hover {
  cursor: default;
}

.body-press {
  padding: 5px;
}
.bg-press-room {
  background-color: #f5f5f5 !important;
}
.card-press {
  width: calc(100% - 16px);
  height: 100%;
}

.name-press {
  font-size: 1.2em;
  color: black;
  padding: 8px 0 0 4px !important;
}

.title-press {
  font-size: 0.8em;
  font-weight: bold;
  padding: 0 0 0 4px !important;
  margin-top: -4px;
}

.descrip-press {
  font-size: 0.8em;
  padding: 0 0 0 4px !important;
  margin-top: 12px;
}

.press-room {
  font-size: 1.9em;
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
  font-size: 0.9em;
}
</style>