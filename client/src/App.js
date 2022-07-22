import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    _getData();
  }, []);

  const _getData = async () => {
    await axios
      .get("api/getSampleList")
      .then(res => {
        if (res.status === 200) {
          const resultData = res.data;

          console.log(resultData, "resData");
        } else if (res.status === 400) {
          alert("res.status === 400");
        }
      })
      .catch(e => console.error(e, "error"));
  };

  return <div>Hello React</div>;
};

export default App;
