import { createStore } from 'vuex';
import stages from './modules/stages';
import contacts from './modules/contacts';

export default createStore({
  modules: {
    stages,
    contacts,
  },
});
