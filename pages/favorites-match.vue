<template>
  <div class="container">
    <h6 class="mt-2 mb-2 text-success">
      Favorites Match
    </h6>
    <div class="container">
      <div class="row">
        <div v-for="match in matches" :key="match.id" class="col-6 p-2">
          <div class="card shadow-sm rounded">
            <div class="card-body">
              <h5 class="card-title text-center">
                {{ toDate(match.utcDate) }}
              </h5>
              <div class="row">
                <p class="card-text col-md-6">
                  {{ match.homeTeam.name }}
                </p>
                <p class="card-text text-right col-md-6">
                  {{ finalScore(match.score, 'homeTeam') }}
                </p>
              </div>
              <div class="row">
                <p class="card-text col-md-6">
                  {{ match.awayTeam.name }}
                </p>
                <p class="card-text text-right col-md-6">
                  {{ finalScore(match.score, 'awayTeam') }}
                </p>
              </div>
            </div>
            <div class="card-footer text-right bg-transparent">
              <a href="#" class="btn btn-danger btn-sm" @click="deleteFromFavorites(match.id)">
                <i class="fa fa-trash pr-1 pl-1" /> DELETE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      matches: this.$store.state.favoritesMatch
    }
  },
  methods: {
    toDate (string) {
      return string.split('T')[0]
    },
    finalScore (score, team) {
      return score.fullTime[team] + score.halfTime[team] + score.extraTime[team] + score.penalties[team]
    },
    addToFavorite (match) {
      event.preventDefault()
      this.$store.dispatch('addFavoritesMatch', match)
    },
    deleteFromFavorites (id) {
      event.preventDefault()
      this.$store.dispatch('deleteFavoritesMatch', id)
    }
  }
}
</script>

<style>

</style>
