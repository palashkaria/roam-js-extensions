import { Button, InputGroup } from "@blueprintjs/core";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const TallyCounter = ({ initialValue }: { initialValue: number }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div
      style={{
        display: "flex",
        width: 120,
      }}
    >
      <Button text="+" onClick={() => setValue(value + 1)} />
      <InputGroup
        value={value.toString()}
        disabled={true}
        style={{ textAlign: "right" }}
      />
      <Button text="-" onClick={() => setValue(value - 1)} />
    </div>
  );
};

export const DemoTallyCounter = () => <TallyCounter initialValue={0} />;
export const renderTallyCounter = (initialValue: number, p: HTMLElement) =>
  ReactDOM.render(<TallyCounter initialValue={initialValue} />, p);

export default TallyCounter;
