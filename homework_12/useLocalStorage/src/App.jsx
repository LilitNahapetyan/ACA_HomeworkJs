import { useState } from "react";
import useLocalStorage from "./Hooks/useLocalStorage";


function App() {
  const [value,setValue] = useState("");
  const [name, setName,removeAll,removeItem,getItem] = useLocalStorage("itemKey");

  const handleInputChange = (e) =>{
    setValue(e.target.value);
  }
  const handleSetBtn = () =>{
    setName(value,value);
    setValue("");
  }
  const handleRemoveAllBtn = ()=>{
    removeAll();
  }

  const handleRemoveItem =()=>{
    setValue("");
    removeItem(value);
  }

  const handleGetItem = ()=>{
    setValue("");
    const returnedValue = getItem(value);
    alert(returnedValue);
  }
  return (
    <div>

      <input
        type="text"
        placeholder="Input some text"
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleSetBtn}>Save item to local storage</button>
      <button onClick={handleRemoveAllBtn}>Remove all item</button>
      <button onClick={handleRemoveItem}>Remove item</button>
      <button onClick={handleGetItem}>Get item from key</button>
      
    </div>
  );
}
export default App;