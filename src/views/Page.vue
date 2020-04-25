<template>
  <div id="social-pages">
    <SimplePage :text="text" :title="title" :items="items" />
  </div>
</template>

<script>
import SimplePage from '@/components/SimplePage'

export default {
  components: {
    SimplePage
  },
  data: () => ({
    text: `<p> O Grupo Açometal está no mercado a mais de 25 anos, situado em Sinop com duas fábricas com mais de 4.500 mil metros quadrados de área construída a Açometal foi pioneira na industrialização de telhas termoacústica e painel termoacústico no estado de Mato Grosso. A Açometal possui também uma filial em Rondonópolis com uma planta de 5.000 mil metros quadrados para atender todo o estado com excelência e rapidez. Os produtos industrializados são distribuídos para todo o Brasil com forte atuação nos estados de Mato Grosso, Pará, Mato Grosso do Sul Rondônia e Acre. Pensando sempre no desenvolvimento na concepção de projeto, construção e manutenção de todos os tipos de infraestrutura necessários ao bem estar e ao desenvolvimento da sociedade, a Açometal investe forte em tecnologia seus produtos termoacústicos trazem agilidade e economia nas obras reduzindo em 70% do tempo de construção e 30% de custo possibilitando uma obra limpa e ecológica. Além das Telhas e Painéis termoacústicos a Açometal trabalha com toda linha de tubo metalon, perfis, chapas lisas, chapa xadrez, bobina para calha, cantoneiras e telha convencional de metal com várias opções de modelos.</p>`,
    title: "AÇOMETAL 25 ANOS",
    items: [
      {
        id: 1,
        title: "Matriz - Sinop-MT",
        img: "http://www.hospitaldoispinheiros.com.br/images/quem-somos.jpg"
      },
      {
        id: 2,
        title: "Hospital",
        img: "http://www.hospitaldoispinheiros.com.br/images/quem-somos.jpg"
      },
      {
        id: 3,
        title: "Hospital",
        img: "http://www.hospitaldoispinheiros.com.br/images/quem-somos.jpg"
      }
    ]
  })


}
</script>

<style>
</style>