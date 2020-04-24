<template>
  <v-card @click="toggle">
    <v-card-title class="title" v-if="item.title" v-html="item.title"></v-card-title>
    <v-img width="100%" v-if="item.image" :src="item.image"></v-img>
    <v-card-text v-if="item.text" v-html="item.text"></v-card-text>
    <v-card-actions class="d-flex justify-end">
      <v-btn elevation="0" small>Ver mais</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ItemPCarousel',
  props: {
    item: Object,
    toggle: Function
  }
}
</script>

<style scoped>
.title {
  padding: 5px 0px 5px 10px !important;
}
</style>
