import { SignInApi, SignUpApi } from "@/config/constants";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useSignUpHooks() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate()

//   const sampleUser = {
//     username: "atharva1233434",
//     email: "atharvarfffv@example.com",
//     password: "securePassword123",
//     type_of_user: "user",
//   };

  async function handleSignUp(currUser) {
    try {
      setLoading(true);
      
 
      const response = await axios.post(SignUpApi, currUser);
      const currData = response.data;
      const tempUser = JSON.stringify({
        username: currData.username,
        role: currData.role
      })
      setData(currData);
      const currToken = currData.token.split(' ')[1]
      
      localStorage.setItem("access_token",currToken)
      localStorage.setItem("userData", tempUser)
      toast.success("User has been created");
      nav('/dashboard')
    } catch (e) {
      setError(e.message || "error occured");
      toast.error("Unable to create user");
    } finally {
      setLoading(false);
    }
  }
  return {
    loading,
    data,
    error,
    handleSignUp,
  };
}


export function useSigninHooks(){
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const nav = useNavigate()

  async function handleSignIn(user){
    try{
      setLoading(true)
      const response = await axios.post(SignInApi, user)
      const currToken = response.data.token.split(' ')[1]
      const currUser = JSON.stringify({
        username: response.data.username,
        role: response.data.role
      })
      localStorage.setItem("access_token", currToken)
      localStorage.setItem("userData", currUser)
      toast.success("Signin successful")
      nav("/dashboard")
    }catch(e){
      setError(e.message||"Error Occurred")
      toast.error("Unable to signin")
    }finally{
      setLoading(false)
    }
  }
  return{
    loading,
    error,
    handleSignIn
  }

}