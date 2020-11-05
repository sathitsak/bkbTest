import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { key, value } from "../interfaces";

const Calculate = (data:value)=>{
     const AfterLoad=
     data.value.map( (num) =>{
      return <p key={num}>{num}</p>;
    })

    return(
        <div>
        {AfterLoad}
        <Button>Calculate</Button>
        </div>
    )
}
export default Calculate;