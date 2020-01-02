<template>
  <div>
    <span class="title d-block mb-5">Find This Card:</span>
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
