<template>
  <div>
    <div v-if="logo" class="logo-institutional">
      <v-row justify="center" class="py-3">
        <v-img max-height="150px" max-width="300px" width="100%" :src="logo"></v-img>
      </v-row>
    </div>

    <v-tabs class="mb-8" show-arrows color="#217b43">
      <v-tab
        class="tab-name"
        v-for="(route, i) in categories"
        :key="i"
        :to="route.path"
      >{{route.name}}</v-tab>
    </v-tabs>
    <router-view class="col-12"></router-view>
  </div>
</template>

<script>

export default {
  name: 'Institutional',
  props: {
    logo: String,
    categories: Array
  }
}
</script>

<style scoped>
</style>