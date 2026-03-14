import React, { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState({ role: "admin", email: "demo@playaescondidavacationhomes.com" });

  const value = useMemo(() => ({
    session,
    signIn(email) { setSession({ role: "admin", email }); },
    signOut() { setSession(null); }
  }), [session]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
