import {  useState } from "react"
import { Navigate } from "react-router-dom"

export function AuthWrapper({children}){

    // eslint-disable-next-line no-unused-vars
    const [token, setToken] = useState(() =>
      localStorage.getItem("access_token") || ""
    );

    return <div>
       {
        token.length>0? children:<Navigate to="/signin"/>
       }
    </div>
}