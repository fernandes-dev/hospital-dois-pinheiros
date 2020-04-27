<template>
  <TabMenu :bgColor="true" :items="items" :image="logo" />
</template>

<script>

import TabMenu from '@/components/TabMenu'

export default {
  name: 'Maternity',
  components: {
    TabMenu
  },
  data() {
    return {
      logo: '/img/maternity.png',
      active: null,
      items: [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img: "https://abrilbebe.files.wordpress.com/2019/12/gettyimages-519624410.jpg?quality=85&strip=info&resize=680,453",
          title: "Dia do bebê",
          path: "/maternidade/dia-do-bebe"

        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img:
            "https://abrilbebe.files.wordpress.com/2016/09/licenca-paternidade-e-licenca-maternidade.jpg?quality=85&strip=info&resize=680,453",
          title: "Tabela de crescimento",
          path: "/maternidade/tabela-de-crescimento"
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img:
            "https://s1.static.brasilescola.uol.com.br/img/2019/04/menino-fazendo-barba.jpg",
          title: "Tabela de Tanner",
          path: "/maternidade/tabela-de-tanner"

        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img:
            "https://static.fecam.net.br/thumbs/711/1099664_resize_1500_840.jpg",
          title: "Calendário Vacinal",
          path: "/maternidade/calendario"

        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img:
            "https://samer.com.br/wp-content/uploads/2013/10/maternidade-1.jpg",
          title: "Guia de internação ",
          path: "/maternidade/internacao"

        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img:
            "https://www.santacasaitapira.com.br/wp-content/uploads/2019/06/santa-casa-itapira-curso-gestantes-1000x500.jpg",
          title: "Curso de Gestante",
          path: "/maternidade/curso-de-gestante"

        },

        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          img: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia13412/bebes-de-2-anos-cursos-cpt.jpg",
          title: "Dicas",
          path: "/maternidade/tabela-de-crescimento"

        },
      ]
    }
  },
  methods: {
    next() {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  }
}
</script>

<style >
</style>