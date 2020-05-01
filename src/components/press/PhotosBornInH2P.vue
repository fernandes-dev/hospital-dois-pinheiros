<template>
  <div>
    <v-row v-for="(item, i) in items" :key="i">
      <v-row class="row-baby">
        <h4>Nascidos em {{item.date}}</h4>
      </v-row>

      <v-row>
        <v-col cols="6" sm="3" v-for="(image, i) in item.images" :key="i">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 0">
              <v-img width="100%" max-width="300px" class="image" :src="image">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out v-card--reveal display-3 white--text"
                    style="height: 100%;"
                    :class="(image.gender === 'menino') ? 'menino': 'menina'"
                  >
                    <v-btn class="ma-2" small fab @click="index = i, imagesBox = item.images">
                      <v-icon :color="(image.gender === 'menino') ? 'pink' : 'blue'">mdi-eye</v-icon>
                    </v-btn>
                    <v-btn small fab>
                      <v-icon
                        :color="(image.gender === 'menino') ? 'pink' : 'blue'"
                      >{{(image.gender === 'menino') ? 'mdi-gender-male' : 'mdi-gender-female'}}</v-icon>
                    </v-btn>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
          <v-card-subtitle class="py-1 d-flex justify-center">{{image.caption}}</v-card-subtitle>
        </v-col>

        <TinyBox :loop="true" v-model="index" :images="imagesBox" />
      </v-row>
    </v-row>
  </div>
</template>

<script>

import TinyBox from 'vue-tinybox';


export default {
  components: {
    // VueGallerySlideshow,
    TinyBox
    // CardPhotos,
  },
  data: () => ({
    classGender: '',
    index: null,
    active: 0,
    viewed: false,
    title: 'Jornada da Amamentação',
    itemsModal: {},
    imagesBox: [],
    items: [
      {
        date: '10/05/1999',
        images: [
          { src: '/img/card-image.png', caption: 'Bebê 1', alt: 'teste', path: '/nasci-no-h2p/bebe1', gender: 'menino' },
          { src: '/img/card-image.png', caption: 'Bebê 2', alt: 'teste', path: '/nasci-no-h2p/bebe1', gender: 'menina' },
          { src: '/img/card-image.png', caption: 'Bebê 3', alt: 'teste', path: '/nasci-no-h2p/bebe1', gender: 'menino' },
          { src: '/img/card-image.png', caption: 'Bebê 4', alt: 'teste', path: '/nasci-no-h2p/bebe1', gender: 'menina' },
          { src: '/img/card-image.png', caption: 'Bebê 5', alt: 'teste', path: '/nasci-no-h2p/bebe1', gender: 'menino' },
          { src: '/img/card-image.png', caption: 'Bebê 6', alt: 'teste', path: '/nasci-no-h2p/bebe1', gender: 'menino' },
        ]
      },
      {
        date: '10/05/1999',
        images: [
          { src: '/img/card-clinic-img.png', caption: 'Bebê 7', alt: 'teste', path: '/nasci-no-h2p/bebe1', gender: 'menino' },
          { src: '/img/card-clinic-img.png', caption: 'Bebê 8', alt: 'teste', path: '/nasci-no-h2p/bebe1', gender: 'menina' },
          { src: '/img/card-clinic-img.png', caption: 'Bebê 9', alt: 'teste', path: '/nasci-no-h2p/bebe1', gender: 'menino' },
          { src: '/img/card-clinic-img.png', caption: 'Bebê 10', alt: 'teste', path: '/nasci-no-h2p/bebe1', gender: 'menina' },
          { src: '/img/card-clinic-img.png', caption: 'Bebê 11', alt: 'teste', path: '/nasci-no-h2p/bebe1', gender: 'menino' },
          { src: '/img/card-clinic-img.png', caption: 'Bebê 12', alt: 'teste', path: '/nasci-no-h2p/bebe1', gender: 'menina' },
        ]
      },
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
.title-modal {
  /* background-color: white; */
  overflow: hidden;
}

.menino {
  background-color: rgba(14, 168, 168, 0.671);
}

.menina {
  background-color: rgba(202, 96, 179, 0.493);
}

.v-card--reveal {
  height: 100%;
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}

.row-baby {
  background-color: rgb(12, 92, 36);
  color: white;
  margin: 0px;
  padding: 10px;
  width: 100%;
}
</style>