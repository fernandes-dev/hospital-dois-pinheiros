<template>
  <div>
    <ToolBar />
    <v-container>
      <h3>Nasci no Hospital Dois Pinheiros</h3>
      <Institutional :categories="categories" />
    </v-container>
  </div>
</template>

<script>

import Institutional from '@/components/Institutional'
import ToolBar from '@/components/ToolBar'

export default {
  components: {
    Institutional,
    ToolBar
  },
  data: () => ({
    categories: [
      { name: 'Fotos', path: '/nasci-no-h2p/fotos' },
      { name: 'Videos', path: '/nasci-no-h2p/videos' },
    ]
  }),
}
</script>

<style scoped>
</style>