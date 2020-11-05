import React, { useState } from "react";

import MaterialButton from "../components/MaterialButton";
import { result } from "../interfaces";
import Calculate from "../components/Calculate";

const Home = ()=>{
    const initialData: result = {
    value: [],
    key:""
  };
  const [data, setData] = useState(initialData);
    return(
        <div>
        {data.key === "" ? (
            <MaterialButton loadData={setData} />
          ) : (
            <Calculate data={data}  />
          )}
        </div>
    )
}
export default Home