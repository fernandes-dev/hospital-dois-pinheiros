<template>
  <div>
    <ToolBar />
    <v-container>
      <h3 class="pt-5">{{title}}</h3>
      <v-row>
        <v-col cols="3" v-for="(item,i) in items" :key="i">
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
    ToolBar,
  },
  data: () => ({
    title: 'Nasci no Hospital Dois Pinheiros',
    items: [
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
    recents: [
      {
        title: 'Mittow Novamente',
        image: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video1',
      },
    ]

  }),
  methods: {

  }
}
</script>

<style>
</style>