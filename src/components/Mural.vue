<template>
  <div class="mural-main">
    <v-row class="mural-content">
      <v-img
        height="100%"
        width="100%"
        class="mural-card"
        v-for="(item, i) in items"
        :key="i"
        :src="item.img"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
        <v-hover v-if="item.url.length >2 " v-slot:default="{ hover }">
          <v-img :src="item.img">
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex green v-card--reveal white--text"
                style="height: 100%;"
              >
                <v-btn icon dark class="mb-10 btn-eye" small :to="item.url">
                  <v-icon color="white" size="40px">mdi-eye</v-icon>
                </v-btn>
              </div>
            </v-expand-transition>
          </v-img>
        </v-hover>
      </v-img>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { img: '/img/mural/1.png', url: '#' },
        { img: '/img/mural/2.png', url: '###' },
        { img: '/img/mural/3.png', url: '#' },
        { img: '/img/mural/4.png', url: '###' },
        { img: '/img/mural/5.png', url: '#' },
        { img: '/img/mural/6.png', url: '###' },
        { img: '/img/mural/7.png', url: '#' },
        { img: '/img/mural/8.png', url: '###' },
        { img: '/img/mural/9.png', url: '#' },
        { img: '/img/mural/10.png', url: '###' },
        { img: '/img/mural/11.png', url: '#' },
        { img: '/img/mural/12.png', url: '###' },
        { img: '/img/mural/13.png', url: '#' },
        { img: '/img/mural/14.png', url: '###' },
      ]
    }
  }
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  width: 100%;
}

.view-mural:hover {
  cursor: pointer;
}

.mural-main {
  margin-top: 80px;
}
.mural-content {
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #217b43;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
}

.mural-card {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0 !important;
  font-size: 30px;
  text-align: center;
  height: 200px;
}

@media (max-width: 425px) {
  .mural-content {
    display: grid;
    grid-template-columns: auto auto auto;
  }
}

@media (max-width: 375px) {
  .mural-content {
    display: grid;
    grid-template-columns: auto auto;
  }
}

@media (max-width: 320px) {
  .mural-content {
    display: grid;
    grid-template-columns: auto auto;
  }
}
</style>