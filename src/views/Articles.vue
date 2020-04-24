<template>
  <v-container>Artigo {{article}}</v-container>
</template>

<script>
export default {
  name: 'ArticleView',
  props: {
    article: Object
  }
}
</script>

<style>
</style>