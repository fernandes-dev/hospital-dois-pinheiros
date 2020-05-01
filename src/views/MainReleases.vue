<template>
  <div>
    <ToolBar title="Releases" />
    <v-container>
      <v-col>
        <h3>Releases</h3>
      </v-col>

      <v-row class="px-5">
        <v-col cols="12" md="8">
          <v-card v-for="(release, i) in releases" :key="i" elevation="0" class="pb-2">
            <v-row>
              <v-hover v-slot:default="{ hover }">
                <v-card class="px-4" :elevation="hover ? 12 : 0">
                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-img max-height="150px" width="100%" :src="release.image"></v-img>
                    </v-col>
                    <v-col cols="12" sm="8" class="pa-2">
                      <v-card-title class="pa-0">{{release.title}} - {{release.date}}</v-card-title>
                      <v-card-text class="pa-0">
                        <div class="body-news-main text-justify pt-2" v-html="release.text"></div>
                        <div class="d-flex justify-end">
                          <v-btn small :to="release.path" color="green" elevation="0" dark>Ler mais</v-btn>
                        </div>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-card>
              </v-hover>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <CardRecents :recents="recents" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import CardRecents from '@/components/press/CardRecents'
import ToolBar from '@/components/ToolBar'

export default {
  components: {
    CardRecents,
    ToolBar,
  },
  data: () => ({
    releases: [
      {
        title: 'Standard Post Format',
        image: '/img/news/557.jpg',
        date: 'March 7, 2015 ',
        path: '/releases/olho-no-futuro',
        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in elementum purus molestie. Curabitur pellentesque massa eu porttitorarcu porttitor. Quisque volutpat pharetra felis, eu cursus lorem molestie vitae. Nulla vehicula.</p>

        <div class="quote" style="margin: 48px 0px 36px; padding: 0px; box-sizing: border-box; display: inline-block; color: rgb(68, 68, 68); font-family: &quot;Source Sans Pro&quot;, sans-serif; font-size: medium;"><span style="color:rgb(129, 128, 128); font-family:raleway,sans-serif; font-size:24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>

        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

        `,
      },
      {
        title: 'Standard Post Format',
        image: '/img/news/557.jpg',
        date: 'March 7, 2015 ',
        path: '/releases/olho-no-futuro',
        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in elementum purus molestie. Curabitur pellentesque massa eu porttitorarcu porttitor. Quisque volutpat pharetra felis, eu cursus lorem molestie vitae. Nulla vehicula.</p>

        <div class="quote" style="margin: 48px 0px 36px; padding: 0px; box-sizing: border-box; display: inline-block; color: rgb(68, 68, 68); font-family: &quot;Source Sans Pro&quot;, sans-serif; font-size: medium;"><span style="color:rgb(129, 128, 128); font-family:raleway,sans-serif; font-size:24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>

        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

        `,
      },
      {
        title: 'Standard Post Format',
        image: '/img/news/557.jpg',
        date: 'March 7, 2015 ',
        path: '/releases/olho-no-futuro',
        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in elementum purus molestie. Curabitur pellentesque massa eu porttitorarcu porttitor. Quisque volutpat pharetra felis, eu cursus lorem molestie vitae. Nulla vehicula.</p>

        <div class="quote" style="margin: 48px 0px 36px; padding: 0px; box-sizing: border-box; display: inline-block; color: rgb(68, 68, 68); font-family: &quot;Source Sans Pro&quot;, sans-serif; font-size: medium;"><span style="color:rgb(129, 128, 128); font-family:raleway,sans-serif; font-size:24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>

        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

        `,
      },
    ],
    recents: [
      {
        title: 'Standard Post Format',
        image: '/img/news/557.jpg',
        date: 'March 7, 2015 ',
        path: '/releases/olho-no-futuro',
        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in elementum purus molestie. Curabitur pellentesque massa eu porttitorarcu porttitor. Quisque volutpat pharetra felis, eu cursus lorem molestie vitae. Nulla vehicula.</p>

        <div class="quote" style="margin: 48px 0px 36px; padding: 0px; box-sizing: border-box; display: inline-block; color: rgb(68, 68, 68); font-family: &quot;Source Sans Pro&quot;, sans-serif; font-size: medium;"><span style="color:rgb(129, 128, 128); font-family:raleway,sans-serif; font-size:24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>

        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

        `,
      },
      {
        title: 'Standard Post Format',
        image: '/img/news/557.jpg',
        date: 'March 7, 2015 ',
        path: '/releases/olho-no-futuro',
        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in elementum purus molestie. Curabitur pellentesque massa eu porttitorarcu porttitor. Quisque volutpat pharetra felis, eu cursus lorem molestie vitae. Nulla vehicula.</p>

        <div class="quote" style="margin: 48px 0px 36px; padding: 0px; box-sizing: border-box; display: inline-block; color: rgb(68, 68, 68); font-family: &quot;Source Sans Pro&quot;, sans-serif; font-size: medium;"><span style="color:rgb(129, 128, 128); font-family:raleway,sans-serif; font-size:24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>

        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

        `,
      },
      {
        title: 'Standard Post Format',
        image: '/img/news/557.jpg',
        date: 'March 7, 2015 ',
        path: '/releases/olho-no-futuro',
        text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in elementum purus molestie. Curabitur pellentesque massa eu porttitorarcu porttitor. Quisque volutpat pharetra felis, eu cursus lorem molestie vitae. Nulla vehicula.</p>

        <div class="quote" style="margin: 48px 0px 36px; padding: 0px; box-sizing: border-box; display: inline-block; color: rgb(68, 68, 68); font-family: &quot;Source Sans Pro&quot;, sans-serif; font-size: medium;"><span style="color:rgb(129, 128, 128); font-family:raleway,sans-serif; font-size:24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div>

        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

        `,
      },
    ],
  })
}
</script>

<style scoped>
.tolbar-releases {
  border-bottom: 0.5px solid grey !important;
}

.body-news-main {
  max-height: 100px;
  overflow-y: hidden;
}
</style>