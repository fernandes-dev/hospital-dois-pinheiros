<template>
  <div>
    <v-footer class="d-flex justify-center" color="#217b43">
      <div class="col-sm-12 col-md-6">
        <div class="d-flex justify-center mb-5 mt-5">
          <img src="/img/landline.png" />
        </div>
        <div class="emergency d-flex justify-center">EM CASO DE EMERGÊNCIA LIGUE</div>
        <div class="phone d-flex justify-center">{{phone}}</div>
        <v-row>
          <v-img src="/img/curve.png" width="100%"></v-img>
        </v-row>
      </div>
      <v-row class="col-lg-8 col-xl-8">
        <v-col class="col-12 col-sm-6 col-md-3" v-for="link in links" :key="link.name">
          <div class="title-footer">{{ link.title }}</div>
          <v-row v-for="item in link.items" :key="item.name">
            <router-link class="items" :to="item.url">
              <span v-if="item.icon">
                <v-icon color="white">{{item.icon}}</v-icon>
              </span>
              <span v-else>&rarr;</span>
              {{item.name}}
            </router-link>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
    <v-row class="copy">
      <div class="copy-text">{{copy}}</div>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: '/img/favicon-white.svg',
      links: [
        {
          items: [
            { name: 'DE OLHO NO FUTURO', url: '#' },
            { name: 'EXPEDIÇÃO XINGU', url: '#' },
            { name: 'PASSOS QUE SALVAM (AVIP)', url: '#' },
            { name: 'OLHAR NO PRÓXIMO', url: '#' },
            { name: 'HOSPITAL DO AMOR (AVIP)', url: '#' },
          ],
          title: 'SOCIAL',
        },
        {
          items: [
            { name: 'ESPAÇO CULTURAL', url: '#' },
            { name: 'BOTICA CULTURAL', url: '#' },
            { name: 'JORNADA DA AMAMENTAÇÃO', url: '#' },
            { name: 'TESTE DO OLHINHO', url: '#' },
            { name: 'NASCI NO DOIS PINHEIROS', url: '#' },
            { name: 'DIA DO BEBÊ', url: '#' },
            { name: 'CURSO DE GESTANTE', url: '#' },
          ],
          title: 'PROJETOS',
        },
        {
          items: [
            { name: 'INTERNAÇÕES', url: '#' },
            { name: 'CENTRO CIRÚRGICO', url: '#' },
            { name: 'CENTRO DE ESPECIALIDADES', url: '#' },
            { name: 'EMERGÊNCIA', url: '#' },
          ],
          title: 'SERVICOS',
        },
        {
          items: [
            { icon: 'mdi-google-maps', name: 'Avenida dos Tarumãs, 995 Centro - Sinop', url: '#' },
            { icon: 'mdi-phone-in-talk', name: '(+55) 66 3517 2300', url: '#' },
          ],
          title: 'ATENDIMENTO',
        }
      ],
      phone: '(66) 3517 2300',
      copy: '© 2020 Hospital Dois Pinheiros - Todos os direitos reservados.'
    }
  }
}
</script>

<style>
.title-footer {
  margin-right: 5%;
  margin-bottom: 20px;
  border-bottom: 1px solid white;
  font-size: 16px;
  font-weight: bold;
  color: white;
}

.items {
  text-decoration: none !important;
  font-size: 10px;
  margin-left: 10px;
  margin-bottom: 6px;
  color: white !important;
}

.emergency {
  color: white;
  font-weight: bolder;
  font-size: 0.8em;
}

.phone {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
}

.copy {
  display: flex;
  justify-content: center;
  height: 65px;
  background-color: #373e4c;
}

.copy-text {
  padding: 10px;
  margin: 10px;
  font-size: 0.8em;
  color: white;
}

body {
  overflow: hidden !important;
}
</style>