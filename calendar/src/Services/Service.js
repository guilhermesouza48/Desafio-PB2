import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  


  const login = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter(user => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ token }));
        setUser({ email, password });
        return;
      } else {
        return "ERROR: login incorrect ";
      }
    } else {
      return "ERROR : not register";
    }
  };

  // const register =  (
  //   firstName,
  //   password,
  //   email,
  //   country,
  //   city,
  //   birthdate,
  //   lastname
  // ) => {
  //   const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

  //   let newUser;

  //   const hasUser = usersStorage?.filter((user) => user.email === email);

  //   if (hasUser?.length) {
  //     return "erros"
  //   }
  //   if (usersStorage) {
  //     newUser = [
  //       ...usersStorage,
  //       { name, password, email, country, city, birthdate, lastname },
  //     ];
  //   } else {
  //     newUser = [{ name, password, email, country, city, birthdate, lastname }];
  //   }

  //   localStorage.setItem("users_bd", JSON.stringify(newUser));

  //   return;
  // };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
