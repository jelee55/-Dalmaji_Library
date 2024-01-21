import { createContext, useState } from "react";

const DalmajiContext = createContext({ loginMember: null, setLoginMember: () => {} });
// const DalmajiContext = createContext();
export default DalmajiContext;

const DalmajiContextProvider = ({children}) => {

    const [ loginMember, setLoginMember ] = useState(null);

    const obj = {
        loginMember ,
        setLoginMember ,
    };

    if(loginMember === null){
        const jsonStr = sessionStorage.getItem("loginMemberVo");
        console.log("jsonStr" , jsonStr);
        if(jsonStr !== null){
            const vo = JSON.parse(jsonStr);
            setLoginMember(vo);
        }
    }

  return <DalmajiContext.Provider value={obj}>
      {children}
  </DalmajiContext.Provider>
}

export {DalmajiContext , DalmajiContextProvider};