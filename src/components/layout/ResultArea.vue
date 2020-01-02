<template>
  <div>
    <span class="title d-block mb-5">Drag And Drop To Correct Slot:</span>
    <PreparedCards area="result" />
  </div>
</template>

<script>
import PreparedCards from '../cards/PreparedCards';

export default {
  name: 'ResultArea',

  components: { PreparedCards },
};
</script>
