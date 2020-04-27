<template>
  <v-layout class="col-sm-10 mx-auto">
    <v-row>
      <v-col cols="10" sm="4">
        <v-card class="mx-auto" max-width="344">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
          <v-card-text>
            <div class="py-3">
              <b>{{item.date}}</b>
            </div>

            <div class="headline">{{item.title}}</div>
            <div v-if="item.text" v-html="item.text"></div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-if="item.path" :to="item.path" text>Ver mais</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style>
</style>