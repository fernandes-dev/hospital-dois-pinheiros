<template>
  <div id="simple-page">
    <v-container class="col-sm-10 py-5 my-5">
      <span class="display-1 text-uppercase title-item">
        <b>{{title}}</b>
      </span>
      <div class="title text-justify my-5" v-html="text"></div>

      <div v-for="item in items" :key="item.id" class="my-5">
        <h3>{{item.title}}</h3>
        <v-img :src="item.img"></v-img>
      </div>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "SimplePage",
  props: {
    items: Array,
    title: String,
    text: String,
  }
}
</script>

<style>
.title-item {
  margin-right: 5%;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  width: 30px;
  border-bottom: solid 2px black;
}
</style>