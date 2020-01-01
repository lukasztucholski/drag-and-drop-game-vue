<template>
  <div>
    ResultArea
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
