<template>
  <v-app class="app">
    <v-container>
      <v-row no-gutters>
        <v-col cols="10">
          <template v-if="!gameIsOver">
            <PickupArea />
            <ResultArea />
          </template>

          <v-img
            v-else
            :src="$store.state.selectedProvider.cardsBackroundUrl"
          />

          <v-snackbar
            :value="gameIsOver"
            :timeout="10000"
            color="success"
            class="text-uppercase"
            top
          >
            You won with time {{ $store.state.scoreArea.scoreTime }} seconds!
            Gratulations! Game will restart after 10 seconds
          </v-snackbar>
        </v-col>

        <v-col cols="2">
          <ScoreArea />
          <TaskArea v-if="!gameIsOver" class="mt-4" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import PickupArea from './components/layout/PickupArea';
import ResultArea from './components/layout/ResultArea';
import ScoreArea from './components/layout/ScoreArea';
import TaskArea from './components/layout/TaskArea';

export default {
  name: 'App',

  components: {
    PickupArea,
    ResultArea,
    ScoreArea,
    TaskArea,
  },

  computed: {
    gameIsOver() {
      return this.$store.getters['resultArea/gameIsOver'];
    },
  },

  watch: {
    gameIsOver() {
      if (this.gameIsOver) {
        setTimeout(this.initGame, 10000);
        this.$store.dispatch('scoreArea/stopScoreTimer');
      }
    },
  },

  mounted() {
    this.initApp();
  },

  methods: {
    initApp() {
      this.$store.dispatch('resultArea/initCardsStatuses');
      this.$store.dispatch('taskArea/randomCardToSearch');
    },
    initGame() {
      this.initApp();
      this.$store.dispatch('scoreArea/startScoreTimer');
    },
  },
};
</script>

<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
