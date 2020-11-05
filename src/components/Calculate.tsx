import React from "react";
import Button from "@material-ui/core/Button";
import { CalculateProps } from "../interfaces";
import { useHistory  } from "react-router-dom";

const Calculate = ({data}:CalculateProps)=>{
     const AfterLoad=
     data.value.map( (num:number) =>{
      return <p key={num}>{num}</p>;
    })
    let history = useHistory();

    function handleClick() {
    history.push("/result",data);
  }

    return(
        <div>
        {AfterLoad}
        <Button variant="contained" onClick={handleClick}>Calculate</Button>
        </div>
    )
}
export default Calculate;