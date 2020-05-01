<template>
  <div>
    <ToolBar />
    <div>
      <v-row justify="center">
        <div class="col-11 col-sm-10">
          <v-card-title>
            <h3>Vacinas</h3>
          </v-card-title>
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <div class="text-justify" v-html="text"></div>
            </v-col>

            <v-col cols="12" sm="12" md="6">
              <v-card class="d-flex justify-center">
                <v-list width="100%">
                  <v-list-item-group color="primary">
                    <v-list-item v-for="(vaccine, i) in vaccines" :key="i">
                      <v-list-item-content>
                        <v-list-item-title v-text="vaccine.title"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-row>
      <v-row justify="center">
        <div class="col-11 col-sm-10">
          <h3 class="pt-10 pb-10">Calendário Vacinal</h3>
          <v-expansion-panels :value="0">
            <v-expansion-panel v-for="(item,i) in desserts" :key="i">
              <v-expansion-panel-header>
                <h4>{{item.title}}</h4>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card class="card-table" elevation="0">
                  <v-card-text v-html="item.table"></v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>

import ToolBar from '@/components/ToolBar'
import Desserts from '../plugins/Desserts'

export default {
  components: {
    ToolBar
  },
  data: () => ({
    search: '',
    headers: [
      {
        text: 'Vacinas e Imumoglobulinas recomendadas no primeiro ano de vida',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Esquemas e recomendações', value: 'esquemas' },
      { text: 'Comentários', value: 'comentarios' },
    ],
    desserts: Desserts.Calendario(),
    vaccines: [
      { title: ' Hepatite B' },
      { title: ' Sabin ou Salk (Poliomelite)' },
      { title: ' Tríplice (DPT – Difteria, Pertusse ou Coqueluche e Tétano)' },
      { title: ' Hib (Haemophilus Influenza B)' },
      { title: ' Sarampo' },
      { title: ' Catapora ou Varicela' },
      { title: ' Tríplice Viral ou MMR (Sarampo, Rubéola e Caxumba)' },
      { title: ' Hepatite A' },
    ],
    title: 'Vacinas',
    text: `Para facilitar o processo de prevenção de doenças do bebê, crianças, adultos e idosos, oferecer mais conforto e confiabilidade, o Hospital e Maternidade Dois Pinheiros conta com uma completa Clínica de Vacinas, um centro credenciado em imunização. As vacinas disponíveis são produzidas por centros especializados e incluem também as vacinas contra Catapora (varicela), Hepatite A e HPV (vírus responsável por casos de câncer do cólo uterino), disponíveis apenas em clínicas particulares. Todo o material de imunização é armazenado conforme recomendações da Vigilância Sanitária, obedecendo a padrões de higiene e controle de temperatura.`,

  }),
}
</script>

<style scoped>
.card-table {
  overflow-x: auto;
}

.card-table::-webkit-scrollbar-track {
  background-color: #f4f4f4 !important;
}

.card-table::-webkit-scrollbar {
  width: 3px;
  background: #f4f4f4 !important;
}

.card-table::-webkit-scrollbar-thumb {
  background: #217b43 !important;
}
</style>