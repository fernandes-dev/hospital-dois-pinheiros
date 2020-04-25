<template>
  <v-card class="card-doctor" @click="toggle">
    <v-hover v-slot:default="{ hover }">
      <v-img v-if="doctor.image" :src="doctor.image">
        <v-expand-transition v-if="doctor.facebook || doctor.twitter || doctor.linkedin">
          <div v-if="hover" class="d-flex green v-card--reveal white--text" style="height: 100%;">
            <v-btn v-if="doctor.facebook" icon class="ma-2" target="blank" :href="doctor.facebook">
              <v-icon class="social-web" size="40px">mdi-facebook</v-icon>
            </v-btn>
            <v-btn v-if="doctor.twitter" icon class="ma-2" target="blank" :href="doctor.twitter">
              <v-icon class="social-web" size="40px">mdi-twitter</v-icon>
            </v-btn>
            <v-btn v-if="doctor.linkedin" icon class="ma-2" target="blank" :href="doctor.linkedin">
              <v-icon class="social-web" size="40px">mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </v-expand-transition>
      </v-img>
    </v-hover>
    <v-card-title class="name-doctor" v-if="doctor.name">{{doctor.name}}</v-card-title>
    <v-card-subtitle class="title-doctor" v-if="doctor.title" v-html="doctor.title"></v-card-subtitle>
    <v-card-text class="descrip-doctor" v-if="doctor.description" v-html="doctor.description"></v-card-text>
    <v-card-actions class="d-flex justify-end pb-0">
      <v-btn class="view-profile" elevation="0" small :to="'perfil/'+doctor.id">Ver perfil</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardDoctor',
  props: {
    doctor: Object,
    toggle: Function
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

.name-doctor {
  font-size: 1.2em;
  font-weight: bold;
  color: #217b43;
  padding: 5px 10px;
}

.title-doctor {
  font-size: 0.8em;
  font-weight: bold;
  padding: 0 10px;
  margin-top: -4px;
  height: 30px;
}

.descrip-doctor {
  font-size: 0.8em;
  padding: 0 10px;
  margin-top: 12px;
}

.view-profile {
  text-transform: none !important;
  padding: 4px !important;
  font-weight: bold;
  font-size: 0.9em;
  background-color: transparent !important;
}

.card-doctor {
  width: calc(100% - 16px);
  height: 100%;
}
</style>