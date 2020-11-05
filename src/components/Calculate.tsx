import React from "react";
import Button from "@material-ui/core/Button";
import { CalculateProps } from "../interfaces";

const Calculate = ({data}:CalculateProps)=>{
     const AfterLoad=
     data.value.map( (num:number) =>{
      return <p key={num}>{num}</p>;
    })

    return(
        <div>
        {AfterLoad}
        <Button variant="contained">Calculate</Button>
        </div>
    )
}
export default Calculate;