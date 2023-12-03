<template>
  <div class="col md:col-9 p-5 md:p-8 bg-white">
    <div class="flex flex-column md:flex-row justify-content-between mb-3 md:mb-5">
      <h1 class="mt-0 mb-3 md:mb-0">Table</h1>
      <Dropdown v-model="selectedLeague" :options="allLeagues" optionLabel="name" placeholder="Select a league"
        @change="getTable()" class="col-12 md:col-6 md:h-3rem align-items-center" />
    </div>

    <DataTable :value="allStandings" class="p-datatable-sm">
      <Column field="rank" header="#"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="gamesPlayed" header="GP"></Column>
      <Column field="wins" header="W"></Column>
      <Column field="draws" header="D"></Column>
      <Column field="losses" header="L"></Column>
      <Column field="points" header="Pts"></Column>
    </DataTable>
  </div>
</template>
  
<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useFootballStore } from '@/stores/footballStore';

const footballStore = useFootballStore();

onMounted(() => {
  footballStore.fetchAllLeagues();
});

const selectedLeague = ref("");

const allLeagues = computed(() => {
  return footballStore.getLeagues.value;
});
const allStandings = computed(() => {
  return footballStore.getStandings.value;
});

const getTable = () => {
  console.log("getTable()");
  let league: any = selectedLeague.value;
  footballStore.fetchStandings(league.countryCode);
}
</script>

<style scoped></style>