<template>
  <div>
    <ToolBar title="Releases" />
    <v-container>
      <div class="px-5">
        <v-row>
          <v-col cols="12" md="8">
            <v-card elevation="0">
              <h3 class="pt-4">{{title}} - {{date}}</h3>
              <v-img max-height="400px" width="100%" :src="image"></v-img>
              <v-card-text class="pa-0">
                <div class="body-news text-justify" v-html="text"></div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <CardRecents :recents="recents" :btnViewMore="true" :viewMoreUrl="'/releases'" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>

import CardRecents from '@/components/press/CardRecents'
import ToolBar from '@/components/ToolBar'

export default {
  components: {
    CardRecents,
    ToolBar
  },
  data: () => ({
    title: 'Standard Post Format',
    image: '/img/news/557.jpg',
    date: 'March 7, 2015 ',
    text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in elementum purus molestie. Curabitur pellentesque massa eu porttitorarcu porttitor. Quisque volutpat pharetra felis, eu cursus lorem molestie vitae. Nulla vehicula.</p>

<div class="quote" style="margin: 48px 0px 36px; padding: 0px; box-sizing: border-box; display: inline-block; color: rgb(68, 68, 68); font-family: &quot;Source Sans Pro&quot;, sans-serif; font-size: medium;"><span style="color:rgb(129, 128, 128); font-family:raleway,sans-serif; font-size:24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>

<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

`,
    recents: [
      { title: 'Geometric Landscapes Heartologic ', path: '/releases/olho-no-futuro', image: '/img/news/1.png' },
      { title: 'Geometric Landscapes Heartologic', path: '/releases/olho-no-futuro', image: '/img/news/2.png' },
      { title: 'Geometric Landscapes Heartologic', path: '/releases/olho-no-futuro', image: '/img/news/3.png' },
      { title: 'Geometric Landscapes Heartologic', path: '/releases/olho-no-futuro', image: '/img/news/3.png' },
    ],
  })
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