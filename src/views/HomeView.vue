<template>
  <div class="grid grid-nogutter justify-content-center w-full min-h-screen">
    <FootballStandings />
    <!-- <FootballFixtures /> -->
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
</style>