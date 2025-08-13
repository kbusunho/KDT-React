import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue("Updated!")}>Update Value</button>
    </div>
  );
};

export default MyComponent;
