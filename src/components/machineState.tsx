import { useMachine } from "@xstate/react";
import counterMachine from "../store/xstate/counterMachine";

export default function machineState() {
  const [machine, send] = useMachine(counterMachine);

  return (
    <p>
      <i>Your current machine state is {machine.value}</i>
    </p>
  );
}
