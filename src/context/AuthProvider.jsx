import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState("hello");
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (name, photoURL) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photoURL,
		});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => unsubscribe();
	});

	const authInfo = {
		user,
		loading,
		setLoading,
		createUser,
        setUser,
        updateUserProfile,
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
