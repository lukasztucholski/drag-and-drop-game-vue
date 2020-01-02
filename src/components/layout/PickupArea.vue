<template>
  <div>
    <span class="title d-block mb-5">Pick A Card:</span>
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
