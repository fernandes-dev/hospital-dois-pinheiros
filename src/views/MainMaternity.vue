<template>
  <div id="main-maternity">
    <v-container>
      <div class="mt-5 mx-auto text-center">
        <span class="display-1 text-uppercase title-item">
          <b>Maternidade - Dois Pinheiros</b>
        </span>
      </div>
      <v-layout class="mx-auto col-sm-12">
        <v-row>
          <v-col class v-for="item in categories" :key="item.id">
            <v-card
              max-width="100"
              :to="item.router"
              justify-center
              fill-height
              flat
              color="white"
              class="mx-auto"
            >
              <v-img class="pb-3" height="100px" width="100" :src="item.image"></v-img>

              <div class="pt-2">
                <span class="subtitle-card">
                  <b>{{ item.name }}</b>
                </span>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>

export default {
  components: {

  },
  data: () => ({
    categories: [
      {
        id: 1,
        image: "https://abrilbebe.files.wordpress.com/2019/12/gettyimages-519624410.jpg?quality=85&strip=info&resize=680,453",
        name: "Dia do bebê",
        router: "/maternidade/dia-do-bebe"

      },
      {
        id: 2,
        image:
          "https://abrilbebe.files.wordpress.com/2016/09/licenca-paternidade-e-licenca-maternidade.jpg?quality=85&strip=info&resize=680,453",
        name: "Tabela de crescimento",
        router: "/maternidade/tabela-de-crescimento"
      },
      {
        id: 3,
        image:
          "https://s1.static.brasilescola.uol.com.br/img/2019/04/menino-fazendo-barba.jpg",
        name: "Tabela de Tanner",
        router: "/maternidade/tabela-de-tanner"

      },
      {
        id: 4,
        image:
          "https://static.fecam.net.br/thumbs/711/1099664_resize_1500_840.jpg",
        name: "Calendário Vacinal",
        router: "/maternidade/calendario"

      },
      {
        id: 5,
        image:
          "https://samer.com.br/wp-content/uploads/2013/10/maternidade-1.jpg",
        name: "Guia de internação ",
        router: "/maternidade/internacao"

      },
      {
        id: 6,
        image:
          "https://www.santacasaitapira.com.br/wp-content/uploads/2019/06/santa-casa-itapira-curso-gestantes-1000x500.jpg",
        name: "Curso de Gestante",
        router: "/maternidade/curso-de-gestante"

      },

      {
        id: 7,
        image: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia13412/bebes-de-2-anos-cursos-cpt.jpg",
        name: "Dicas",
        router: "/maternidade/tabela-de-crescimento"

      },
    ],
  }),
}
</script>

<style>
</style>