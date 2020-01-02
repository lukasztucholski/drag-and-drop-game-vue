<template>
  <div>
    Drag And Drop To Correct Slot:
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
