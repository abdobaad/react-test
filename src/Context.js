import { createContext,useEffect,useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
   const [isAuth,setIsAuth] = useState(false)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
        setIsAuth(user.isAuth)
    }
  },[]);
  const LgoutUser = () =>{
    localStorage.removeItem("user");
    window.location.href = "/"
  } 
  return (
    <AppContext.Provider value={{ isAuth,LgoutUser }}>
        {children}
    </AppContext.Provider>
  )
};