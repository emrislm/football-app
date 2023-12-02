import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useFootballStore = defineStore('football', () => {
  // VARS
  const leagues = ref([])
  const standings = ref([])

  // GETTERS
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
      leagues.value = leaguesListResult.data.data.map((obj: any) => {
        return {
          name: obj.name,
          value: obj.id
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchStandings(country: string) {
    const baseUrl = `https://api-football-standings.azharimm.dev/leagues/${country}/standings?season=2023&sort=asc`
    try {
      const standingsListResult = await axios.get(baseUrl)
      standings.value = standingsListResult.data.data.standings.map((standing: any) => {
        return {
          place: standing.stats[10].value,
          name: standing.team.name,
          gamesPlayed: standing.stats[0].value,
          wins: standing.stats[7].value,
          draws: standing.stats[6].value,
          losses: standing.stats[1].value,
          points: standing.stats[3].value
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    leagues,
    standings,
    getLeagues,
    getStandings,
    fetchAllLeagues,
    fetchStandings
  }
})
