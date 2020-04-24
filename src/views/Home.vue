<template>
  <v-app class="main">
    <Carousel class="mb-10" />
    <v-content class="d-flex justify-center col-8">
      <v-container class="content">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="6"
            class="d-flex justify-start"
            v-for="item in items"
            :key="item.title"
          >
            <div class="icon-topics d-flex justify-center">
              <img :src="item.icon" width="65" />
            </div>
            <div>
              <div class="title-topic">{{item.title}}</div>
              <div class="content-topic">{{item.description}}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <div class="bg-maternity-home">
      <Maternity />
    </div>
    <div class="clinic-body">
      <ClinicBody />
    </div>
    <div class="mural">
      <Mural />
    </div>
    <div class="press-room-home">
      <PressRoom />
    </div>
    <div class="imageclinic-home">
      <ImageClinic />
    </div>
  </v-app>
</template>

<script>
import Carousel from '@/components/Carousel'
import Maternity from '@/components/Maternity'
import ClinicBody from '@/components/ClinicBody'
import ImageClinic from '@/components/ImageClinic'
import Mural from '@/components/Mural'
import PressRoom from '@/components/PressRoom'

export default {
  components: {
    Carousel,
    Maternity,
    ClinicBody,
    Mural,
    PressRoom,
    ImageClinic,
  },
  data: () => ({
    items: [
      { title: 'Internações', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ', icon: '/img/main-icons/ambul.png' },
      { title: 'Emergência', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', icon: '/img/main-icons/cama.png' },
      { title: 'Centro Cirúrgico', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', icon: '/img/main-icons/doctor.png' },
      { title: 'Centro de Especialidades', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', icon: '/img/main-icons/maca-cirurg.png' },
    ]
  })
}
</script>

<style>
.press-room-home {
  background-color: #f5f5f5 !important;
}
.bg-maternity-home {
  border-top: 0.5px solid rgb(184, 184, 184);
  border-bottom: 0.5px solid rgb(184, 184, 184);
  padding-bottom: 40px;
  width: 100%;
  background-color: #f5f5f5 !important;
}

.main {
  width: 100% !important;
}
.topics {
  display: flex !important;
  justify-content: center !important;
}

.icon-topics {
  margin-left: 15px;
  margin-right: 10px;
  width: 65px;
  height: 65px;
}

.content-topic {
  padding: 0px;
  font-size: 0.9em;
}

.title-topic {
  font-size: 1.2em;
  font-weight: bold;
}

.content {
  margin-bottom: 50px;
}

@media (min-width: 800px) {
  .content {
    width: 70%;
  }
}
</style>