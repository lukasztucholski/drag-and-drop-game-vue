const shift = -19;

const cardsCount = 5;

const cardsSize = {
  width: 160,
  height: 280,
};

const cardsBackgroundPosition = [
  shift,
  shift - cardsSize.width,
  shift - cardsSize.width * 2,
  -cardsSize.width * 3,
  -cardsSize.width * 4,
];

const cardsBackroundUrl = require('@/assets/zoovu-logo.png');

export default {
  cardsCount,
  cardsSize,
  cardsBackgroundPosition,
  cardsBackroundUrl,
};
