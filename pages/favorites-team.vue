<template>
  <div class="container">
    <h6 class="mt-2 mb-2 text-success">
      Favorites Team
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
              <a href="#" class="btn btn-danger btn-sm" @click="deleteFromFavorites(team.id)">
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
      teams: this.$store.state.favoritesTeam
    }
  },
  methods: {
    deleteFromFavorites (id) {
      event.preventDefault()
      this.$store.dispatch('deleteFavoritesTeam', id)
    }
  }
}
</script>

<style>
  .teams-logo {
    height: 50px;
  }
</style>
