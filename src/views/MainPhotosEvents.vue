<template>
  <div>
    <ToolBar />
    <v-container>
      <h3>Fotos e Eventos</h3>
      <v-row justify="center">
        <v-col cols="6" sm="4" v-for="(item,i) in items" :key="i">
          <CardPhotos :item="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import CardPhotos from '@/components/press/CardPhotos'
import ToolBar from '@/components/ToolBar'

export default {
  components: {
    CardPhotos,
    ToolBar
  },
  data: () => ({
    items: [
      { title: 'Jornada da Amamentação', image: '/img/card-image.png', path: '/fotos-e-eventos/jornada-da-amamentacao' },
      { title: 'Jornada da Amamentação', image: '/img/card-image.png', path: '/fotos-e-eventos/mural-de-bebes' },
    ]
  })
}
</script>

<style>
</style>