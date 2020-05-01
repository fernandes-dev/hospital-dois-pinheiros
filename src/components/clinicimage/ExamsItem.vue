<template>
  <div>
    <ToolBar />
    <v-container>
      <v-card elevation="0">
        <v-card-title class="pa-2 py-5">
          <h3>{{exam.title}}</h3>
        </v-card-title>
        <v-row>
          <v-col class="py-0 px-4 pb-5" cols="12" sm="5">
            <v-img max-width="600px" height="100%" :src="exam.images[0]"></v-img>
          </v-col>
          <v-col class="py-0" cols="12" sm="7">
            <v-card-text class="text-exam text-justify" v-html="exam.text"></v-card-text>
          </v-col>
        </v-row>
        <v-row class="pa-1 pt-5">
          <v-col cols="4" sm="2" v-for="(image, i ) in exam.images" :key="i">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 12 : 0" @click="index = i, imagesBox = exam.images">
                <v-img width="100%" max-width="300px" :src="image"></v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <TinyBox :loop="true" v-model="index" :images="imagesBox" />
  </div>
</template>

<script>

import ToolBar from '@/components/ToolBar'
import TinyBox from 'vue-tinybox';

export default {
  components: {
    ToolBar,
    TinyBox
  },
  data: () => ({
    index: null,
    imagesBox: [],
    exam: {
      title: 'Titulo do exame',
      text: `A Densitometria Óssea é um exame realizado para  diagnosticar a osteoporose, outras doenças ósseas e avaliar o risco de fraturas.

A osteoporose é uma doença que atinge os ossos, provocando diminuição progressiva da densidade óssea e aumento do risco de fraturas.

O exame consiste na utilização de tecnologia avançada de Raio-X, denominada Absorciometria Radiológica de Dupla Energia. O procedimento é rápido, indolor e recomendado para pessoas com idade superior a 65 anos. Recomenda-se que seja repetido anualmente.
A Densitometria Óssea é um exame realizado para  diagnosticar a osteoporose, outras doenças ósseas e avaliar o risco de fraturas.

A osteoporose é uma doença que atinge os ossos, provocando diminuição progressiva da densidade óssea e aumento do risco de fraturas.

O exame consiste na utilização de tecnologia avançada de Raio-X, denominada Absorciometria Radiológica de Dupla Energia. O procedimento é rápido, indolor e recomendado para pessoas com idade superior a 65 anos. Recomenda-se que seja repetido anualmente.
A Densitometria Óssea é um exame realizado para  diagnosticar a osteoporose, outras doenças ósseas e avaliar o risco de fraturas.

A osteoporose é uma doença que atinge os ossos, provocando diminuição progressiva da densidade óssea e aumento do risco de fraturas.

O exame consiste na utilização de tecnologia avançada de Raio-X, denominada Absorciometria Radiológica de Dupla Energia. O procedimento é rápido, indolor e recomendado para pessoas com idade superior a 65 anos. Recomenda-se que seja repetido anualmente.
A Densitometria Óssea é um exame realizado para  diagnosticar a osteoporose, outras doenças ósseas e avaliar o risco de fraturas.

A osteoporose é uma doença que atinge os ossos, provocando diminuição progressiva da densidade óssea e aumento do risco de fraturas.

O exame consiste na utilização de tecnologia avançada de Raio-X, denominada Absorciometria Radiológica de Dupla Energia. O procedimento é rápido, indolor e recomendado para pessoas com idade superior a 65 anos. Recomenda-se que seja repetido anualmente.`,
      images: [
        '/img/card-clinic-img.png',
        '/img/card-clinic-img.png',
        '/img/card-clinic-img.png',
        '/img/card-clinic-img.png',
        '/img/card-clinic-img.png',
        '/img/card-clinic-img.png',
      ]
    }
  })
}
</script>

<style>
@media (min-width: 600px) {
  .text-exam {
    max-height: 350px;
    overflow-y: auto;
    font-size: 1rem;
  }

  .text-exam::-webkit-scrollbar-track {
    background-color: #f4f4f4 !important;
  }

  .text-exam::-webkit-scrollbar {
    width: 3px;
    background: #f4f4f4 !important;
  }

  .text-exam::-webkit-scrollbar-thumb {
    background: #217b43 !important;
  }
}
</style>