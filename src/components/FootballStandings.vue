<template>
  <div class="container">
    <h1>Table</h1>

    <div class="containerInput">
      <div class="inputGroup">
        <Dropdown v-model="selectedLeague" :options="allLeagues" optionLabel="name" placeholder="Select a City"
          @change="getTable()" />
      </div>

      <div class="inputGroup">
        <label for="username">Season</label>
        <InputNumber v-model="season" inputId="integeronly" />
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { computed, ref } from "vue";
import { useFootballStore } from '@/stores/footballStore';

const footballStore = useFootballStore();

const selectedLeague = ref("")
const season = ref(0);

const allLeagues = computed(() => {
  return footballStore.getLeagues.value;
});

const getTable = () => {
  let league = selectedLeague.value;
  footballStore.fetchStandings(league.value);
}

footballStore.fetchAllLeagues();
</script>

<style scoped>
h1 {
  margin-bottom: 24px;
}

.container {
  display: flex;
  flex-direction: column;

  width: 70%;
  padding: 24px 96px;

  background-color: white;
}

.containerInput {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
</style>