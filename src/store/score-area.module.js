export default {
  namespaced: true,

  state: () => ({
    scoreTime: 0,
    interval: undefined,
  }),

  mutations: {
    START_INTERVAL: state => {
      state.scoreTime = 0;
      state.interval = setInterval(() => {
        state.scoreTime += 1;
      }, 1000);
    },

    STOP_INTERVAL: state => {
      clearInterval(state.interval);
      state.interval = undefined;
    },

    INCREMENT_SCORE_TIME: (state, payload) => {
      state.scoreTime += payload;
    },
  },

  actions: {
    startScoreTimer({ commit }) {
      commit('START_INTERVAL');
    },

    stopScoreTimer({ commit }) {
      commit('STOP_INTERVAL');
    },
  },
};
