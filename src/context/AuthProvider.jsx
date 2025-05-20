import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("hello");
    const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
        loading,
        setLoading,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;