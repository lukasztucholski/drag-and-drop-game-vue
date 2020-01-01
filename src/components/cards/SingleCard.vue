<template>
  <div
    :class="[
      'default-card',
      { 'hidden-card': reversed, 'not-draggable': !isDraggable },
    ]"
    :style="computedStyles"
    :draggable="isDraggable"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
    @dragover.prevent
    @drop.prevent="onDrop"
  ></div>
</template>

<script>
export default {
  name: 'SingleCard',

  props: {
    isDraggable: {
      type: Boolean,
      default: true,
    },
    reversed: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: 100,
    },
    height: {
      type: [String, Number],
      default: 100,
    },
    backgroundUrl: {
      type: String,
      default: 'transparent',
    },
    backgroundPositionX: {
      type: [String, Number],
      default: 0,
    },
    cardToSearch: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    computedStyles() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        backgroundImage: `url(${this.backgroundUrl})`,
        backgroundPositionX: `${this.backgroundPositionX}px`,
        order: this.isDraggable ? Math.floor(Math.random() * 10) : 0,
      };
    },
  },

  methods: {
    onDragStart(e) {
      e.dataTransfer.setData('text/html', e.target.id);
      setTimeout(() => e.target.classList.add('is-dragged'), 1);
    },

    onDragEnd(e) {
      //temporary
      e.target.classList.remove('is-dragged');
    },

    onDrop(e) {
      if (this.isDraggable) return;
      const draggedItemId = e.dataTransfer.getData('text/html');
      const draggedItemNumb = draggedItemId.slice(-1);
      const targetDivNumb = e.target.id.slice(-1);
      console.log(draggedItemId, e.target.id);

      if (draggedItemNumb != this.cardToSearch) {
        console.log('other card in the task!');
      }

      if (draggedItemNumb === targetDivNumb) {
        console.log('correct place for this card!');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.default-card {
  position: relative;
  background-size: cover;
  border: 1px solid black;
  cursor: pointer;
}
.hidden-card {
  &::before {
    content: '?';
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 150px;
    color: white;
    background: black;
    border: 1px solid white;
  }
}
.not-draggable {
  cursor: initial;
}
.is-dragged {
  visibility: hidden;
}
</style>
