import axios from 'axios';
import { SET_BENEFITS, SET_BENEFIT } from '~/store/mutationTypes';

export const state = () => ({
  benefits: [],
  benefit: null,
});

export const getters = {
  benefitsSearchOptions: (state) => {
    return state.benefits.map((benefit) => benefit.title);
  },
};

export const mutations = {
  [SET_BENEFITS](state, data) {
    state.benefits = data;
  },

  [SET_BENEFIT](state, data) {
    state.benefit = data;
  },
};

export const actions = {
  async fetchBenefits({ commit }) {
    try {
      const { data } = await axios.get('http://localhost:3000/api/benefits.json');

      commit(SET_BENEFITS, data.benefits);
    } catch (err) {
      commit(SET_BENEFITS, []);
      // eslint-disable-next-line
      console.error(`Benefits API call error: ${err.message}`);
    }
  },

  async fetchBenefit({ commit }, { slug }) {
    try {
      const { data } = await axios.get('http://localhost:3000/api/benefits.json');

      // pretend this is /benefits/:slug end point
      const benefit = data.benefits.find((benefit) => benefit.slug === slug);

      commit(SET_BENEFIT, benefit);
    } catch (err) {
      commit(SET_BENEFIT, null);
      // eslint-disable-next-line
      console.error(`Benefit API call error: ${err.message}`);
    }
  },
};
