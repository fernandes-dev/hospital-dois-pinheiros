<template>
  <v-sheet class="bg-press-room d-flex align-center flex-column">
    <v-row class="center-especiality" v-if="title" v-html="title"></v-row>
    <v-row v-else class="d-flex justify-start ml-12 pl-5 center-especiality">
      <span class="mr-2">Centro de Especialidades |</span>
      <strong>Corpo Clínico</strong>
    </v-row>

    <v-slide-group class="simple-slide" show-arrows>
      <v-slide-item
        class="hover-card mx-2"
        v-for="(doctor, i) in doctors"
        :key="i"
        v-slot:default="{active, toggle}"
      >
        <CardDoctor :toggle="toggle" :doctor="doctor" />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>


<script>

import CardDoctor from '@/components/CardDoctor'

export default {
  name: 'ClinicBody',
  components: {
    CardDoctor
  },
  data() {
    return {
      model: null,
      doctors: [
        { id: 1, name: 'Dr. Douglas yanai', title: 'Oftalmologia - CRM 4363', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', url: '#', image: '/img/doctors/1.png', facebook: 'https://facebook.com', twitter: 'https://twitter.com', linkedin: 'https://linkedin' },
        { id: 2, name: 'Dr. Jorge Yoshiaki Yanai', title: 'Clínico Geral, Ginecologista e Obstetrícia - CRM 1589', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', url: '#', image: '/img/doctors/2.png', facebook: 'https://facebook.com', twitter: 'https://twitter.com', linkedin: 'https://linkedin' },
        { id: 3, name: 'Dra Anna Letícia S. Yanai', title: 'Pediatra e Hematologia/Oncologia Pediátrica - CRM 4362', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', url: '#', image: '/img/doctors/3.png', facebook: 'https://facebook.com', twitter: 'https://twitter.com', linkedin: 'https://linkedin' },
        { id: 4, name: 'Dr. Douglas yanai', title: 'Oftalmologia - CRM 4363', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', url: '#', image: '/img/doctors/1.png', facebook: 'https://facebook.com', twitter: 'https://twitter.com', linkedin: 'https://linkedin' },
        { id: 5, name: 'Dr. Jorge Yoshiaki Yanai', title: 'Clínico Geral, Ginecologista e Obstetrícia - CRM 1589', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', url: '#', image: '/img/doctors/2.png', facebook: 'https://facebook.com', twitter: 'https://twitter.com', linkedin: 'https://linkedin' },
        { id: 6, name: 'Dra Anna Letícia S. Yanai', title: 'Pediatra e Hematologia/Oncologia Pediátrica - CRM 4362', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', url: '#', image: '/img/doctors/3.png', facebook: 'https://facebook.com', twitter: 'https://twitter.com', linkedin: 'https://linkedin' },
        { id: 7, name: 'Dr. Douglas yanai', title: 'Oftalmologia - CRM 4363', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', url: '#', image: '/img/doctors/1.png', facebook: 'https://facebook.com', twitter: 'https://twitter.com', linkedin: 'https://linkedin' },
        { id: 8, name: 'Dr. Jorge Yoshiaki Yanai', title: 'Clínico Geral, Ginecologista e Obstetrícia - CRM 1589', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', url: '#', image: '/img/doctors/2.png', facebook: 'https://facebook.com', twitter: 'https://twitter.com', linkedin: 'https://linkedin' },
        { id: 9, name: 'Dra Anna Letícia S. Yanai', title: 'Pediatra e Hematologia/Oncologia Pediátrica - CRM 4362', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', url: '#', image: '/img/doctors/3.png', facebook: 'https://facebook.com', twitter: 'https://twitter.com', linkedin: 'https://linkedin' },
      ]
    }
  },
  props: {
    title: String
  }
}
</script>

<style scoped>
.center-especiality {
  font-size: 1.9rem;
  margin-bottom: 20px;
  margin-top: 40px;
  padding: 0 80px;
}
</style>