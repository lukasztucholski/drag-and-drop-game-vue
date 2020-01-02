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
    searchedCardIndex: {
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
        margin: this.isDraggable
          ? `
              ${this.getRandomMargin('y')}px
              ${this.getRandomMargin('x')}px
              ${this.getRandomMargin('y')}px
              ${this.getRandomMargin('x')}px
            `
          : 0,
      };
    },
  },

  methods: {
    getRandomMargin(axis) {
      return axis === 'x'
        ? Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)
        : (Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)) * 3;
    },

    onDragStart(event) {
      if (this.$store.state.scoreArea.scoreTime === 0) {
        this.$store.dispatch('scoreArea/startScoreTimer');
      }

      event.dataTransfer.setData('text/html', event.target.id);

      // trick for hide dragged element in original place
      setTimeout(() => event.target.classList.add('is-dragged'), 1);
    },

    onDragEnd(event) {
      event.target.classList.remove('is-dragged');
    },

    onDrop(event) {
      if (this.isDraggable) return;

      const draggedCardId = event.dataTransfer.getData('text/html');
      const draggedCardIndex = draggedCardId.slice(-1);
      const targedSlot = event.target;
      const targetSlotIndex = targedSlot.id.slice(-1);

      if (
        draggedCardIndex === targetSlotIndex &&
        draggedCardIndex == this.searchedCardIndex
      ) {
        const draggedCard = document.getElementById(draggedCardId);
        draggedCard.draggable = false;
        targedSlot.replaceWith(draggedCard);
        this.$store.commit('resultArea/SET_CARD_STATUS', draggedCardIndex);
      } else {
        this.$emit('warning');
        this.$store.commit('scoreArea/INCREMENT_SCORE_TIME', 10);
      }

      this.$store.dispatch('taskArea/randomCardToSearch');
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
