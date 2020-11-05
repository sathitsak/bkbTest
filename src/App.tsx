import React, { useState } from "react";

import MaterialButton from "./components/MaterialButton";
interface data {
  result: string;
  value: number[];
}
const App = () => {
  const initialData: data = {
    result: "",
    value: [],
  };
  const [data, setData] = useState(initialData);
  function AfterLoad() {
    return data.value.forEach(function (num) {
      return <p key={num}>{num}</p>;
    });
  }

  return (
    <div className="App">
      {data.result === "" ? (
        <MaterialButton loadData={setData} />
      ) : (
        <AfterLoad />
      )}
    </div>
  );
};

export default App;
