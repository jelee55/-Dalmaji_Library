// MemberContext.jsx
import React, { createContext, useState, useContext } from 'react';

const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [loginMemberVo, setLoginMemberVo] = useState(null);

  const login = (member) => {
    setLoginMemberVo(member);
  };

  const logout = () => {
    setLoginMemberVo(null);
  };

  return (
    <MemberContext.Provider value={{ loginMemberVo, login, logout }}>
      {children}
    </MemberContext.Provider>
  );
};

export const useMemberContext = () => {
  return useContext(MemberContext);
};
