<template>
  <v-dialog persistent v-model="viewed" max-width="1000px">
    <v-card width="100%">
      <v-btn
        class="pa-0"
        fab
        right
        absolute
        elevation="0"
        small
        color="transparent"
        dark
        @click="changeViewed"
      >
        <v-icon class="pa-0" color="red">mdi-close</v-icon>
      </v-btn>
      <!-- <v-card-actions class="d-flex justify-end">
        
      </v-card-actions>-->
      <v-container>
        <v-card-title class="d-flex justify-center pb-0">{{title}}</v-card-title>
        <v-row justify="center" class="pa-6">
          <v-img max-height="250px" :src="img"></v-img>
        </v-row>
        <v-card-text class="text-justify" v-html="text"></v-card-text>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    viewedOrigin: true,
    img: '/img/banners/banner1.png',
    title: 'Instituto de Olhos - Dois Pinheiros',
    text: `A colonoscopia é um exame que permite a visualização direta do interior do reto, cólon e parte do íleo terminal através de um tubo flexível introduzido pelo ânus e que contem em sua extremidade uma minicâmera que transmite imagens coloridas, podendo ser fotografadas ou gravadas em vídeo.

O exame é um dos principais métodos de rastreamento do câncer de cólon e reto. Ele serve também para encontrar pólipos, inflamações, tumores, úlceras e outras alterações.

A colonoscopia exige uma preparação pré-exame, geralmente indicada pelo médico e que consiste no esvaziamento de todos os sólidos do trato gastrointestinal por meio de uma dieta líquida que pode ser realizada por um a três dias antes do procedimento. O paciente também não deverá ingerir líquidos que contenham corantes vermelho ou roxo. O médico ainda pode indicar um laxante ou lavagem se necessários.

É importante que o paciente informe ao médico sobre remédios e suplementos que toma regularmente, além de outras informações relacionadas à sua saúde.

Para o exame o paciente é levemente sedado, em alguns casos a sedação pode ser mais intensa, exigindo que o mesmo fique de repouso após o procedimento, por isso é indicado a presença de um acompanhante.

Para a maioria das pessoas, a colonoscopia de rotina é indicada a partir dos 50 anos de idade. Em casos de histórico familiar de câncer colorretal, doença no intestino ou outros fatores de risco, o médico deve orientar o paciente com relação à frequência com que deve fazer o exame. `,
  }),
  props: {
    viewed: Boolean,
    idModal: Number
  },
  methods: {
    changeViewed() {
      this.$emit("changeViewed", this.viewedOrigin);
    }
  }
};
</script>

<style>
</style>