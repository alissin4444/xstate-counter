import { useMachine } from "@xstate/react";
import { useEffect, useState } from "react";

import counterMachine from "../store/xstate/counterMachine";

export default function Home() {
  const [machine, send] = useMachine(counterMachine);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (machine.value === "active") {
      const timeout = setTimeout(() => {
        setCounter(counter + 1);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [counter, machine.value]);

  return (
    <div>
      <h1>Counter Machine</h1>
      <hr />
      <p>
        <i>Your current machine state is {machine.value}</i>
      </p>
      <p>
        <i>And</i>, your current counter state is <b>{counter}</b>
      </p>

      <button onClick={() => send("TOGGLE")}>
        {machine.value === "inactive"
          ? "Click to activate"
          : "Active! Click to deactivate"}
      </button>
    </div>
  );
}
