<template>
  <div>
    <ToolBar />
    <v-container class="pb-10">
      <h3>Entre em contato conosco</h3>
      <v-row>
        <v-col cols="12" sm="6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1952.2899458068507!2d-55.50671208750411!3d-11.864652495756808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77fee455bd5a3%3A0xd929793427dc6dfb!2sHospital%20Dois%20Pinheiros!5e0!3m2!1spt-BR!2sbr!4v1588294733357!5m2!1spt-BR!2sbr"
            width="100%"
            height="420"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </v-col>
        <v-col>
          <form class="px-6 pb-5">
            <v-text-field v-model="name" label="Nome" required></v-text-field>
            <v-text-field v-model="email" label="E-mail" required></v-text-field>
            <v-textarea height="100px" no-resize v-model="message" label="Mensagem" required></v-textarea>
            <div class="d-flex justify-end">
              <v-btn elevation="0" color="green" dark small class="mr-4" @click="submit">Enviar</v-btn>
              <v-btn elevation="0" color="green" dark small @click="clear">Limpar</v-btn>
            </div>
          </form>
          <div class="col-12 d-flex">
            <v-icon class="px-4">mdi-phone-in-talk</v-icon>Ligue: (+55) 66 3517 2300
          </div>
          <div class="col-12 d-flex">
            <v-icon class="px-4">mdi-google-maps</v-icon>Endereço: Avenida dos Tarumãs, nº 995, Centro - Sinop/MT
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar';
export default {
  components: {
    ToolBar
  },
  data: () => ({
    name: '',
    email: '',
    message: ''
  }),
  methods: {
    clear() {
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style>
</style>