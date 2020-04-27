<template>
  <v-container>
    <v-row class="row-topic">
      <v-col>
        <div class="topic">Artigos</div>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn :to="'/artigos'" elevation="0" small class="view-more">Ver todos</v-btn>
      </v-col>
    </v-row>
    <PCarousel class="border component" :items="articles" />

    <v-row class="row-topic">
      <v-col>
        <div class="topic">Videos</div>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn elevation="0" small class="view-more">Ver todos</v-btn>
      </v-col>
    </v-row>
    <PCarousel class="videos component" :items="videos" />

    <v-row class="row-topic">
      <v-col>
        <div class="topic">Eventos</div>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn elevation="0" small class="view-more">Ver todos</v-btn>
      </v-col>
    </v-row>
    <PCarousel class="events component" :items="events" />
  </v-container>
</template>

<script>
import PCarousel from '@/components/PCarousel'

export default {
  components: {
    PCarousel
  },
  data: () => ({
    articles: [
      { title: 'Artigo 1', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Artigo 2', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Artigo 3', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Artigo 4', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Artigo 5', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Artigo 6', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
    ],
    videos: [
      { title: 'Video 1', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Video 2', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Video 3', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Video 4', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Video 5', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Video 6', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
    ],
    events: [
      { title: 'Evento 1', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Evento 2', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Evento 3', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Evento 4', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Evento 5', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
      { title: 'Evento 6', image: '/img/card-image.png', text: 'Lorem ipsum dolor sit amet, consectetur of adipiscing elit. Donec nec eros eget nisl fringilla commodo. Maecenas.' },
    ]
  })
}
</script>

<style>
.topic {
  margin-left: 70px;
  font-size: 1.9rem;
}

.row-topic {
  padding-bottom: 20px;
}

.view-more {
  margin-right: 70px;
  background-color: #217b43 !important;
  color: white !important;
}

.boder {
  border-bottom: solid 20px !important;
}

.component {
  padding-bottom: 100px;
}
</style>