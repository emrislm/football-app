<template>
  <div class="flex flex-column w-9 h-full min-h-full p-8 bg-blue-500">
    <div class="flex flex-row justify-content-between">
      <h1 class="mt-0 mb-5">Table</h1>
      <Dropdown v-model="selectedLeague" :options="allLeagues" optionLabel="name" placeholder="Select a league"
        @change="getTable()" class="w-6 h-3rem align-items-center" />
    </div>

    <DataTable :value="allStandings" tableStyle="border: none" class="p-datatable-normal">
      <Column field="place" header="#"></Column>
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
  console.log("changed");
  let league = selectedLeague.value;
  footballStore.fetchStandings(league.value);
}
</script>

<style scoped></style>