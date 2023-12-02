<template>
  <div class="flex flex-row h-screen">
    <FootballStandings />
    <FootballFixtures />
  </div>
</template>

<script setup lang="ts">
import FootballStandings from "@/components/FootballStandings.vue";
import FootballFixtures from "@/components/FootballFixtures.vue";
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

/* .container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
} */
</style>