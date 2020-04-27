<template>
  <v-row>
    <v-col cols="12" sm="12" md="6">
      <v-img width="600px" height="340px" :src="item.img">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
    <v-col cols="12" sm="12" md="6">
      <v-card :class="{ 'bg-tab-item': bgColor }" flat>
        <v-card-text v-html="item.text" class="tab-content text-justify"></v-card-text>

        <v-card-actions class="d-flex justify-end">
          <v-btn :to="item.path" class="button-tab" small color="#217b43">Leia mais</v-btn>
        </v-card-actions>
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

<style >
.bg-tab-menu {
  width: 100%;
  background-color: #f5f5f5 !important;
}

.bg-tab-item {
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

.tab-content {
  padding: 0px !important;
  height: 300px;
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
}

.tab-menu .v-slide-group__wrapper {
  display: -webkit-box !important;
  border-bottom: 1px solid grey !important;
}

.button-tab {
  color: white !important;
}

.tab-menu-img {
  margin: 30px;
}
</style>