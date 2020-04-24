<template>
  <v-carousel class="carousel" cycle height="500" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide" width="100%"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    slides: [
      '/img/banners/banner1.png',
      '/img/banners/banner1.png',
    ]
  })
}
</script>

<style>
</style>