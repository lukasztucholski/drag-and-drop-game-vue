<template>
  <v-row>
    {{ cardNumbToSearch }}
    <SingleCard
      v-for="(card, index) in cardsCount"
      :id="`card_${area}_${index}`"
      :key="`card_${area}_${index}`"
      :width="selectedProvider.cardsSize.width"
      :height="selectedProvider.cardsSize.height"
      :background-url="isResultArea ? null : selectedProvider.cardsBackroundUrl"
      :background-position-x="
        selectedProvider.cardsBackgroundPosition[
          isTaskArea ? cardNumbToSearch : index
        ]
      "
      :reversed="isPickupArea ? !isGuessed[index] : false"
      :is-draggable="isPickupArea"
      :card-to-search="cardNumbToSearch"
    />
  </v-row>
</template>

<script>
import { selectedProvider } from '../../config/providers.config';
import SingleCard from './SingleCard';

export default {
  name: 'PreparedCards',

  components: { SingleCard },

  props: {
    area: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      selectedProvider,
      isGuessed: [],
      cardNumbToSearch: null,
    };
  },

  computed: {
    isPickupArea() {
      return this.area === 'pickup';
    },
    isResultArea() {
      return this.area === 'result';
    },
    isTaskArea() {
      return this.area === 'task';
    },
    cardsCount() {
      return this.isTaskArea ? 1 : this.selectedProvider.cardsCount;
    },
  },

  mounted() {
    // TODO Automatize isGuesses Array with cardsCount from config
    this.isGuessed = [false, false, false, false, false];
  },
};
</script>
