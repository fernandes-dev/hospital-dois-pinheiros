<template>
  <v-container class="col-12 col-sm-9" :class="{ 'bg-tab-menu': bgColor }">
    <div class="tab-menu-img d-flex justify-center">
      <img :src="image" width="300px" />
    </div>

    <v-tabs
      v-model="active"
      color="#217b43"
      background-color="transparent"
      slider-color="#217b43"
      show-arrows
      centered
    >
      <v-tab class="tab-menu-title" v-for="(item, i) in items" :key="i" ripple>{{ item.title }}</v-tab>

      <v-tabs-items v-model="active">
        <v-tab-item
          class="pt-10 tab-menu-item"
          :class="{ 'bg-tab-menu': bgColor }"
          v-for="(item, i) in items"
          :key="i"
        >
          <TabItem :bgColor="bgColor" :item="item" />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-container>
</template>

<script>

import TabItem from '@/components/TabItem'

export default {
  name: 'TabMenu',
  components: {
    TabItem
  },
  props: {
    items: Array,
    image: String,
    bgColor: Boolean
  },
  data() {
    return {
      active: null,
    }
  },
  methods: {
    next() {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  }
}
</script>

<style >
.bg-tab-menu {
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

.tab-menu-subtitle {
  padding: 0px !important;
  margin-bottom: 15px;
  font-weight: bold !important;
  font-size: 1.3em !important;
}

.tab-menu-content {
  padding: 0px !important;
  height: 220px;
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