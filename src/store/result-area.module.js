export default {
  namespaced: true,

  state: () => ({
    cardsFoundStatuses: [],
  }),

  mutations: {
    INIT_CARDS_STATUSES: (state, payload) => {
      state.cardsFoundStatuses = [];
      state.cardsFoundStatuses.length = payload;
    },

    SET_CARD_STATUS: (state, payload) => {
      state.cardsFoundStatuses[payload] = true;
      state.cardsFoundStatuses = [...state.cardsFoundStatuses];
    },
  },

  actions: {
    initCardsStatuses({ commit, rootState }) {
      commit('INIT_CARDS_STATUSES', rootState.selectedProvider.cardsCount);
    },
  },

  getters: {
    gameIsOver: state =>
      !state.cardsFoundStatuses.includes(undefined) &&
      state.cardsFoundStatuses.includes(true),
  },
};
