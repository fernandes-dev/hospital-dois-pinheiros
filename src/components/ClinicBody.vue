<template>
  <v-sheet class="mx-auto col-sm-9 col-12" elevation="0">
    <div class="center-especiality">
      <v-row v-if="title" class="d-flex justify-start ml-12 pl-5">{{title}}</v-row>
      <v-row v-else class="d-flex justify-start ml-12 pl-5">
        <span class="mr-2">Centro de Especialidades |</span>
        <strong>Corpo Clínico</strong>
      </v-row>
    </div>

    <v-slide-group class center-active show-arrows>
      <v-slide-item
        class="hover-card"
        v-for="(item, i) in items"
        :key="i"
        v-slot:default="{active, toggle}"
      >
        <v-card elevation="0" class="card-doctor" @click="toggle">
          <!-- HOVER -->
          <v-hover v-slot:default="{ hover }">
            <v-img height="250" :src="item.img">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex green v-card--reveal white--text"
                  style="height: 100%;"
                >
                  <v-icon class="social-web" size="40px">mdi-facebook</v-icon>
                  <v-icon class="social-web" size="40px">mdi-twitter</v-icon>
                  <v-icon class="social-web" size="40px">mdi-linkedin</v-icon>
                </div>
              </v-expand-transition>
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-hover>
          <!-- HOVER -->

          <div class="col-12 name-doctor">{{item.name}}</div>
          <div class="col-12 title-doctor">{{item.title}}</div>
          <div class="col-12 descrip-doctor">{{item.description}}</div>
          <v-row class="d-flex justify-end mr-2">
            <v-btn :to="item.url" class="mt-3 view-profile" text small elevation="0">Ver perfil</v-btn>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>


<script>
export default {
  name: 'ClinicBody',
  data() {
    return {
      model: null,
      items: [
        { name: 'Dr. Douglas yanai', title: 'Oftalmologia - CRM 4363', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', url: '#', img: '/img/doctors/1.png' },
        { name: 'Dr. Jorge Yoshiaki Yanai', title: 'Clínico Geral, Ginecologista e Obstetrícia - CRM 1589', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', url: '#', img: '/img/doctors/2.png' },
        { name: 'Dra Anna Letícia S. Yanai', title: 'Pediatra e Hematologia/Oncologia Pediátrica - CRM 4362', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', url: '#', img: '/img/doctors/3.png' },
        { name: 'Dra Anna Letícia S', title: 'Pediatra e Hematologia/Oncologia Pediátrica - CRM 4362', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', url: '#', img: '/img/doctors/3.png' },
      ]
    }
  },
  props: {
    title: String
  }
}
</script>

<style scoped>
.hover-card:hover {
  cursor: default;
}

.social-web {
  color: white !important;
  margin: 5px;
}

.social-web:hover {
  cursor: pointer;
}

.v-card--reveal {
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  width: 100%;
}

.card-doctor {
  width: 265px;
  margin: 20px;
  height: 100%;
}

@media (max-width: 425) {
  .card-doctor {
    width: 241px;
    margin: 0 0 0 7px;
  }
}

@media (max-width: 375px) {
  .card-doctor {
    width: 240px;
    margin: 0 0 0 7px;
  }
}

@media (max-width: 320px) {
  .card-doctor {
    width: 180px;
    margin: 0 0 0 10px;
  }
}

.name-doctor {
  font-size: 1.2em;
  font-weight: bold;
  color: #217b43;
  padding: 8px 0 0 4px !important;
}

.title-doctor {
  font-size: 0.8em;
  font-weight: bold;
  padding: 0 0 0 4px !important;
  margin-top: -4px;
  height: 30px;
}

.descrip-doctor {
  font-size: 0.8em;
  padding: 0 0 0 4px !important;
  margin-top: 12px;
}

.center-especiality {
  font-size: 1.9em;
  margin-bottom: 40px;
  margin-top: 60px;
}

.view-profile {
  text-transform: none !important;
  padding: 4px !important;
  font-weight: bold;
  font-size: 0.9em;
}
</style>