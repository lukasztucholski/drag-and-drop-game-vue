export default {
  namespaced: true,

  state: () => ({
    searchedCardIndex: null,
  }),

  mutations: {
    SET_SEARCHED_CARD_INDEX: (state, payload) => {
      state.searchedCardIndex = payload;
    },
  },

  actions: {
    randomCardToSearch({ commit, dispatch, state, rootState, rootGetters }) {
      if (rootGetters['resultArea/gameIsOver']) return;

      const randomNumber = Math.floor(
        Math.random() * rootState.selectedProvider.cardsCount
      );

      if (randomNumber === state.searchedCardIndex) {
        dispatch('randomCardToSearch');
        return;
      }

      rootState.resultArea.cardsFoundStatuses[randomNumber]
        ? dispatch('randomCardToSearch')
        : commit('SET_SEARCHED_CARD_INDEX', randomNumber);
    },
  },

  getters: {},
};
