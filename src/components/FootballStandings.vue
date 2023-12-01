<template>
  <div class="container">
    <h1 style="background-color: aqua;">Table</h1>

    <div class="containerInput">
      <div class="inputGroup">
        <label for="username">Country</label>
        <InputText type="text" v-model="country" />
      </div>

      <div class="inputGroup">
        <label for="username">Season</label>
        <InputNumber v-model="season" inputId="integeronly" />
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import { useFootballStore } from '@/stores/footballStore';

const footballStore = useFootballStore();

const country = ref("");
const season = ref(0);


</script>

<style scoped>
h1 {
  margin-bottom: 24px;
}

.container {
  display: flex;
  flex-direction: column;

  width: 70%;
  padding: 24px 48px;

  background-color: rgb(160, 0, 0);
}

.containerInput {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
</style>