<template>
  <v-card>
    <v-card-title class="title-recents">
      <div class="col-10">Mais recentes</div>
      <div class="d-flex justify-end">
        <v-icon color="white">mdi-bookmark</v-icon>
      </div>
    </v-card-title>
    <v-row>
      <v-card-text v-for="(item, i) in recents" :key="i" class="py-0 card-text-container">
        <v-hover v-slot:default="{ hover }">
          <v-card class="card-recents my-1" :elevation="hover ? 12 : 0" :to="item.path">
            <v-row justify="start" class="row-recents">
              <v-col cols="4" sm="2" md="4" class="py-1">
                <v-img max-width="150px" width="100%" :src="item.image"></v-img>
              </v-col>
              <v-col cols="7" sm="8" class="pa-0 text-recents py-0">
                <v-card-title class="pa-0 release-title">{{item.title}}</v-card-title>
                <v-card-text class="pl-0 release-text" v-html="item.text"></v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-card-text>
    </v-row>
    <v-row justify="end" class="px-5 pb-2">
      <v-btn small v-if="btnViewMore" color="green" :to="viewMoreUrl" text>Ver mais</v-btn>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    recents: Array,
    btnViewMore: Boolean,
    viewMoreUrl: String
  }
}
</script>

<style scoped>
.title-recents {
  background-color: grey;
  padding: 10px 0 10px 14px;
  margin-bottom: 15px;
  color: white;
}

.text-recents {
  padding-top: 10px;
  max-height: 80px;
  overflow: hidden;
}

.release-title {
  padding: 0px;
  font-size: 0.9rem;
  overflow: hidden;
}

.release-text {
  font-size: 0.8rem;
  overflow: hidden;
}

.card-recents {
  max-height: 100px;
}

@media (min-width: 900px) {
  .card-text-container {
    padding-left: 30px;
  }
}

@media (max-width: 942px) {
  .row-recents {
    padding-left: 10px !important;
  }
}
</style>