<template>
  <div>
    TaskArea
    <PreparedCards area="task" />
  </div>
</template>

<script>
import PreparedCards from '../cards/PreparedCards';

export default {
  name: 'TaskArea',

  components: { PreparedCards },
};
</script>
