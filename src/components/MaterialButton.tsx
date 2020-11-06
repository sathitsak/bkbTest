import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { key, value,MaterialButtonProps } from "../interfaces";
const MaterialButton = ({ loadData }: MaterialButtonProps) => {
  async function makeRequest() {
    const getKey = await axios.get<key>(
      "https://asia-east2-candidateplayground.cloudfunctions.net/key"
    );
    let apiKey = getKey.data.key;

    const getValue = await axios.get<value>(
      "https://asia-east2-candidateplayground.cloudfunctions.net/value",
      {
        headers: {
          Authorization: `${apiKey}`          
        },
      }
    );
    const data={
      key:apiKey,
      value:getValue.data.value
    }
    console.log(data)
    loadData(data);
  }
  return (
    <Button variant="contained" onClick={makeRequest}>
      Load
    </Button>
  );
};
export default MaterialButton;
