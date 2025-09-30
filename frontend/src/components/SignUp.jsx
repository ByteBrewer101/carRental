import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectDemo } from "./CustomSelect";
import { MorphingText } from "./ui/morphing-text";
import { useNavigate } from "react-router-dom";
import { useSignUpHooks } from "@/Pages/Hooks/AuthHooks";
import { useState } from "react";

export function SignUp() {
  const nav = useNavigate();
  const { loading, handleSignUp } = useSignUpHooks();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState({});

  function handleSignIn() {
    nav("/signin");
  }

  // Validate individual fields on change
  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "username":
        newErrors.username = /^[a-zA-Z0-9_]{3,}$/.test(value)
          ? ""
          : "Username must be 3+ chars (letters, numbers, _)";
        break;
      case "email":
        newErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Enter a valid email";
        break;
      case "password":
        newErrors.password =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value)
            ? ""
            : "Password should be: 8+ chars, uppercase, lowercase, number & special char";
        break;
      case "role":
        newErrors.role = value ? "" : "Please select a role";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  // Generic change handler
  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setUser((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  // For SelectDemo
  const handleRoleChange = (value) => {
    setUser((prev) => ({ ...prev, role: value }));
    validateField("role", value);
  };

  return (
    <div className="rounded-sm z-10 w-[80%] flex justify-center p-4">
      {/* Morphing Text Section */}
      <div className="md:flex hidden w-full items-center text-white">
        <MorphingText
          texts={[
            "Drive your dream car today",
            "Affordable rentals, anytime",
            "Luxury & economy cars available",
            "Easy booking in minutes",
            "No hidden charges, ever",
            "24/7 roadside assistance",
            "Explore new destinations hassle-free",
            "Weekend deals you can’t miss",
            "Comfort, style, and safety guaranteed",
            "Rent it today, ride it your way",
          ]}
          className="text-5xl"
        />
      </div>

      {/* Form Section */}
      <div className="w-full p-4 min-h-[500px] flex flex-col justify-center items-center">
        <div className="shadow-xl shadow-white/10 backdrop-blur-xs bg-white/5 border border-white/5 p-8 rounded-lg space-y-4 w-[70%] flex flex-col items-center">
          <h1 className="text-white font-bold text-3xl mb-4">SignUp</h1>

          {/* Username */}
          <div className="w-full">
            <Input
              onChange={handleChange("username")}
              value={user.username}
              className="dark text-white w-full"
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-red-800 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div className="w-full">
            <Input
              onChange={handleChange("email")}
              value={user.email}
              className="dark text-white w-full"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-800 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="w-full">
            <Input
              type="password"
              onChange={handleChange("password")}
              value={user.password}
              className="dark text-white w-full"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-800 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Role Select */}
          <div className="w-full">
            <SelectDemo setUser={handleRoleChange} />
            {errors.role && (
              <p className="text-red-800 text-sm mt-1">{errors.role}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            onClick={() => handleSignUp(user)}
            className="w-[40%] flex justify-center items-center gap-2"
            size="sm"
            variant="outline"
            disabled={loading || Object.values(errors).some((e) => e !== "")}
          >
            {loading && (
              <div className="h-5 w-5 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
            )}
            Submit
          </Button>

          {/* Sign In Link */}
          <p className="text-white mt-2">
            Have an account?
            <span className="ml-2">
              <button
                onClick={handleSignIn}
                className="text-blue-500 underline cursor-pointer"
              >
                Sign In
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
