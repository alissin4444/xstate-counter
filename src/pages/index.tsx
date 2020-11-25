import { useMachine } from "@xstate/react";
import { useEffect, useState } from "react";

import counterMachine from "../store/xstate/counterMachine";

import MachineContextValue from "../components/machineContextValue";
import MachineState from "../components/machineState";

export default function Home() {
  const [machine, send] = useMachine(counterMachine);

  useEffect(() => {
    if (machine.value === "active") {
      const timeout = setTimeout(() => {
        send("INCREMENT_BY_ONE");
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [machine.value, machine.context]);

  return (
    <div>
      <h1>Counter Machine</h1>
      <hr />
      <h2>Local State</h2>
      <p>
        <i>Your current machine state is {machine.value}</i>
      </p>
      <p>
        <i>And</i>, your current counter state is{" "}
        <b>{machine.context.counter}</b>
      </p>
      <h2>External State</h2>
      <MachineState />
      <MachineContextValue />

      <button onClick={() => send("INCREMENT_BY_ONE")}>INCREMENT BY ONE</button>

      <button onClick={() => send("TOGGLE")}>
        {machine.value === "inactive"
          ? "Click to activate"
          : "Active! Click to deactivate"}
      </button>
    </div>
  );
}
