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
                  <v-btn variant="plain" @click="totalPayData">精算</v-btn>
                </v-list-item>
                <v-list-item link color="grey-lighten-4">
                  <v-btn variant="plain" @click="foodPayData">食費</v-btn>
                </v-list-item>
                <v-list-item link color="grey-lighten-4">
                  <v-btn variant="plain" @click="generalMerchandisePayData">
                    雑費
                  </v-btn>
                </v-list-item>
                <v-list-item link color="grey-lighten-4">
                  <v-btn variant="plain" @click="lightHeatPayData">
                    光熱費
                  </v-btn>
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

        <v-alert
          class="total-pay-info"
          color="deep-orange"
          icon="mdi-fire"
          title="Total Pay"
          variant="outlined"
        >
          <h3>Ryota: ${{ ryotaPay }}</h3>
          <br />
          <h3>Hana: ${{ hanaPay }}</h3>
        </v-alert>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { collection, getDocs } from "firebase/firestore";
import { onMounted, ref, Ref } from "vue";
import db from "../firebase.js";

const ryotaPay: Ref<number> = ref(0);
const hanaPay: Ref<number> = ref(0);
const testData = ref({});
const totalPay = ref([]);

const FIRSTRYOTAPAY = 101705;
const FIRSTHANAPAY = 74124;

onMounted(async () => {
  ryotaPay.value = FIRSTRYOTAPAY;
  hanaPay.value = FIRSTHANAPAY;
  const querySnapshot = await getDocs(collection(db, "money"));
  querySnapshot.forEach((doc) => {
    totalPay.value.push(doc.data());
    if (doc.data().author === "りー") {
      ryotaPay.value = ryotaPay.value + Number(doc.data().pay);
    } else {
      hanaPay.value = hanaPay.value + Number(doc.data().pay);
    }
  });
  Chart.register(...registerables);

  testData.value = {
    labels: ["ちー", "りー"],
    datasets: [
      {
        data: [hanaPay.value, ryotaPay.value],
        backgroundColor: ["#77CEFF", "#0079AF"],
      },
    ],
  };
});

function totalPayData() {
  ryotaPay.value = FIRSTRYOTAPAY;
  hanaPay.value = FIRSTHANAPAY;
  totalPay.value.forEach((doc) => {
    if (doc.author === "りー") {
      ryotaPay.value = ryotaPay.value + Number(doc.pay);
    } else {
      hanaPay.value = hanaPay.value + Number(doc.pay);
    }
  });

  Chart.register(...registerables);

  testData.value = {
    labels: ["ちー", "りー"],
    datasets: [
      {
        data: [hanaPay.value, ryotaPay.value],
        backgroundColor: ["#77CEFF", "#0079AF"],
      },
    ],
  };
}

function foodPayData() {
  ryotaPay.value = FIRSTRYOTAPAY;
  hanaPay.value = FIRSTHANAPAY;
  totalPay.value.forEach((doc) => {
    if (doc.author === "りー" && doc.subject === "食費") {
      ryotaPay.value = ryotaPay.value + Number(doc.pay);
    }
    if (doc.author === "ちー" && doc.subject === "食費") {
      hanaPay.value = hanaPay.value + Number(doc.pay);
    }
  });

  Chart.register(...registerables);

  testData.value = {
    labels: ["ちー", "りー"],
    datasets: [
      {
        data: [hanaPay.value, ryotaPay.value],
        backgroundColor: ["#77CEFF", "#0079AF"],
      },
    ],
  };
}

function generalMerchandisePayData() {
  ryotaPay.value = 0;
  hanaPay.value = 0;
  totalPay.value.forEach((doc) => {
    if (doc.author === "りー" && doc.subject === "雑費") {
      ryotaPay.value = ryotaPay.value + Number(doc.pay);
    }
    if (doc.author === "ちー" && doc.subject === "雑費") {
      hanaPay.value = hanaPay.value + Number(doc.pay);
    }
  });

  Chart.register(...registerables);

  testData.value = {
    labels: ["ちー", "りー"],
    datasets: [
      {
        data: [hanaPay.value, ryotaPay.value],
        backgroundColor: ["#77CEFF", "#0079AF"],
      },
    ],
  };
}

function lightHeatPayData() {
  ryotaPay.value = 0;
  hanaPay.value = 0;
  totalPay.value.forEach((doc) => {
    if (doc.author === "りー" && doc.subject === "光熱費") {
      ryotaPay.value = ryotaPay.value + Number(doc.pay);
    }
    if (doc.author === "ちー" && doc.subject === "光熱費") {
      hanaPay.value = hanaPay.value + Number(doc.pay);
    }
  });

  Chart.register(...registerables);

  testData.value = {
    labels: ["ちー", "りー"],
    datasets: [
      {
        data: [hanaPay.value, ryotaPay.value],
        backgroundColor: ["#77CEFF", "#0079AF"],
      },
    ],
  };
}
</script>
<style scoped>
.chart-position {
  /*margin-top: 20px;*/
}

.total-pay-info {
  margin-top: 30px;
}
</style>
