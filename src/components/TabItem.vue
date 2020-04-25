<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-img width="600px" height="300px" :src="item.img">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card :class="{ 'bg-tab-item': bgColor }" flat>
        <v-row class="ma-2">
          <v-card-text class="tab-subtitle" v-html="item.subtitle"></v-card-text>
          <v-card-text v-html="item.description" class="tab-content"></v-card-text>
        </v-row>
        <v-row justify="start" class="ma-2">
          <v-btn :to="item.url" class="button-tab" small color="#217b43">Leia mais</v-btn>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    item: Object,
    bgColor: Boolean
  },
  data: () => ({
    active: null
  })
}
</script>

<style>
.bg-tab-item {
  width: 100%;
  background-color: #f5f5f5 !important;
}

.tab-menu-item {
  height: 100%;
}

.tab-menu-title {
  font-size: 0.8em !important;
  margin-left: 0px !important;
  font-weight: bold;
  color: #217b43 !important;
}

.tab-subtitle {
  padding: 0px !important;
  margin-bottom: 15px;
  font-weight: bold !important;
  font-size: 1.3em !important;
}

.tab-content {
  padding: 0px !important;
  height: 220px;
  overflow-y: auto;
}

.tab-content::-webkit-scrollbar-track {
  background-color: #f4f4f4 !important;
}

.tab-content::-webkit-scrollbar {
  width: 3px;
  background: #f4f4f4 !important;
}

.tab-content::-webkit-scrollbar-thumb {
  background: #217b43 !important;
}

.tab-menu .v-slide-group {
  display: -webkit-box !important;
  border-bottom: 1px solid grey !important;
}

.button-tab {
  color: white !important;
}

@media (max-width: 997px) {
  .tab-content {
    height: 200px;
  }
}
</style>