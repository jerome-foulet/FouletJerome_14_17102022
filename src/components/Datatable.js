import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import moment from "moment";

export default function Datatable({ rows }) {
  const [pageSize, setPageSize] = useState(10);
  const [displayedRows, setDisplayedRows] = useState(rows);

  const sortDate = (v1, v2) => moment(v1).diff(moment(v2));

  const columns = [
    { field: "firstName", headerName: "First Name" },
    { field: "lastName", headerName: "Last name" },
    {
      field: "startDate",
      headerName: "Start Date",
      type: "date",
      sortComparator: (v1, v2) => sortDate(v1, v2),
    },
    { field: "department", headerName: "Departement" },
    {
      field: "dateOfBirth",
      headerName: "Date of Birth",
      type: "date",
      sortComparator: (v1, v2) => sortDate(v1, v2),
    },
    { field: "street", headerName: "Street" },
    { field: "city", headerName: "City" },
    { field: "state", headerName: "State" },
    { field: "zipCode", headerName: "Zip Code", width: 80 },
  ];

  let limitHeight = 667;
  if (displayedRows.length < 10) {
    limitHeight = 145 + 52.2 * displayedRows.length;
  }

  const refind = (event) => {
    setDisplayedRows(
      rows.filter((row) => {
        return Object.values(row).find((element) => {
          if (
            element
              .toString()
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          )
            return true;
          return false;
        });
      })
    );
  };

  return (
    <div style={{ height: limitHeight, width: "908px" }}>
      <TextField id="search" label="Search" onChange={refind} />
      <br />
      <br />
      <DataGrid
        rows={displayedRows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[10, 25, 50, 100]}
        components={{ Toolbar: GridToolbar }}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowClassName={(params) =>
          (params.indexRelativeToCurrentPage + 1) % 2 === 0 ? "even" : "odd"
        }
      />
    </div>
  );
}
