import React, { useState } from "react";

import MaterialButton from "./components/MaterialButton";
import { key, value } from "./interfaces";

const App = () => {
  const initialData: data = {
    result: "",
    value: [],
  };
  const [data, setData] = useState(initialData);
  const AfterLoad=
     data.value.map( (num) =>{
      return <p key={num}>{num}</p>;
    })
   
  

  return (
    <div className="App">
      {data.result === "" ? (
        <MaterialButton loadData={setData} />
      ) : (
        <div>
      {AfterLoad}
      <p>a</p>
      </div>
      )}
    </div>
  );
};

export default App;
