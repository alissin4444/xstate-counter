import { Machine } from 'xstate';

const counterMachine = Machine({
  id: 'counter',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { 
        TOGGLE: 'inactive'
      }
    }
  }
});

export default counterMachine