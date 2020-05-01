<template>
  <v-card class="pa-4" elevation="0">
    <v-row class="px-2">
      <h3>{{title}}</h3>
    </v-row>
    <v-row class="py-7 px-2">
      <v-img max-height="350px" width="100%" height="100%" :src="image"></v-img>
    </v-row>
    <v-card-text class="text-about pa-0" v-html="text"></v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    title: 'Centro de Diagnóstico por Imagem do Hospital e Maternidade Dois Pinheiros – BMD',
    image: '/img/news/1.png',
    text: `<p style="text-align: justify;"><span style="font-size: medium;">O Centro de Diagnóstico por Imagem do Hospital e Maternidade Dois Pinheiros – BMD coloca à disposição o que existe de melhor e mais avançado em tecnologia de Diagnóstico por Imagem. Contamos com Tomografia Computadorizada Multislice, Ressonância Magnética de 1,5T (16 canais), Mamografia Digital, Ultrassonografia e Doppler, Densitometria Óssea, além do Serviço de Radiologia Geral simples e contrastadas.</span></p>
    <p style="text-align: justify;"><span style="font-size: medium;">Um dos diferenciais é a parceria com a Brasil Medicina Diagnóstica (BMD), empresa que hoje conta com vários profissionais renomados no Brasil na área da medicina em diagnóstico por imagem, garantindo assim, mais praticidade, agilidade, segurança em seu exame, com o atendimento que só o Hospital e Maternidade Dois Pinheiros pode oferecer.</span></p>
    <p style="text-align: justify;"><span style="font-size: medium;">Os exames de imagem são realizados com acompanhamento médico e analisados também por radiologistas superespecialistas (por exemplo o neurorradiologista analisa apenas exames de crânio e coluna), sendo muitos deles professores da &nbsp;Universidade Federal de São Paulo (Unifesp).<br>A área destinada ao Centro é de mais de 700 metros quadrados e tem capacidade de realizar mais de 4 mil exames analisados por mês. Com funcionamento em anexo ao Hospital e Maternidade Dois Pinheiros, recebe pacientes internos e externos de forma independente.</span></p>
    <p style="text-align: justify;"><span style="font-size: medium;">A estrutura avançada traz para Sinop e região a alta tecnologia dos equipamentos e médicos especialistas, disponíveis para análise minuciosa dos exames nos melhores centros do mundo. Toda esta estrutura garante um alto nível de satisfação do cliente e agilidade em exames de qualidade.</span></p>
    <p style="text-align: justify;">Duana Centenaro/Black &amp; White Comunicação</p>`
  })
}
</script>

<style>
.text-about {
  font-size: 1.1rem;
}
</style>