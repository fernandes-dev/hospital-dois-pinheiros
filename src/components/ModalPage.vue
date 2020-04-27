<template>
  <div>
    <v-dialog v-model="viewed">
      <v-card>
        <v-card-title>{{title}}</v-card-title>
        <v-img :src="img"></v-img>
        <v-card-text v-html="text"></v-card-text>
        <v-card-actions>
          <v-btn dark @click="changeViewed">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    viewedOrigin: true
  }),
  props: {
    img: String,
    title: String,
    text: String,
    viewed: Boolean,
    color: String,
    idModal: Number
  },
  methods: {
    changeViewed() {
      this.$emit("changeViewed", this.viewedOrigin);
    }
  }
};
</script>

<style>
</style>