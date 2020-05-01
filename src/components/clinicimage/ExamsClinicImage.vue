<template>
  <v-content>
    <v-row justify="start">
      <v-col class="pa-0" cols="4" sm="3" v-for="(item,i) in exams" :key="i">
        <CardPhotos :item="item" />
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import CardPhotos from '@/components/press/CardPhotos'
export default {
  components: {
    CardPhotos
  },
  data: () => ({
    exams: [
      {
        title: 'Densitometria Óssea',
        image: '/img/card-image.png',
        path: '/clinica-imagem/exames/densitometria-ossea'
      },
      {
        title: 'Densitometria Óssea',
        image: '/img/card-image.png',
        path: '/clinica-imagem/exames/densitometria-ossea'
      },
      {
        title: 'Densitometria Óssea',
        image: '/img/card-image.png',
        path: '/clinica-imagem/exames/densitometria-ossea'
      },
      {
        title: 'Densitometria Óssea',
        image: '/img/card-image.png',
        path: '/clinica-imagem/exames/densitometria-ossea'
      },
    ]
  })
}
</script>

<style>
</style>