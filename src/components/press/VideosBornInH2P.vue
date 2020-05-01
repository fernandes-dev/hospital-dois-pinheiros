<template>
  <v-container>
    <v-row>
      <v-col cols="6" sm="3" class="pa-0" v-for="(item,i) in videos" :key="i">
        <CardVideo :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardVideo from '@/components/press/CardVideo'
import { getIdFromURL } from 'vue-youtube-embed'

export default {
  components: {
    CardVideo
  },
  data: () => ({
    videos: [
      {
        title: 'Nasci no H2P 1',
        thumb: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video1',
      },
      {
        title: 'Nasci no H2P 2',
        thumb: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video2'
      },
      {
        title: 'Nasci no H2P 3',
        thumb: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video3'
      },
      {
        title: 'Nasci no H2P 3',
        thumb: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video3'
      },
      {
        title: 'Nasci no H2P 3',
        thumb: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video3'
      },
      {
        title: 'Nasci no H2P 3',
        thumb: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video3'
      },

    ],
  })
}
</script>

<style>
</style>