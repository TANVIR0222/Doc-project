import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Page/Home/Firebase/Firebase.confic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children} ) => {

    // 
    const [user, setuser] = useState(null);
    // 
    const [loader, setloader] = useState(true);

    // create user
    const createUser = (email , pass) =>{
        setloader(true);
        return createUserWithEmailAndPassword(auth, email, pass)

    }
    // create user
    const login = (email , pass) =>{
        setloader(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logOut = () =>{
        setloader(true)
        return signOut(auth);
    }

    const updateProfile = (name , email) =>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: email
        })
    }

    useEffect( () => {
        const unsubcribe =  onAuthStateChanged(auth , currentuser => {
            setuser(currentuser);
            console.log('current user' , currentuser);
            setloader(false);
        })

        return () => {
            return unsubcribe();
        }
    
    }, []);


    const authInfo ={
        user,
        loader,
        createUser,
        login,
        logOut,
        updateProfile,

    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;