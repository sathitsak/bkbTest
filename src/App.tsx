import React, { useState } from "react";

import MaterialButton from "./components/MaterialButton";
import { value } from "./interfaces";
import Calculate from './components/Calculate'
const App = () => {
  const initialData: value = {
    result: "",
    value: [],
  };
  const [data, setData] = useState(initialData);
   
  

  return (
    <div className="App">
      {data.result === "" ? (
        <MaterialButton loadData={setData} />
      ) : (
        <Calculate data={data}/>
      )}
    </div>
  );
};

export default App;
