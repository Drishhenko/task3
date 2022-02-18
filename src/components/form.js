import { useState } from "react";
// import {FormControl, Button} from 'react-bootstrap'
import { Input, Button } from "@mui/material";
import "../App.css";

const AuthForm = ({ handleClick, title, isRegister }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="wrapper-form">
      {isRegister && (
        <Input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
      )}
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <Input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <Button
        variant="contained"
        onClick={() => handleClick(email, pass, name)}
      >
        {title}
      </Button>
    </div>
  );
};
export { AuthForm };
