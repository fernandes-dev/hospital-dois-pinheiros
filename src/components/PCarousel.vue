<template>
  <v-slide-group class="simple-slide" show-arrows>
    <v-slide-item
      class="mx-2"
      v-for="(item, i) in items"
      :key="i"
      v-slot:default="{active, toggle}"
    >
      <ItemPCarousel :toggle="toggle" :item="item" />
    </v-slide-item>
  </v-slide-group>
</template>

<script>

import ItemPCarousel from '@/components/ItemPCarousel'

export default {
  name: 'Article',
  components: {
    ItemPCarousel
  },
  props: {
    items: Array
  }
}
</script>

<style>
</style>