import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthForm } from "./form";
import { setUser } from "store/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    password += "anchor";
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        push("/");
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
    <div>
      <AuthForm handleClick={handleLogin} title="Login" />
    </div>
  );
};

export { Login };
