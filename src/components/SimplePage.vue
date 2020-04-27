<template>
  <v-content class="col-sm-10 py-5 my-5">
    <div class="title-simple-page">
      <h3 class="pb-8">
        <b>{{title}}</b>
      </h3>
    </div>
    <div class="text-justify py-6" v-html="text"></div>
    <div v-for="(item, i) in items" :key="i" class="my-5">
      <h4 class="py-5">{{item.title}}</h4>
      <v-img :src="item.img"></v-img>
    </div>
  </v-content>
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

h3::after {
  background-color: green;
}

.title-simple-page {
  border-bottom: 1px solid grey;
}
</style>