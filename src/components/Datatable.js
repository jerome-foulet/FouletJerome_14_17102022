import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import moment from "moment";

export default function Datatable({ rows }) {
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    { field: "firstName", headerName: "First Name" },
    { field: "lastName", headerName: "Last name" },
    {
      field: "startDate",
      headerName: "Start Date",
      type: "date",
      sortComparator: (v1, v2) =>
        moment(v1).format("X") - moment(v2).format("X"),
    },
    { field: "department", headerName: "Departement" },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      type: "date",
      sortComparator: (v1, v2) =>
        moment(v1).format("X") - moment(v2).format("X"),
    },
    { field: "street", headerName: "Street" },
    { field: "city", headerName: "City" },
    { field: "state", headerName: "State" },
    { field: "zipCode", headerName: "Zip Code", width: 80 },
  ];

  let limitHeight = 667;
  if (rows.length < 10) {
    limitHeight = 145 + 52.2 * rows.length;
  }

  return (
    <div style={{ height: limitHeight, width: "908px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[10, 25, 50, 100]}
        components={{ Toolbar: GridToolbar }}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      />
    </div>
  );
}
