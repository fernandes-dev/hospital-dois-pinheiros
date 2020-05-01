<template>
  <v-container>
    <v-hover v-slot:default="{ hover }">
      <div>
        <v-card class="pa-0" :elevation="hover ? 12 : 0" ripple :to="item.path">
          <v-card-text class="pa-0">
            <v-img v-if="item.thumb" :src="item.thumb"></v-img>
            <v-img v-else :src="item.image"></v-img>
          </v-card-text>
        </v-card>
        <v-row justify="center" class="py-3">
          <h4>{{item.title}}</h4>
        </v-row>
      </div>
    </v-hover>
  </v-container>
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