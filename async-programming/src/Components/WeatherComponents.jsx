import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../CustomHook/useFetch";
import Data from "./Data";
import Loader from "./Loader";
import Error from "./Error";

const WeatherComponents = () => {
  const city = "London";

  const BASE_URL = `${process.env.REACT_APP_BASE_URL}${city}${process.env.REACT_APP_BASE_URL_PART_2}${process.env.REACT_APP_API_KEY}`;

  const [count, setCount] = useState(0);
  const { data, loading, error } = useFetch(BASE_URL);

  console.log(data);
  return (
    <div className="App">
      {loading && <Loader />}
      {error && <Error message={error.message} />}
      {data && <Data data={data} />}
    </div>
  );
};

export default WeatherComponents;
