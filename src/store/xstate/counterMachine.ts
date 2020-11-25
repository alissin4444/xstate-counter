import { Machine, assign } from "xstate";

const counterMachine = Machine(
  {
    id: "counter",
    initial: "inactive",
    context: {
      counter: 0,
    },
    states: {
      inactive: {
        on: { TOGGLE: "active" },
      },
      active: {
        on: {
          TOGGLE: "inactive",
          INCREMENT_BY_ONE: { target: "active", actions: "incrementByOne" },
        },
      },
    },
  },
  {
    actions: { incrementByOne: assign({ counter: (ctx) => ctx.counter + 1 }) },
  }
);

export default counterMachine;
