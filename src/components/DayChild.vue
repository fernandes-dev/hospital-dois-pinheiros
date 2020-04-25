<template>
  <div id="dayChilds" class="text-center">
    <div class="press-room">
      Dia do bebê -
      <strong>Todos os bebês nascidos este mês</strong>
    </div>
    <div
      class="title"
    >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    <v-row>
      <v-col cols="12" sm="12">
        <v-card flat>
          <v-container fluid>
            <v-row>
              <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
                <v-card flat outlined class="mx-auto" max-width="380">
                  <v-img
                    src="https://img.vixdata.io/pd/webp-large/pt/sites/default/files/b/bebe-negro-crianca-11.16-1400x800.jpg"
                    height="380px"
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.press-room {
  font-size: 1.9em;
}
</style>