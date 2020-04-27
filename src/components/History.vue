<template>
  <v-row>
    <v-card elevation="0" width="100%" class="d-flex justify-center">
      <v-container class="container-history col-12 col-sm-9">
        <v-row class="col-12" justify="start">
          <v-col cols="auto">
            <div class="title-history">{{title}}</div>
          </v-col>
          <v-col cols="auto">
            <div class="subtitle-history">
              <strong>|</strong>
              {{subtitle}}
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="11" sm="9" md="5">
            <v-card>
              <v-img height="100%" width="100%" max-height="300px" src="/img/about-history.png">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="11" sm="9" md="7">
            <v-card class="text-history overflow-y-auto">
              <div v-html="text"></div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'History',
  data() {
    return {
      title: 'História',
      subtitle: 'Três décadas transformando vidas',
      img: '',
      text:
        `<p> Em 1979 a avenida dos Tarumãs era o limite de Sinop. Dela em direção a Cuiabá só se via mato. Em direção ao centro da cidade tinham algumas casas em meio ao barro nas ruas inacabadas. Foi na esquina da avenida com a rua das Orquídeas que os médicos Jorge Yanai e Astrogildo Oliveira decidiram construir o Hospital e Maternidade Dois Pinheiros, que hoje é referência para a região Norte de Mato Grosso. </p>
        <p>Jorge Yanai conta que não via dificuldades em construir um hospital em uma área ainda desabitada. Enxergava o futuro e esperava o desenvolvimento da cidade.<p/>
        <p>“Quando conheci Sinop vi um potencial enorme e decidi investir aqui. Só que a cidade estava em formação e tive que usar um estratagema para convencer minha esposa vir. Peguei uma foto de Campo Grande e disse que era Sinop. Ela gostou e veio. Levou um susto, mas não se arrependeu”, lembra bem humorado. <p/>
        <p> Outra história real que parece anedótica foi em relação à doação do terreno para a construção do Hospital Dois Pinheiros. Segundo Yanai, o colonizador, Ênio Pipino, ficou espantado com o pedido. </p>
        <p>“Seu Ênio me pediu que espaço eu precisava para construir o hospital. Disse que uma quadra era o suficiente. Ele se espantou com o pedido. É que eu não sabia que se tratava de uma super quadra como são todas aqui em Sinop”, explica.',
        'O fato é que a área foi doada. O Hospital Dois Pinheiros foi construído, foi o primeiro a atender pelo INAMPS em 1981 (atual SUS) e já contribuiu para melhorar a qualidade de vida de milhares de pessoas.</p>
        <p>“Já fizemos mais de 22 mil partos no Hospital Dois Pinheiros. É uma parte considerável de ‘filhos’ que temos em uma cidade com 115 mil habitantes. São coisas como essas que nos enchem de orgulho e que nos dão motivação para melhorarmos sempre”, finaliza o diretor técnico, Douglas Yanai.</p>`
    }
  }
}
</script>

<style scoped>
.title-history {
  font-size: 1.7rem;
  font-weight: bold;
}

.subtitle-history {
  font-size: 1.7rem;
}

.container-history {
  padding: 10px;
}

.text-history {
  max-height: 300px;
  padding: 10px;
}

.text-history::-webkit-scrollbar-track {
  background-color: #f4f4f4 !important;
}

.text-history::-webkit-scrollbar {
  width: 3px;
  background: #f4f4f4 !important;
}

.text-history::-webkit-scrollbar-thumb {
  background: #217b43 !important;
}
.col-history-text {
  padding: 10px 0;
}
</style>