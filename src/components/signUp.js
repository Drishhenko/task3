import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { AuthForm } from "./form";
import { setUser } from "store/slices/userSlice";
import { Users } from "users";

const SignUp = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const handleRegister = (email, password, name) => {
    const auth = getAuth();
    password += "anchor";

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(user, {
          displayName: name,
        }).then(() => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
              name
            })
          );
          Users.create({
            email: user.email,
            id: user.uid,
            name,
            status: "Active",
            registrationDate: user.metadata.creationTime,
            lastLoginDate: '',
          }).then(() => {
            push("/");
          });
        });
      })
      .then(Users.fetch)
      .catch(console.error);
  };

  return (
    <div className="wrapper-form">
      <AuthForm isRegister handleClick={handleRegister} title="Sign up" />
    </div>
  );
};

export { SignUp };
