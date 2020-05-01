<template>
  <div>
    <v-container v-if="!small">
      <v-hover v-slot:default="{ hover }">
        <v-card class="mb-3" :elevation="hover ? 12 : 0" ripple :to="item.path">
          <v-img :src="item.image"></v-img>
        </v-card>
      </v-hover>
      <v-row justify="center">
        <v-col class="d-flex justify-center">{{item.title}}</v-col>
      </v-row>
    </v-container>
    <v-card v-else elevation="0" ripple :to="item.path">
      <v-img :src="item.image"></v-img>
      <h4>{{item.title}}</h4>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    small: Boolean
  }
}
</script>

<style>
</style>