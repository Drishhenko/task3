import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/use-auth";
import { removeUser } from "store/slices/userSlice";
import DataTable from "../components/table";
import {Button} from '@mui/material'
import "../App.css";

const Table = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://auth-email-6d64f-default-rtdb.europe-west1.firebasedatabase.app/users.json`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("response:::", response);
        const result = response
          ? Object.keys(response).map((key) => ({
              ...response[key],
              id: key,
            }))
          : [];
        setData(result);
      });
  }, []);

  console.log("isAuth :", isAuth);

  const getRows = useCallback(
    (row) => {
      return row
        ? row.map((e) => {
            return {
              id: e.id,
              name: e.name,
              email: e.email,
              registrationDate: e.registrationDate,
              lastLoginDate: new Date(
                +e?.lastLoginAt ||
                  +e?.metadata?.lastLoginAt ||
                  +e?.lastLoginDate
              ).toLocaleDateString(),
              status: e?.status,
            };
          })
        : [];
    },
    [data]
  );

  return isAuth ? (
    <div>
      Table
      <DataTable rows={getRows(data)} />
      <Button
        onClick={() => dispatch(removeUser())}
      >
        Log out from {email}
      </Button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export { Table };
