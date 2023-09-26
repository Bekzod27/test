import { createContext, useState } from "react";
import axios from "axios";
export const Basketcontext = createContext(null);

const BasketProvider = ({ children }) => {
  
  const [store, setStore] = useState ([]);
  const setBasket = (data) => {
    setStore([...store, data]);
  };
  const getData = () => {
       axios
        .get("http://localhost:5000/api/posts")
        .then((result) => setStore(result.data));
    
  };

    getData()


  return (
    <Basketcontext.Provider value={{ setBasket,store,setStore }}>
      {children}
    </Basketcontext.Provider>
  );
};

export default BasketProvider;