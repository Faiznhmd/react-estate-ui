import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // this code for when the user login his name is  display
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
