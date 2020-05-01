<template>
  <div>
    <ToolBar />
    <v-container>
      <div class="px-5">
        <v-row>
          <v-col class="pa-0">
            <h3 class="pt-4">{{title}}</h3>
            <v-hover v-slot:default="{ hover }">
              <v-card
                max-width="700px"
                class="d-flex justify-center pb-0 pt-2"
                :elevation="hover ? 12 : 0"
              >
                <youtube :player-width="videoWidth" player-height="360" :video-id="videoId"></youtube>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4" class="pt-9 mt-8">
            <CardRecents :recents="recents" :btnViewMore="true" :viewMoreUrl="viewMoreUrl" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>

import ToolBar from '@/components/ToolBar'
import CardRecents from '@/components/press/CardRecents'
import { getIdFromURL } from 'vue-youtube-embed'

export default {
  mounted() {
    this.resizeVideo()
    window.addEventListener('resize', () => {
      this.resizeVideo()
    });
  },
  components: {
    ToolBar,
    CardRecents,
  },
  data: () => ({
    videoWidth: 680,
    title: 'Teste',
    videoUrl: 'https://www.youtube.com/watch?v=PErVuyknICM',
    recents: [
      {
        title: 'Mittow Novamente',
        image: `https://img.youtube.com/vi/${getIdFromURL('https://www.youtube.com/watch?v=PErVuyknICM')}/0.jpg`,
        path: '/video/video1',
      },
    ],
    viewMoreUrl: '/videos'
  }),
  methods: {
    resizeVideo() {
      let windowWidth = window.innerWidth;
      if (windowWidth < 740) {
        this.videoWidth = (windowWidth - 60)
        console.log('asdasd');
      } else {
        this.videoWidth = 680
      }
    }
  },
  computed: {
    videoId: function () {
      return getIdFromURL(this.videoUrl)
    }
  }
}
</script>

<style scoped>
.release-title {
  overflow-y: hidden;
  max-height: 80px;
}
.body-news {
  padding-top: 25px;
  padding-bottom: 35px;
}
</style>