import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory  } from "react-router-dom";

const Result = (props:any)=>{
    console.log(props.location)

    var sum = props.location.state.value.reduce(function(total:number, num:number){
        return total +num;
    }, 0);
let history = useHistory();

    function handleClick() {
    history.push("/");
  }
    return(
    <>
    <div>
    Key:{props.location.state.key}
    </div>
    <div>
    Value:{sum}
    </div>
            <Button variant="contained" onClick={handleClick}>Back</Button>

    </>)
}

export default Result