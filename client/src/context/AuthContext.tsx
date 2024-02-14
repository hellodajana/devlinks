import { createContext, useState, useEffect, ReactNode, FC } from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: true,
});

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const loggedIn = !!localStorage.getItem("token");
      setIsAuthenticated(loggedIn);
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  const value = { isAuthenticated, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
