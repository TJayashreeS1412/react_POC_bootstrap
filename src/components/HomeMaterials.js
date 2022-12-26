import axios from "axios";
import { useEffect, useState } from "react";
import "../scss/Home.scss";
import CardMaterial from "./CardMaterial";

function HomeMaterial() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="body">
      <h1>home</h1>
      <CardMaterial data={data}></CardMaterial>
    </div>
  );
}

export default HomeMaterial;
