import React, { useContext, useState, useEffect } from "react";

const MyContext = React.createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setCurrentData(data);
    const active = data.filter((item) => item.completed === false);
    setActive(active.length);
  }, [data]);

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        currentData,
        setCurrentData,
        active,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(MyContext);
}

export { ContextProvider, useGlobalContext };
