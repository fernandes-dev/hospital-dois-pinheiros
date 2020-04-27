<template>
  <div>
    <div class="history">
      <History />
    </div>
    <div class="who-we-are">
      <v-row>
        <v-card elevation="0" width="100%" class="d-flex justify-center card-who">
          <div class="container-about col-12 col-sm-9">
            <v-row class="col-12" justify="start">
              <v-col cols="auto">
                <div class="title-about">{{title}}</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="11" sm="12" md="7" class="text-about">
                <div v-html="text"></div>
              </v-col>
              <v-col class="col-img-who" cols="12" sm="11" md="5">
                <v-card elevation="4">
                  <v-img height="100%" width="100%" max-height="300px" src="/img/who-we.png">
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-row>
    </div>
    <div class="clinic-body">
      <ClinicBody class="container" :title="'Conheça Nossos Especialistas'" />
    </div>
    <div class="structure">
      <Structure :items="structureItems" :title="'Estrutura'" />
    </div>
    <div class="guide">
      <Guide :title="titleGuide" :text="textGuide" :items="itemsDics" />
    </div>
    <div class="waste">
      <v-row justify="center">
        <v-card class="col-12 col-sm-9 mb-10">
          <v-col>
            <v-row justify="center" class="d-flex justify-center">
              <div class="title-waste">{{titleWaste}}</div>
            </v-row>
            <v-row justify="center">
              <v-col cols="12">
                <div class="text-waste" v-html="textWaste"></div>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
import History from '@/components/History'
import ClinicBody from '@/components/ClinicBody'
import Structure from '@/components/Structure'
import Guide from '@/components/Guide'


