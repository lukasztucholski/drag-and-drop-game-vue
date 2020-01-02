<template>
  <v-row>
    <v-snackbar
      v-if="isResultArea"
      v-model="warning"
      :timeout="2000"
      color="red"
      class="text-uppercase"
      top
    >
      The selected card is not the card you are looking for
    </v-snackbar>

    <SingleCard
      v-for="(card, index) in cardsCount"
      :id="`card_${area}_${index}`"
      :key="`card_${area}_${index}`"
      :width="selectedProvider.cardsSize.width"
      :height="selectedProvider.cardsSize.height"
      :background-url="isResultArea ? null : selectedProvider.cardsBackroundUrl"
      :background-position-x="
        selectedProvider.cardsBackgroundPosition[
          isTaskArea ? searchedCardIndex : index
        ]
      "
      :reversed="isPickupArea ? !cardsFoundStatuses[index] : false"
      :is-draggable="isPickupArea && !cardsFoundStatuses[index]"
      :searched-card-index="searchedCardIndex"
      @warning="warning = true"
    />
  </v-row>
</template>

<script>
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
      warning: false,
    };
  },

  computed: {
    selectedProvider() {
      return this.$store.state.selectedProvider;
    },
    cardsFoundStatuses() {
      return this.$store.state.resultArea.cardsFoundStatuses;
    },
    searchedCardIndex() {
      return this.$store.state.taskArea.searchedCardIndex;
    },
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
};
</script>
