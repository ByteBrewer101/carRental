import { SignUpApi } from "@/config/constants";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

export function useSignUpHooks() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

//   const sampleUser = {
//     username: "atharva1233434",
//     email: "atharvarfffv@example.com",
//     password: "securePassword123",
//     type_of_user: "user",
//   };

  async function handleSignUp(currUser) {
    try {
      setLoading(true);
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const call = await axios.post(SignUpApi, currUser);
      const currData = call.data;
      setData(currData);
      toast.success("User has been created");
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
