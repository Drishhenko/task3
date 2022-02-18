import React from "react";
import { Routes , Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginPage } from "./pages/loginPage";
import { Table} from "./pages/table";
import {RegisterPage} from './pages/registerPage'
import {Users} from './users'

function App() {
  return (
    <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Table />} />
      </Routes>
  );
}

export default App;
