import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { key, value } from "../interfaces";
const MaterialButton = ({ loadData }: any) => {
  async function makeRequest() {
    const getKey = await axios.get<key>(
      "https://asia-east2-candidateplayground.cloudfunctions.net/key",
      {
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    );
    let apiKey = getKey.data.key;

    const getValue = await axios.get<value>(
      "https://asia-east2-candidateplayground.cloudfunctions.net/value",
      {
        headers: {
          Authorization: `${apiKey}`,
          "Access-Control-Allow-Origin": "*",
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
