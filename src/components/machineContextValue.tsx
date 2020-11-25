import { useMachine } from "@xstate/react";
import counterMachine from "../store/xstate/counterMachine";

export default function machineContextValue() {
  const [machine, send] = useMachine(counterMachine);

  return (
    <p>
      <i>And</i>, your current counter state is <b>{machine.context.counter}</b>
    </p>
  );
}
