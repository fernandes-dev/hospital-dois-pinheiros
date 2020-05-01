<template>
  <div>
    <ToolBar title="Fotos e Eventos" />
    <v-container>
      <h3 class="pt-5">{{title}}</h3>
      <v-row justify="start">
        <v-col cols="6" sm="3" v-for="(item, i) in items" :key="i">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 0">
              <v-img class="image" :src="item.src">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-btn small fab @click="index = i, imagesBox = items">
                      <v-icon>mdi-eye</v-icon>
                    </v-btn>
                    <!-- <v-btn x-small fab>
                      <v-icon>mdi-magnify</v-icon>
                    </v-btn>-->
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
          <v-card-subtitle class="pa-0 py-1 d-flex justify-center">{{item.caption}}</v-card-subtitle>
          <!-- <v-row justify="center"></v-row> -->
        </v-col>

        <TinyBox :loop="true" v-model="index" :images="imagesBox" />
      </v-row>
    </v-container>
  </div>
</template>

<script>

// import CardPhotos from '@/components/press/CardPhotos'
import ToolBar from '@/components/ToolBar'
import TinyBox from 'vue-tinybox';

export default {
  components: {
    // CardPhotos,
    TinyBox,
    ToolBar,
  },
  data: () => ({
    index: null,
    imagesBox: [],
    viewed: false,
    title: 'Jornada da Amamentação',
    itemsModal: {},
    items: [
      { caption: 'Jornada da Amamentação 1', src: '/img/card-image.png' },
      { caption: 'Jornada da Amamentação 2', src: '/img/card-image.png' },
      { caption: 'Jornada da Amamentação 3', src: '/img/card-image.png' },
      { caption: 'Jornada da Amamentação 4', src: '/img/card-image.png' },
      { caption: 'Jornada da Amamentação 5', src: '/img/card-image.png' },
      { caption: 'Jornada da Amamentação 6', src: '/img/card-image.png' },
    ]
  }),
  methods: {
    openModal(data = null) {
      if (data) {
        console.log('asdasd');
        this.itemsModal = {
          title: data.title,
          image: data.image
        }
        this.viewed = true
      }
    }
  }
}
</script>

<style>
.v-card--reveal {
  height: 100%;
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>