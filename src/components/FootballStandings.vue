<template>
  <div class="container">
    <div class="containerHeader">
      <h1>Table</h1>
      <Dropdown v-model="selectedLeague" :options="allLeagues" optionLabel="name" placeholder="Select a league"
        @change="getTable()" class="dropdown-leagues" />
      <!-- <div class="invisible"></div> -->
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

<style scoped>
h1 {
  margin-top: 0;
  margin-bottom: 48px;
}

.container {
  display: flex;
  flex-direction: column;

  width: 70%;
  min-height: 100vh;
  height: fit-content;
  padding: 24px 175px 96px 175px;

  background-color: white;
}

.containerHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.invisible {
  visibility: hidden;
}

.dropdown-leagues {
  width: 500px;
  height: 40px;
  align-items: center;
}
</style>