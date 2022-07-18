import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    _getUser();
  }, []);

  const _getUser = async () => {
    await axios
      .get("/api/users")
      .then(res => {
        if (res.status === 200) {
          const resultData = res.data;

          console.log(resultData, "확인");
        } else if (res.status === 400) {
          alert("res.status === 400");
        }
      })
      .catch(e => console.error(e));
  };

  return <div>Hello pagination</div>;
};

export default App;
