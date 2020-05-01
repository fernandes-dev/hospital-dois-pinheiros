<template>
  <div class="toolbar-main">
    <v-parallax class="image-toolbar" height="200" :src="(imageProp ? imageProp : image)"></v-parallax>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imageProp: String
  },
  data: () => ({
    image: '/img/quem-somos.jpg'
  })
}
</script>

<style>
.toolbar-main {
  background-color: green;
}

.image-toolbar {
  opacity: 0.9;
  padding-bottom: 50px;
}
</style>