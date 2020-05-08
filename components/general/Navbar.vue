<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="navbar-brand" href="#">Footbal PWA</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <router-link v-slot="{ href, navigate, isActive }" to="/" exact>
            <li class="nav-item" :class="[isActive && 'active']">
              <a class="nav-link" :href="href" @click="navigate">Home</a>
            </li>
          </router-link>
          <router-link v-slot="{ href, navigate, isActive }" to="/matches">
            <li class="nav-item" :class="[isActive && 'active']">
              <a class="nav-link" :href="href" @click="navigate">Matches</a>
            </li>
          </router-link>
          <router-link v-slot="{ href, navigate, isActive }" to="/teams">
            <li class="nav-item" :class="[isActive && 'active']">
              <a class="nav-link" :href="href" @click="navigate">Teams</a>
            </li>
          </router-link>
          <router-link v-slot="{ href, navigate, isActive }" to="/favorites-match">
            <li class="nav-item" :class="[isActive && 'active']">
              <a class="nav-link" :href="href" @click="navigate">Favorites Match</a>
            </li>
          </router-link>
          <router-link v-slot="{ href, navigate, isActive }" to="/favorites-team">
            <li class="nav-item" :class="[isActive && 'active']">
              <a class="nav-link" :href="href" @click="navigate">Favorites Teams</a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
