import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { getDatabase, ref, set } from "firebase/database";

const columns = [
  { field: "id", headerName: "ID", width: 300, sortable: false },
  { field: "name", headerName: "Name", width: 150 },
  { field: "email", headerName: "Email", width: 160 },
  { field: "registrationDate", headerName: "Registration date", width: 220 },
  {
    field: "lastLoginDate",
    headerName: "Last login date",
    type: "",
    width: 200,
  },
  { field: "status", headerName: "Status", width: 100, sortable: false },
];

function ColorButtons({ handleBlock, handleUnBlock }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="error" onClick={() => handleBlock()}>
        Block
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => handleUnBlock()}
      >
        Unblock
      </Button>
    </Stack>
  );
}

export default function DataTable({ rows }) {
  const [selectedItems, setSelectedItems] = useState(null);
  const db = getDatabase();

  const handleBlock = () => {
    const items = selectedItems.map((e) => rows.find((el) => el.id === e));
    items.forEach((item) => {
      set(ref(db, "users/" + item.id), { ...item, status: "Blocked" });
    });
  };
  const handleUnBlock = () => {
    const items = selectedItems.map((e) => rows.find((el) => el.id === e));
    items.forEach((item) => {
        set(ref(db, "users/" + item.id), { ...item, status: "Active" });
      });
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <ColorButtons handleBlock={handleBlock} handleUnBlock={handleUnBlock} />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        checkboxSelection
        onSelectionModelChange={(ids) => {
          setSelectedItems(ids);
        }}
      />
    </div>
  );
}
