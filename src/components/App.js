
import React, {useState} from "react";
import './../styles/App.css';
import Input from "./Input";
import List from "./List";


const App = () => {
    const[data,setData] = useState([]);
  return (
    <div>
      <Input data={data} setData={setData} />
        <List data={data} setData={setData} />
    </div>
  )
}

export default App
