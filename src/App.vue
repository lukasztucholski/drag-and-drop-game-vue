<template>
  <v-app class="app">
    <v-container>
      <v-row no-gutters>
        <v-col cols="9">
          <PickupArea :settings="{ ...selectedProvider, isGuessed }" />
          <ResultArea
            :cards-count="selectedProvider.cardsCount"
            :cards-size="selectedProvider.cardsSize"
            :card-to-search="cardNumbToSearch"
          />
        </v-col>

        <v-col cols="3">
          <ScoreArea />
          <TaskArea :card-to-search="cardNumbToSearch" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { selectedProvider } from './config/providers.config';
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

  data() {
    return {
      selectedProvider,
      isGuessed: [],
      cardNumbToSearch: null,
    };
  },

  mounted() {
    // TODO Automatize isGuesses Array with cardsCount from config
    this.isGuessed = [false, false, false, false, false];
    this.randomCardToSearch();
  },

  methods: {
    randomCardToSearch() {
      if (!this.isGuessed.includes(false)) return;

      const randomNumber = Math.floor(
        Math.random() * this.selectedProvider.cardsCount
      );

      this.isGuessed[randomNumber]
        ? this.randomCardToSearch
        : (this.cardNumbToSearch = randomNumber);
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
  margin-top: 60px;
}
</style>
