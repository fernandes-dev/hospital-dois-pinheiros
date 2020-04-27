<template>
  <v-app>
    <main-header></main-header>

    <v-content>
      <router-view></router-view>
    </v-content>

    <main-footer></main-footer>
  </v-app>
</template>

<script>
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';

export default {
  beforeCreate() {
    // this.$store.dispatch('getAllArticles')
    // this.$store.dispatch('getAllDoubts')
    // this.$store.dispatch('getAllInstitutional')
    // this.$store.dispatch('getAllCustomers')
    // this.$store.dispatch('getAllSlides')
  },
  components: {
    MainHeader,
    MainFooter
  }
};
</script>

<style>
@font-face {
  font-family: AdgetSans;
  src: url("./fonts/adget-sans.ttf");
}
html {
  font-size: 16px;
}
main {
  font-size: 0.875rrem;
  letter-spacing: 0.25px;
}
h1 {
  font-size: 3rrem;
  font-weight: normal;
  letter-spacing: 0px;
}
h2 {
  font-family: AdgetSans;
  font-size: 2.125rrem;
  font-weight: normal;
  letter-spacing: 0.25px;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
}
h3 {
  font-family: AdgetSans, Roboto, sans-serif;
  font-size: 1.5rrem;
  font-weight: normal;
  letter-spacing: 0px;
  margin-bottom: 12px;
}
h3::after {
  content: "";
  display: block;
  height: 2px;
  width: 80px;
}
h4 {
  font-size: 1.25rrem;
  font-weight: medium;
  letter-spacing: 0.15px;
}
h5 {
  font-size: 1rrem;
  font-weight: normal;
  letter-spacing: 0.15px;
}
h6 {
  font-size: 0.875rrem;
  font-weight: medium;
  letter-spacing: 0.1px;
}
.v-carousel .fas.fa-chevron-left,
.v-carousel .fas.fa-chevron-right {
  font-size: 26px !important;
}
.v-expansion-panels .fas.fa-chevron-up,
.v-expansion-panels .fas.fa-chevron-down {
  font-size: 18px !important;
}

.simple-slide .v-slide-group__content {
  display: grid;
  grid-auto-flow: column;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc(100vw - 128px);
}

@media screen and (min-width: 600.001px) and (max-width: 960px) {
  .simple-slide .v-slide-group__content {
    grid-auto-columns: calc((100vw - 125px) / 2);
  }
}
@media screen and (min-width: 960.001px) and (max-width: 1264px) {
  .simple-slide .v-slide-group__content {
    grid-auto-columns: calc((900px - 130px) / 3);
  }
}
@media screen and (min-width: 1264.001px) {
  .simple-slide .v-slide-group__content {
    grid-auto-columns: calc((1185px - 130px) / 3);
  }
}
</style>
