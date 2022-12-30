<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-icon icon="mdi-vuetify" />
        <v-alert-title>家計簿</v-alert-title>
        <v-spacer />
        <v-btn variant="text" to="/form">Form</v-btn>
        <v-spacer />
        <v-btn variant="text">Update</v-btn>
        <v-spacer />
        <v-btn variant="text">Dashboard</v-btn>
        <v-responsive max-width="260">
          <v-text-field density="compact" hide-details variant="solo">
          </v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item link color="grey-lighten-4">
                  <v-list-item-title>精算</v-list-item-title>
                </v-list-item>
                <v-list-item link color="grey-lighten-4">
                  <v-list-item-title>食費</v-list-item-title>
                </v-list-item>
                <v-list-item link color="grey-lighten-4">
                  <v-list-item-title>雑費</v-list-item-title>
                </v-list-item>
                <v-list-item link color="grey-lighten-4">
                  <v-list-item-title>光熱費</v-list-item-title>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey-lighten-4">
                  <v-list-item-title>追加</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="60vh" rounded="lg">
              <div class="chart-position">
                <DoughnutChart :chartData="testData" />
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const testData = {
  labels: ["ちー", "りー"],
  datasets: [
    {
      data: [10000, 15000],
      backgroundColor: ["#77CEFF", "#0079AF"],
    },
  ],
};
</script>
<style scoped>
.chart-position {
  /*margin-top: 20px;*/
}
</style>
