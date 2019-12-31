<template>
  <div>
    ResultArea
    <v-row>
      <SingleCard
        v-for="(card, index) in cardsCount"
        :id="`target_spot_${index + 1}`"
        :key="`target_spot_${index + 1}`"
        :width="cardsSize.width"
        :height="cardsSize.height"
        :is-draggable="false"
        :card-to-search="cardToSearch"
      />
    </v-row>
  </div>
</template>

<script>
import SingleCard from '../cards/SingleCard';

export default {
  name: 'ResultArea',

  components: { SingleCard },

  props: {
    cardsCount: {
      type: [String, Number],
      default: 0,
    },
    cardsSize: {
      type: Object,
      default: () => ({
        width: 0,
        height: 0,
      }),
    },
    //TODO Add .sync modifier or implement vuex
    cardToSearch: {
      type: Number,
      default: 0,
    },
  },
};
</script>
