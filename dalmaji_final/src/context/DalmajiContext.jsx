import { createContext, useState } from "react";

const DalmajiContext = createContext();
// export default DalmajiContext;

const DalmajiContextProvider = ({children}) => {

    const [loginMember, setLoginMember] = useState(null);
    const [AdminLoginMember, setAdminLoginMember] = useState(null);

    const obj = {
        loginMember ,
        AdminLoginMember ,
        setLoginMember ,
        setAdminLoginMember
    };


    if(loginMember === null){
        const jsonStr = sessionStorage.getItem("loginMemberVo");
        console.log("jsonStr" , jsonStr);
        if(jsonStr !== null){
            const vo = JSON.parse(jsonStr);
            setLoginMember(vo);
        }
    }

    // console.log();
    if(AdminLoginMember === null){
        const jsonStr = sessionStorage.getItem("AdminLoginMemberVo");
        console.log("jsonStr" , jsonStr);
        if(jsonStr !== null){
            const vo = JSON.parse(jsonStr);
            setAdminLoginMember(vo);
        }
    }

  return <DalmajiContext.Provider value={obj}>
      {children}
  </DalmajiContext.Provider>
}

export {DalmajiContext , DalmajiContextProvider};