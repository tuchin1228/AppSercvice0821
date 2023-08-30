import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("測試");
    FetchData();
    
    // Container Env 測試
    console.log('Hello ' + import.meta.env.keyvaultsecret0829)
    console.log('Hello ' + import.meta.env.ConnectString)
    console.log('Hello ' + import.meta.env.VITE_TEST)
  }, []);


  // APIM 測試
  let config = {
    headers: {
      "Ocp-Apim-Subscription-Key": "66dadb028257452f94ab48e203afe94b",
    },
  };

  const FetchData = async () => {
    console.log("取的資料");
    let apiUrl = "https://api-net0825.azure-api.net/api/test";
    const res = await axios
      .get(apiUrl, {
        headers: {
          "Ocp-Apim-Subscription-Key": "66dadb028257452f94ab48e203afe94b",
        },
      })
      .catch((err) => {
        console.log("api發生錯誤", err);
      });

    if (res.status == 200) {
      console.log("API撈成功 message = ", res.data.message);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>version 0828-16-03</p>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
