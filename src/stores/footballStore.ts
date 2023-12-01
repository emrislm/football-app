import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useFootballStore = defineStore('football', () => {
  // VARS
  const countries = ref([])
  const leagues = ref([])
  const standings = ref([])

  // GETTERS
  const getCountries = computed(() => {
    return countries
  })

  const getLeagues = computed(() => {
    return leagues
  })

  const getStandings = computed(() => {
    return standings
  })

  // FUNCTIONS
  async function fetchAllLeagues() {
    const baseUrl = 'https://api-football-standings.azharimm.dev/leagues'
    try {
      if (leagues.value.length > 0) return
      const leaguesListResult = await axios.get(baseUrl)
      leagues.value = leaguesListResult.data
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchStandings(country: string, season: number) {
    const baseUrl = `https://api-football-standings.azharimm.dev/leagues/${country}.1/standings?season=${season}&sort=asc`
    console.log(baseUrl)
  }

  return {
    countries,
    getCountries,
    leagues,
    standings,
    getLeagues,
    getStandings,
    fetchAllLeagues,
    fetchStandings
  }
})
