<template>
  <div>
    <v-dialog v-model="viewed">
      <v-card>
        <v-card-title>{{idModal}}</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>

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