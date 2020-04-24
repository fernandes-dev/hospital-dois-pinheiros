<template>
  <v-container class="content-imgclinic col-12 col-sm-8 bg-imgclinic">
    <div class="imageclinic d-flex justify-center">
      <img src="/img/logo-diagn-img.png" width="300px" />
    </div>
    <v-row>
      <v-tabs
        class="tab-imageclinic"
        v-model="active"
        color="#217b43"
        background-color
        slider-color="#217b43"
        show-arrows
        centered
      >
        <v-tab class="tab-title" v-for="item in items" :key="item.title" ripple>{{ item.title }}</v-tab>

        <v-tabs-items v-model="active">
          <v-tab-item
            class="pt-10 bg-imgclinic imageclinic-item"
            v-for="(item) in items"
            :key="item.subtitle"
          >
            <v-row>
              <v-col cols="12" sm="6">
                <v-img width="600px" max-height="300px" :src="item.img">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card class="bg-imgclinic" flat>
                  <v-row class="ma-2">
                    <v-card-text class="tab-subtitle">{{ item.subtitle }}</v-card-text>
                    <v-card-text class="tab-content">{{ item.description }}</v-card-text>
                  </v-row>
                  <v-row justify="start" class="ma-2">
                    <v-btn class="button-tab" small color="#217b43">Leia mais</v-btn>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Maternity',
  data() {
    return {
      active: null,
      items: [
        { title: 'Saiba Mais', subtitle: 'Imagem Dois Pinheiros', url: '#', img: '/img/card-clinic-img.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Exames Realizados', subtitle: 'Internação, veja como funciona', url: '#', img: '/img/card-clinic-img.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Convênios', subtitle: 'Saiba como ter uma gestação saudável', url: '#', img: '/img/card-clinic-img.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { title: 'Resultados de Exames', subtitle: 'Veja o que fazer a cada semana de gestação', url: '#', img: '/img/card-clinic-img.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      ]
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

<style scoped>
.bg-imgclinic {
  width: 100%;
}

.imageclinic-item {
  height: 100%;
}

.tab-title {
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
}

.tab-imageclinic .v-slide-group {
  display: -webkit-box !important;
  border-bottom: 1px solid grey !important;
}

.button-tab {
  color: white !important;
}

.imageclinic {
  margin: 60px 0 30px 0px;
}

.content-imgclinic {
  margin-bottom: 60px;
}
</style>