import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (keyName,value) => {
    setStoredValue(value);
    localStorage.setItem(keyName, value);
  };
  const removeItem = (keyName) =>{
    localStorage.removeItem(keyName);
  }
  const clearAll = () => {
    setStoredValue(initialValue);
    localStorage.clear();
  };

  const getItem = (keyName)=>{
    return localStorage.getItem(keyName);
  }

  return [storedValue, setValue, clearAll,removeItem,getItem];
}

export default useLocalStorage;
