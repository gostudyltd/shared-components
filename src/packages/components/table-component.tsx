import React from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TableSortLabel,
  SxProps,
  Paper,
  Typography,
  ThemeProvider,
} from "@mui/material";
import dymmyData from "../dummy-data.json";
import theme from "../config/theme";

const tableData = dymmyData;
let totalExpense: number = 0;

export type TableExampleProps = {
  title?: string;
  data?: typeof tableData;
  sx?: SxProps;
  test?: string;
  externalTheme?: boolean;
};

export const TableExample: React.FC<TableExampleProps> = ({
  title,
  data,
  sx = {},
  externalTheme,
}) => {
  const tableContainerSx: SxProps = {
    border: "1px solid rgba(128,128,128,0.4)",
    width: "max-content",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 4,
    borderRadius: 2,
    maxHeight: 500,
  };

  const dataUsed = data ? data : tableData;

  const renderTable = () => (
    <>
      <Typography variant="h1">{title || "Default title"}</Typography>
      <TableContainer
        component={Paper}
        sx={{
          ...tableContainerSx,
          ...sx,
        }}
      >
        <Table stickyHeader={true} aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel direction={"desc"}>Departments</TableSortLabel>
              </TableCell>
              <TableCell>Project Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataUsed.map((row) => (
              <TableRow key={row.project_name}>
                <TableCell>{row.departments}</TableCell>
                <TableCell>{row.project_name}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.member_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableCell align="right">Total: {totalExpense}€ </TableCell>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );

  return externalTheme ? (
    renderTable()
  ) : (
    <ThemeProvider theme={theme()}>{renderTable()}</ThemeProvider>
  );
};
