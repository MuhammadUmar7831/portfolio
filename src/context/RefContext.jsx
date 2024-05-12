import React, { createContext, useRef } from "react";
import {  } from "react";

const RefContext = createContext();

const RefProvider = (props) => {

    const profileRef = useRef(null);
    const technologiesRef = useRef(null);
    const contactRef = useRef(null);
  
    return (
    <RefContext.Provider value={{ profileRef, technologiesRef, contactRef }}>
      {props.children}
    </RefContext.Provider>
  );
};

export { RefContext, RefProvider };