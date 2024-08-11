import { Module } from 'vuex';
import contactsData from '../../mock/contacts.json';

const contacts: Module<any, any> = {
  state: {
    contacts: contactsData.results,
  },
  mutations: {
    moveContact(state, { contactId, newStageId }) {
      const contact = state.contacts.find((c: { id: any; }) => c.id === contactId);
      if (contact) {
        contact.stage = newStageId;
      }
    },
  },
  actions: {},
};

export default contacts;
