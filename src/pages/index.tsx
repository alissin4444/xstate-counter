import { useMachine } from "@xstate/react";

import counterMachine from "../store/xstate/counterMachine";

export default function Home() {
  const [counterMSState, counterMSStateSend] = useMachine(counterMachine);

  return (
    <div>
      <h1>Counter Machine</h1>
      <hr />
      <p>
        <i>Your current state is {counterMSState.value}</i>
      </p>

      <button onClick={() => counterMSStateSend("TOGGLE")}>
        {counterMSState.value === "inactive"
          ? "Click to activate"
          : "Active! Click to deactivate"}
      </button>
    </div>
  );
}
