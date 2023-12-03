<template>
  <div class="col md:col-3 p-5 md:p-8 bg-gray-100">
    <h1 class="mt-0 mb-5 md:mb-5">Fixtures</h1>
    <p class="m-0">Today, {{ new Date().toDateString() }}</p>
  </div>
</template>
  
<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useFootballStore } from '@/stores/footballStore';

const footballStore = useFootballStore();

onMounted(() => {

});

</script>

<style scoped></style>