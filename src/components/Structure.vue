<template>
  <v-row justify="center" class="pt-5 pb-10">
    <v-col cols="12" sm="10" md="9">
      <v-row class="col-12 title-card" justify="start">
        <div class="title-structure">{{title}}</div>
      </v-row>
      <v-row>
        <v-col cols="12" sm="5" class="col-img">
          <v-card elevation="4">
            <v-img width="100%" height="390px" max-height="400px" src="/img/about-history.png">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="7" class="col-structure">
          <v-expansion-panels accordion focusable>
            <v-expansion-panel v-for="(item,i) in items" :key="i">
              <v-expansion-panel-header>
                <v-row>
                  <v-col cols="10" class="structure-header d-flex justify-start">
                    <strong>{{item.title}}</strong>
                  </v-col>
                  <v-col class="structure-header d-flex justify-end pr-5">
                    <v-icon color="#217b43">mdi-{{item.icon}}</v-icon>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="mt-2" v-html="item.text"></div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Structure',
  props: {
    items: Array,
    title: String
  }
}
</script>

<style  scoped>
.col-structure {
  padding-top: 20px;
  margin: 0px 0px 0px 0px;
}

.structure-header {
  padding: 0px !important;
}

.title-structure {
  font-size: 1.9em;
  padding: 20px;
}

.col-img {
  padding: 20px;
  width: 100%;
}
</style>