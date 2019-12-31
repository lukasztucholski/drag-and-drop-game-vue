<template>
  <div>
    PickupArea
    <v-row>
      <SingleCard
        v-for="(card, index) in settings.cardsCount"
        :id="`card_picked_${index + 1}`"
        :key="`card_picked_${index + 1}`"
        :width="settings.cardsSize.width"
        :height="settings.cardsSize.height"
        :background-url="settings.cardsBackroundUrl"
        :background-position-x="settings.cardsBackgroundPosition[index]"
        :upside="!settings.isGuessed[index]"
      />
    </v-row>
  </div>
</template>

<script>
import SingleCard from '../cards/SingleCard';

export default {
  name: 'PickupArea',

  components: { SingleCard },

  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
};
</script>
