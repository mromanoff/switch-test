import axios from 'axios';
import { SET_BENEFITS } from '~/store/mutationTypes';

export const state = () => ({
  benefits: [],
});

export const mutations = {
  [SET_BENEFITS](state, data) {
    state.benefits = data;
  },
};

export const actions = {
  async getBenefits({ commit }) {
    try {
      const { data } = await axios.get('http://localhost:3000/api/benefits.json');

      commit(SET_BENEFITS, data.benefits);
    } catch (err) {
      commit(SET_BENEFITS, []);
      console.error(`Benefits API call error: ${err.message}`);
    }
  },
};
