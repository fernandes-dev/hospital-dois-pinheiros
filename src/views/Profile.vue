<template>
  <v-container>
    <v-card elevation="0" width="100%" class="d-flex justify-center">
      <v-container class="container-profile col-12">
        <v-row justify="center">
          <v-col cols="11" sm="9" md="4">
            <v-card height="100%">
              <v-img height="100%" :src="profile.img">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="8">
            <v-card flat class="overflow-y-auto text-profile">
              <v-row justify="start pl-3">
                <div class="title-profile">{{profile.name}}</div>
              </v-row>
              <div class="text-justify" v-html="profile.text"></div>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="row-btns" justify="center">
          <v-btn target="blank" :href="profile.facebook" class="ma-5 btn-midia" icon>
            <v-icon color="#217b43" x-large>mdi-facebook</v-icon>
          </v-btn>
          <v-btn target="blank" :href="profile.twitter" class="ma-5 btn-midia" icon>
            <v-icon color="#217b43" x-large>mdi-twitter</v-icon>
          </v-btn>
          <v-btn target="blank" :href="profile.linkedin" class="ma-5 btn-midia" icon>
            <v-icon color="#217b43" x-large>mdi-linkedin</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    profile: {
      name: 'Teste',
      img: '/img/about-history.png',
      text: 'Dr. Douglas Yanai formou-se médico na Universidade Federal do Paraná (UFPR). Fez especialização em Oftalmologia e Fellow em Segmento Anterior e posteriormente em Retina e Vítreo no Hospital de Olhos do Paraná. Nos anos de 2002 e 2003 realizou Retina and Vitreous Fellowship no Doheny Eye Institute - USC (University of Southern California) sob orientação do Dr. Mark S. Humayun e do cientista e PhD James D. Weiland, retornando para Sinop (Brasil) em 2004. Realizou diversas pesquisas e publicou trabalhos científicos em renomadas revistas internacionais, bem como apresentou-os em congressos no Brasil e no exterior. Membro da American Academy of Ophthalmology e Membro Titular da Sociedade Brasileira de Retina e Vítreo, atualmente é  Oftalmologista e Diretor Técnico do Hospital e Maternidade Dois Pinheiros, e também Professor no curso de Medicina da Universidade Federal do Mato Grosso (UFMT) - Campus Sinop.Dr. Douglas Yanai formou-se médico na Universidade Federal do Paraná (UFPR). Fez especialização em Oftalmologia e Fellow em Segmento Anterior e posteriormente em Retina e Vítreo no Hospital de Olhos do Paraná. Nos anos de 2002 e 2003 realizou Retina and Vitreous Fellowship no Doheny Eye Institute - USC (University of Southern California) sob orientação do Dr. Mark S. Humayun e do cientista e PhD James D. Weiland, retornando para Sinop (Brasil) em 2004. Realizou diversas pesquisas e publicou trabalhos científicos em renomadas revistas internacionais, bem como apresentou-os em congressos no Brasil e no exterior. Membro da American Academy of Ophthalmology e Membro Titular da Sociedade Brasileira de Retina e Vítreo, atualmente é  Oftalmologista e Diretor Técnico do Hospital e Maternidade Dois Pinheiros, e também Professor no curso de Medicina da Universidade Federal do Mato Grosso (UFMT) - Campus Sinop.',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    }
  })
}
</script>

<style scoped>
.title-profile {
  font-size: 1.7em;
  font-weight: bold;
  padding-bottom: 10px;
}

.subtitle-profile {
  font-size: 1.7em;
}

.container-profile {
  padding: 10px;
}

.text-profile {
  max-height: 500px;
  padding: 15px;
  padding-top: 0px;
  overflow-y: auto;
}

.text-profile::-webkit-scrollbar {
  width: 3px;
  background: #f4f4f4 !important;
}

.text-profile::-webkit-scrollbar-track {
  background-color: #f4f4f4 !important;
}

.text-profile::-webkit-scrollbar-thumb {
  background: #217b43 !important;
}
.col-profile-text {
  padding: 10px 0;
}
</style>>