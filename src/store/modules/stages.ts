import { Module } from 'vuex';
import stagesData from '../../mock/stages.json';

const stages: Module<any, any> = {
  state: {
    stages: stagesData.results,
  },
  mutations: {},
  actions: {},
};

export default stages;
