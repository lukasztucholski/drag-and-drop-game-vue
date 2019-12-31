<template>
  <div>
    TaskArea<br />
    Card to search: {{ cardToSearch }}
  </div>
</template>

<script>
export default {
  name: 'TaskArea',

  props: {
    cardToSearch: {
      type: Number,
      default: 0,
    },
  },
};
</script>
