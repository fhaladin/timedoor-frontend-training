<template>
  <div class="container">
    <h6 class="mt-2 mb-2 text-success">
      Matches
    </h6>
    <div v-for="i in 8" :key="i" class="container mb-4">
      <h5>Group stage - {{ i }} of 8</h5>
      <group :matches="group( toAlphabet(i) )" />
    </div>
  </div>
</template>

<script>
import Group from '~/components/matches/Group.vue'

export default {
  components: {
    Group
  },
  data () {
    return {
      matches: this.$store.state.matches
    }
  },
  methods: {
    group (stage) {
      return this.matches.filter(function (match) {
        return match.group === `Group ${stage}`
      })
    },
    toAlphabet (number) {
      return (number + 9).toString(36).toUpperCase()
    }
  }
}
</script>

<style>

</style>
