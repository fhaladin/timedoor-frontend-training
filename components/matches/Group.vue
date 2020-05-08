<template>
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
          <a href="#" class="btn btn-info btn-sm" @click="addToFavorite(match)">
            <i class="fa fa-star pr-1 pl-1" /> ADD TO FAVORITE
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    matches: {
      type: Array,
      required: true
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
    }
  }
}
</script>

<style>

</style>
