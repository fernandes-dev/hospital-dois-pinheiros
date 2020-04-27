<template>
  <v-container>
    <Institutional :categories="categories" :logo="logo" />
  </v-container>
</template>

<script>

import Institutional from '@/components/Institutional'

export default {
  components: {
    Institutional
  },
  data: () => ({
    logo: '/img/maternity.png',
    categories: [
      {
        id: 1,
        img: "https://abrilbebe.files.wordpress.com/2019/12/gettyimages-519624410.jpg?quality=85&strip=info&resize=680,453",
        name: "Dia do bebê",
        path: "/maternidade/dia-do-bebe"

      },
      {
        id: 2,
        img:
          "https://abrilbebe.files.wordpress.com/2016/09/licenca-paternidade-e-licenca-maternidade.jpg?quality=85&strip=info&resize=680,453",
        name: "Tabela de crescimento",
        path: "/maternidade/tabela-de-crescimento"
      },
      {
        id: 3,
        img:
          "https://s1.static.brasilescola.uol.com.br/img/2019/04/menino-fazendo-barba.jpg",
        name: "Tabela de Tanner",
        path: "/maternidade/tabela-de-tanner"

      },
      {
        id: 4,
        img:
          "https://static.fecam.net.br/thumbs/711/1099664_resize_1500_840.jpg",
        name: "Calendário Vacinal",
        path: "/maternidade/calendario"

      },
      {
        id: 5,
        img:
          "https://samer.com.br/wp-content/uploads/2013/10/maternidade-1.jpg",
        name: "Guia de internação ",
        path: "/maternidade/internacao"

      },
      {
        id: 6,
        img:
          "https://www.santacasaitapira.com.br/wp-content/uploads/2019/06/santa-casa-itapira-curso-gestantes-1000x500.jpg",
        name: "Curso de Gestante",
        path: "/maternidade/curso-de-gestante"

      },

      {
        id: 7,
        img: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia13412/bebes-de-2-anos-cursos-cpt.jpg",
        name: "Dicas",
        path: "/maternidade/tabela-de-crescimento"

      },
    ],
  }),
}
</script>

<style scoped>
</style>