<template>
  <div>
    <TollBar />
    <v-container>
      <v-card elevation="0">
        <v-card-title class="py-10">
          <h3>Centro de Endoscopia</h3>
        </v-card-title>
        <v-tabs
          slider-color="#217b43"
          show-arrows
          color="#217b43"
          v-model="tab"
          background-color="transparent"
        >
          <v-tab class="tab-menu-title" v-for="(item, i) in items" :key="i">{{ item.title }}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="(item, i) in items" :key="i">
            <v-card flat>
              <v-card-text v-html="item.content"></v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import TollBar from '@/components/ToolBar'
export default {
  components: {
    TollBar
  },
  data: () => ({
    tab: null,
    items: [
      {
        title: 'Colonoscopia',
        content: `A colonoscopia é um exame que permite a visualização direta do interior do reto, cólon e parte do íleo terminal através de um tubo flexível introduzido pelo ânus e que contem em sua extremidade uma minicâmera que transmite imagens coloridas, podendo ser fotografadas ou gravadas em vídeo.

O exame é um dos principais métodos de rastreamento do câncer de cólon e reto. Ele serve também para encontrar pólipos, inflamações, tumores, úlceras e outras alterações.

A colonoscopia exige uma preparação pré-exame, geralmente indicada pelo médico e que consiste no esvaziamento de todos os sólidos do trato gastrointestinal por meio de uma dieta líquida que pode ser realizada por um a três dias antes do procedimento. O paciente também não deverá ingerir líquidos que contenham corantes vermelho ou roxo. O médico ainda pode indicar um laxante ou lavagem se necessários.

É importante que o paciente informe ao médico sobre remédios e suplementos que toma regularmente, além de outras informações relacionadas à sua saúde.

Para o exame o paciente é levemente sedado, em alguns casos a sedação pode ser mais intensa, exigindo que o mesmo fique de repouso após o procedimento, por isso é indicado a presença de um acompanhante.

Para a maioria das pessoas, a colonoscopia de rotina é indicada a partir dos 50 anos de idade. Em casos de histórico familiar de câncer colorretal, doença no intestino ou outros fatores de risco, o médico deve orientar o paciente com relação à frequência com que deve fazer o exame. `
      },
      {
        title: 'Endoscopia',
        content: `A endoscopia é um procedimento utilizado para investigar doenças do esôfago, estômago e duodeno. O exame consiste na introdução de tubos flexíveis pela cavidade oral e anal. A primeira chama-se endoscopia digestiva alta e a segunda, colonoscopia. Por meio desses instrumentos é possível visualizar a mucosa (revestimento interno) do tubo digestivo, realizar uma avaliação detalhada e até pequenas cirurgias e coletar material. 

Com sua evolução, a endoscopia permite examinar ainda as vias biliares e pancreáticas. Entre as doenças que podem ser detectadas por meio do exame está o câncer de estômago, esôfago e intestino grosso.

Durante o exame é aplicado um sedativo intravenoso e em alguns casos usa-se também anestesia local na garganta, a base de xilocaína. Um protetor de boca também poderá ser usado para proteger os dentes do endoscópio.

Após a sedação, é introduzido o endoscópio. A mini câmera irá capturar as imagens que poderão ser acompanhadas pelo médico em tempo real.

A pessoa não sente nenhuma dor devido à sedação. Depois do exame, o paciente deve ficar em repouso por cerca de 30 minutos até passar o efeito do sedativo. É indicado que o paciente esteja acompanhado, pois a sedação o deixará impossibilitado de realizar determinadas atividades ou se locomover sozinho, por exemplo.

O médico deverá recomendar jejum absoluto durante oito a 12 horas antes da endoscopia. Em alguns casos, o paciente será orientado a interromper o uso de medicamentos que diluem o sangue, como aspirinas.

A alimentação permanece normal após a endoscopia.`
      },
      {
        title: 'Manometria Esofágica',
        content: `A Manometria Esofágica é um exame que estuda o funcionamento de todo o esôfago por meio da medição de pressões. As informações são processadas por um computador e formam gráficos, por meio dos quais é possível avaliar se existe alguma doença no paciente.

As informações fornecidas pelo exame servem para diagnosticar doenças próprias do esôfago ou sistêmicas que podem afetar o órgão, em geral após terem sido excluídos males mais comuns por meio da endoscopia. Este exame avalia, principalmente, a função motora do esôfago, a forma como se contrai para fazer progredir o alimento até o estômago e o funcionamento do esfíncter inferior do esôfago, cuja alteração pode determinar várias doenças, sendo a mais comum a Doença do Refluxo. 

Para a realização do exame é feita uma anestesia tópica no nariz (com gel anestésico) e na sequencia introduzida uma sonda também pelo nariz, cuja extremidade distal é colocada dentro do estômago. A passagem da sonda é a parte mais incômoda do exame, podendo causar náusea, tosse e lacrimejamento. A partir daí, a sonda vai sendo retirada lentamente e são realizadas as medições das pressões ao longo de todo esôfago, as quais são transmitidas a um aparelho e, por fim, a um programa no computador. O exame dura em torno de 30 minutos.

O paciente precisa estar em jejum. É recomendado ficar sem alimentação pelo menos seis horas antes do exame. Em alguns casos, pode ser exigido jejum mais prolongado.

O paciente não fica inconsciente, precisa estar acordado, pois necessita colaborar durante o exame. Para uma avaliação adequada, a pessoa tem que manter a capacidade de deglutir (engolir) naturalmente. Durante o exame é solicitado ao paciente que tome alguns goles de água ou que degluta a própria saliva.

A sedação ou anestesia pode prejudicar o exame. Caso o paciente tenha necessitado de sedação ou anestesia para outro procedimento, é recomendado aguardar pelo menos 48h para fazer a manometria.

A principal indicação da manometria é a avaliação da doença do refluxo gastroesofágico, sendo realizada em casos duvidosos ou nos quais se pretende realizar cirurgia. Também sempre deve ser feita, antes da realização do exame, a phmetria esofágica prolongada, para avaliar com precisão o lugar onde deve ser colocado o cateter.

É também indicada na avaliação de pacientes com dor torácica de origem não cardíaca e pacientes com queixa de dificuldade ou de dor à passagem do alimento.

O exame pode não ser feito quando há alguma lesão obstrutiva que impeça a passagem na sonda, seja no nariz, na faringe ou no próprio esôfago ou  quando o próprio paciente não tolera a passagem da sonda, o que é bem raro.

Além desses fatores, não existem outras limitações para realização do exame.

Em geral, é solicitado que o paciente já tenha realizado o exame de endoscopia digestiva alta, para avaliar se há alguma alteração significativa que deve ser levada em consideração durante a manometria.

Não é necessário repouso após o exame. Como a manometria é realizada com o paciente acordado, assim que o exame termina o paciente pode se alimentar, dirigir e trabalhar sem problemas`
      }
    ]
  })
}
</script>

<style>
</style>