export default {
  name: 'About',
  components: {
    History,
    ClinicBody,
    Structure,
    Guide
  },
  data() {
    return {
      titleWaste: 'Destinação de Resíduos',
      textWaste: `
        <p>
        A responsabilidade ambiental é um dos pilares do Hospital Dois Pinheiros, prova disso são as ações efetivas na coleta e destinação dos resíduos hospitalares produzidos. O Hospital segue à regra o Plano de Gerenciamento de Resíduos de Serviços de Saúde, conjunto de procedimentos que exige o correto gerenciamento dos resíduos produzidos.
        </p>
        <p>
        Em parceria com a Máxima Ambiental, empresa responsável por dar a destinação correta do lixo gerado, o Hospital Dois Pinheiros preocupa-se em coletar e separar adequadamente cada tipo de resíduo.
        </p>
        <p>
        A efetivação do Plano consiste na análise, organização da forma correta de manuseio de cada resíduo, geração e destinação final, seguindo a legislação.
        </p>
      `,
      titleGuide: 'Guia de Internação',
      itemsDics: [
        {          title: `Para realizar a internação é necessária a apresentação dos seguintes documentos:`, text: `
          <p> * RG e CPF do paciente e do acompanhante </p>
          <p> * Cartão do convênio (quando conveniado) </p>
          <p> * Solicitação de internação (fornecido pelo médico) </p>
          <p> * Informar dados pessoais como endereço e telefone </p>
        ` }
      ],
      textGuide: `
        <p>
        O momento da internação exige alguns cuidados necessários para evitar contratempos. Pensando nisso, o Hospital e Maternidade Dois Pinheiros disponibiliza um Guia de Internação para que tudo ocorra da maneira mais tranquila possível.
        </p>
        <p> 
        Confira algumas dicas para evitar imprevistos na internação: 
        </p>
      `,
      title: 'Quem somos',
      img: '',
      text:
        `<p>O Hospital e Maternidade Dois Pinheiros foi fundado em 1979, com recursos próprios, e inaugurado em dezembro daquele ano, no município de Sinop, em Mato Grosso, na época distrito de Chapada dos Guimarães. Seus idealizadores foram Dr. Jorge Yanai e Dr. Astrogildo de Oliveira.</p>
        <p>Foi criado como um Hospital Geral, com finalidades preventivas e curativas, conforme os recursos da época. Hoje, melhor estruturado, com corpo clínico ampliado, mantém o mesmo objetivo, porém, está aberto a novas idéias.</p>
        <p>Com fins lucrativos, os recursos financeiros são reaplicados na própria estrutura funcional, beneficiando com isso a segurança e o bem estar da população.  Atualmente, a empresa é gerida pelos empresários Jorge Yanai, Douglas Yanai e Anna Letícia Yanai.</p>`
      ,
      structureItems: [
        {
          title: 'Sala de Vacinas',
          icon: 'needle',
          text:
            `<p>Para facilitar o processo de prevenção de doenças do bebê, crianças, adultos e idosos, oferecer mais conforto e confiabilidade, o Hospital e Maternidade Dois Pinheiros conta com uma completa Clínica de Vacinas, um centro credenciado em imunização.</p>
            <p>As vacinas disponíveis são produzidas por centros especializados e incluem também as vacinas contra Catapora (varicela), Hepatite A e HPV (vírus responsável por casos de câncer do cólo uterino), disponíveis apenas em clínicas particulares.</p>
            <p>Todo o material de imunização é armazenado conforme recomendações da Vigilância Sanitária, obedecendo a padrões de higiene e controle de temperatura.</p>
            <p>Para saber mais, entre em contato pelo telefone 9988 0237.</p>`

        },
        {
          title: 'Centro de Diagnóstico por Imagem',
          icon: 'folder-image',
          text:
            `<p>A fim de modernizar o atendimento, o Hospital Dois Pinheiros dispõe de Centro de Diagnóstico por Imagem com estrutura própria e independente em anexo. Nele são realizados exames como Ressonância Nuclear Magnética, Tomografia Axial Computadorizada, Mamografia Digital, Radiografia e Ultrassonografia.</p>`

        },
        {
          title: 'Centro Cirúrgico',
          icon: 'content-cut',
          text:
            `<p>O Centro Cirúrgico do Hospital Dois Pinheiros toma algumas medidas preventivas para garantir a segurança do paciente e excelência dos procedimentos cirúrgicos realizados. Dentre elas estão o agendamento de cirurgia, recepção do paciente, check-in no Centro Cirúrgico e verificação de eventuais problemas com materiais, equipamentos ou horários.</p>`

        },
        {
          title: 'Banco de Sangue',
          icon: 'invert-colors',
          text:
            `<p>É o setor responsável pela coleta, armazenamento e transfusão de sangue e/ou seus componentes nos pacientes em tratamento. A doação de sangue pode salvar uma vida, por isso, em breve, o Banco de Sangue contará com equipe de profissionais qualificados para desempenhar essas atividades com a excelência pela qual o Hospital Dois Pinheiros é conhecido.</p>`

        },
        {
          title: 'Unidade de Terapia Intensiva (UTI)',
          icon: 'stethoscope',
          text:
            `<p>A UTI surgiu da necessidade de oferecer um suporte maior para pacientes em estado potencialmente grave, que com atendimento intensivo tenham capacidade de se recuperar. Em breve, o Hospital e Maternidade Dois Pinheiros terá  dez leitos com unidade completa em ambiente reservado que oferece monitoria e vigilância para seus pacientes por meio de equipe multidisciplinar disponível 24h. Atualmente, existem dois leitos de estabilização para cuidados intensivos.</p>
          `
        },
        {
          title: 'Internação',
          icon: 'heart',
          text:
            `<p>A preocupação do Hospital e Maternidade Dois Pinheiros é oferecer um atendimento humanitário, acolhendo pacientes e acompanhantes com toda a atenção que merecem. Quanto às acomodações, podem ser: quarto ou suíte, todas com itens de conforto como frigobar, ar-condicionado e internet.</p>`

        },
        {
          title: 'Conheça nossa estrutura',
          icon: 'home-modern',
          text:
            `<p>O Hospital e Maternidade Dois Pinheiros trabalha para oferecer o melhor atendimento aos seus pacientes, tudo isso em ambiente humanizado e confortável. Com mais de 20 anos de atuação tornou-se Hospital de referência em Sinop e região.</p>
            <p>Atualmente realiza procedimentos cirúrgicos de média e alta complexidade e tratamento clínico infantil e adulto. Além disso, conta com Leitos de Estabilização, completa Sala de Vacinas, Cento de Diagnóstico por Imagem e Pronto Atendimento com plantão de 24 horas. Para o próximo ano contará também com Unidades de Terapia Intensiva e Banco de Sangue.</p>`

        },
      ]
    }
  }
}
</script>

<style scoped>
.history {
  margin-bottom: 50px;
}
.clinic-body {
  margin-bottom: 80px;
}
.title-waste {
  font-size: 1.9rem;
  padding-bottom: 5px;
}

.text-waste {
  font-size: 1.1rem;
}

.title-about {
  font-size: 1.7rem;
  font-weight: bold;
}

.subtitle-about {
  font-size: 1.7rem;
}

.container-about {
  padding: 10px;
}

.text-about {
  padding: 10px 0 0 25px;
}

.card-who {
  background-color: #f5f5f5 !important;
}

.structure {
  background-color: #f5f5f5 !important;
}
.col-img-who {
  padding: 0 20px;
}
</style>