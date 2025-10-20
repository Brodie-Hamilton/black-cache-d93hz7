import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      await fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          setData(responseData);
        });
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Start editing to see some magic happen!</h2>
      {JSON.stringify(data)}
    </div>
  );
}
