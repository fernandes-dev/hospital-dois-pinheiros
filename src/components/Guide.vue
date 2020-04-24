<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8">
      <v-row justify="start" class="col-12">
        <div class="title-guide">{{title}}</div>
      </v-row>

      <!-- drop items -->
      <v-row justify="center" class="pb-10">
        <v-col>
          <div class="text-guide" v-html="text"></div>
        </v-col>
        <v-col class="col-dropdown" cols="12" sm="7">
          <v-row>
            <v-col cols="12" sm="12" class="col-dics">
              <v-expansion-panels accordion focusable>
                <v-expansion-panel v-for="(item,i) in items" :key="i">
                  <v-expansion-panel-header>
                    <v-row>
                      <v-col cols="11" class="dics-header d-flex justify-start">
                        <strong>{{item.title}}</strong>
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
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Guide',
  props: {
    title: String,
    text: String,
    items: Array
  },
  data: () => ({

  }),
}
</script>

<style  scoped>
.col-dics {
  padding: 20px;
}

.dics-header {
  padding: 0px !important;
}

.title-dics {
  font-size: 2em;
  font-weight: bold;
  padding: 20px;
}

.col-img {
  padding: 20px;
}

.text-guide {
  font-size: 1.1em;
  padding: 15px;
  padding-bottom: 0px;
}

.title-guide {
  font-size: 1.9em;
  padding: 20px;
}

.col-dropdown {
  padding: 0px !important;
}
</style>