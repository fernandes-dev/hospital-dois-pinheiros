<template>
  <TabMenu :bgColor="true" :items="items" :image="'/img/maternity.png'" />
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
      active: null,
      items: [
        {
          title: 'Saiba Mais',
          subtitle: 'Mais de 20 Mil nascimentos em 40 anos',
          url: '#',
          img: '/img/card-image.png',
          description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        `
        },
        {
          title: 'Internação',
          subtitle: 'Internação, veja como funciona',
          url: '#',
          img: '/img/card-image.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          title: 'Dicas',
          subtitle: 'Saiba como ter uma gestação saudável',
          url: '#',
          img: '/img/card-image.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          title: 'Calendários',
          subtitle: 'Veja o que fazer a cada semana de gestação',
          url: '#',
          img: '/img/card-image.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          title: 'Tabelas',
          subtitle: 'Consulte as tabelas de gravidez',
          url: '#',
          img: '/img/card-image.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          title: 'Recém Nascidos',
          subtitle: 'Todos os bebês nascidos este mês',
          url: '#',
          img: '/img/card-image.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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