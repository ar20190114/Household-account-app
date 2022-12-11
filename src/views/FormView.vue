<template>
  <div class="card">
    <div class="card-box">
      <v-form ref="form" lazy-validation>
        <v-card-title>New Book</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="householdInformation.title"
            label="タイトル"
          ></v-text-field>

          <v-text-field
            v-model="householdInformation.money"
            label="金額"
          ></v-text-field>

          <v-select
            v-model="subjectItem"
            :items="householdInformation.subject"
            label="ジャンル"
          ></v-select>

          <v-select
            v-model="personItem"
            :items="householdInformation.person"
            label="投稿者"
          ></v-select>
        </v-card-text>
      </v-form>
      <v-card-actions>
        <div class="d-flex justify-space-between">
          <v-btn color="error" class="mr-4">Reset Form</v-btn>
          <v-btn color="success" class="mr-4">create</v-btn>
        </div>
      </v-card-actions>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, reactive } from "vue";
const subjectItem: Ref<string> = ref("");
const personItem: Ref<string> = ref("");
const householdInformation = reactive({
  title: "",
  money: "",
  subject: ["食費", "雑費"],
  person: ["りー", "ちー"],
});
</script>
<style scoped>
.card-box {
  width: 60%;
  margin: 0 auto;
  color: white;
}
.card {
  padding-top: 150px;
  background-color: black;
  height: 100vh;
  color: white;
}
.d-flex {
  margin: 0 auto;
  padding-bottom: 10px;
  padding-top: 20px;
}
</style>
