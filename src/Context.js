import React, { createContext } from "react";

export const Store = createContext();

const Context = ({ children }) => {
  const [AddressBook, SetAddressBook] = React.useState([]);
  return (
    <Store.Provider value={{ AddressBook, SetAddressBook }}>
      {children}
    </Store.Provider>
  );
};

export default Context;
