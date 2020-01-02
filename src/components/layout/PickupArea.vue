<template>
  <div>
    Pick A Card:
    <PreparedCards area="pickup" />
  </div>
</template>

<script>
import PreparedCards from '../cards/PreparedCards';

export default {
  name: 'PickupArea',

  components: { PreparedCards },
};
</script>
