<template>
  <div>
    <ToolBar title="Videos" />
    <v-container>
      <h3>Videos</h3>
      <v-row justify="start">
        <v-col class="pa-0" cols="4" sm="2" v-for="(item,i) in items" :key="i">
          <CardVideo :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import CardVideo from '@/components/press/CardVideo'
import ToolBar from '@/components/ToolBar'
import { getIdFromURL } from 'vue-youtube-embed'

export default {
  components: {
    CardVideo,
    ToolBar
  },
  data: () => ({
    items: [
      {
        title: 'Video 1',
        thumb: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video1',
      },
      {
        title: 'Video 2',
        thumb: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video2'
      },
      {
        title: 'Video 3',
        thumb: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video3'
      },
      {
        title: 'Video 3',
        thumb: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video3'
      },
      {
        title: 'Video 3',
        thumb: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video3'
      },
      {
        title: 'Video 3',
        thumb: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video3'
      },

    ],

  })
}
</script>

<style>
</style>