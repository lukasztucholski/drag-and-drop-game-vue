<template>
  <div>
    <span class="title d-block mb-5">
      Score: {{ $store.state.scoreArea.scoreTime }} seconds
    </span>
  </div>
</template>

<script>
export default {
  name: 'ScoreArea',
};
</script>
