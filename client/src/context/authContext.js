import {createContext, useEffect, useState} from 'react';
import axios from "axios";
import {backendLink} from "../index"

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [currentUser , setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async(inputs)=>{
        const res = await axios.post(`${backendLink}/api/auth/login`,inputs);
        setCurrentUser(res.data)
    }
    const logout = async(inputs)=>{
        await axios.post(`${backendLink}/api/auth/logout`);
        setCurrentUser(null)
    }
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    },[currentUser])

    return <AuthContext.Provider value={{currentUser, login, logout}} >{children}</AuthContext.Provider>
}
