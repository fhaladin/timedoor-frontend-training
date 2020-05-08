<template>
  <div class="container">
    <h6 class="mt-2 mb-2 text-success">
      Teams
    </h6>
    <div class="container">
      <div class="row">
        <div v-for="team in teams" :key="team.id" class="col-6 p-2">
          <div class="card shadow-sm rounded">
            <div class="card-body text-center">
              <img class="teams-logo" :src="(team.crestUrl) ? team.crestUrl : 'http://via.placeholder.com/500x500'" alt="teams-logo">
              <h5 class="card-title">
                {{ team.name }}
              </h5>
              <p class="card-text">
                {{ team.area.name }}
              </p>
              <a :href="team.website">{{ team.website }}</a>
            </div>
            <div class="card-footer text-right bg-transparent">
              <a href="#" class="btn btn-success btn-sm" @click="addToFavorite(team)">
                <i class="fa fa-star pr-1 pl-1" /> ADD TO FAVORITE
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
      teams: this.$store.state.teams
    }
  },
  methods: {
    addToFavorite (team) {
      event.preventDefault()
      this.$store.dispatch('addFavoritesTeam', team)
    }
  }
}
</script>

<style>
  .teams-logo {
    height: 50px;
  }
</style>
