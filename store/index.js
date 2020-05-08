export const state = () => ({
  teams: [],
  matches: [],
  favoritesTeam: [],
  favoritesMatch: []
})

export const mutations = {
  SET_TEAMS_DATA (state, teams) {
    state.teams = teams
  },
  SET_MATCHES_DATA (state, matches) {
    state.matches = matches
  },
  ADD_FAVORITES_TEAM (state, { id, crestUrl, name, area, website }) {
    const record = state.favoritesTeam.find(element => element.id === id)
    if (!record) {
      state.favoritesTeam.push({ id, crestUrl, name, area, website })
    }
  },
  ADD_FAVORITES_MATCH (state, { id, utcDate, homeTeam, awayTeam, score }) {
    const record = state.favoritesMatch.find(element => element.id === id)
    if (!record) {
      state.favoritesMatch.push({ id, utcDate, homeTeam, awayTeam, score })
    }
  },
  DELETE_FAVORITES_TEAM (state, id) {
    const record = state.favoritesTeam.find(element => element.id === id)
    state.favoritesTeam.splice(state.favoritesTeam.indexOf(record), 1)
  },
  DELETE_FAVORITES_MATCH (state, id) {
    const record = state.favoritesMatch.find(element => element.id === id)
    state.favoritesMatch.splice(state.favoritesMatch.indexOf(record), 1)
  }
}

export const actions = {
  async nuxtServerInit ({ commit, dispatch }) {
    await dispatch('setTeams')
    await dispatch('setMathes')
  },
  async setTeams ({ commit }) {
    const { data } = await this.$axios.get('https://api.football-data.org/v2/competitions/CL/teams')
    commit('SET_TEAMS_DATA', data.teams)
  },
  async setMathes ({ commit }) {
    const { data } = await this.$axios.get('https://api.football-data.org/v2/competitions/CL/matches')
    commit('SET_MATCHES_DATA', data.matches)
  },
  addFavoritesTeam ({ commit }, team) {
    commit('ADD_FAVORITES_TEAM', team)
  },
  addFavoritesMatch ({ commit }, match) {
    commit('ADD_FAVORITES_MATCH', match)
  },
  deleteFavoritesTeam ({ commit }, id) {
    commit('DELETE_FAVORITES_TEAM', id)
  },
  deleteFavoritesMatch ({ commit }, id) {
    commit('DELETE_FAVORITES_MATCH', id)
  }
}
