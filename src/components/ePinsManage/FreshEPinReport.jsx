import { styled } from "@mui/material/styles";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const data = [
  {
    demandId: 1,
    nameOfComplainant: "rtytytty",
    causeOfAction: "ertrtyty",
    quantumOfClaim: "3443443",
    assignedTo: "ttoytty",
    stage: "4545",
  },
];

import {
  Box,
  Paper,
  Grid,
  Typography,
  Chip,
  TablePagination,
  Stack,
  Divider,
} from "@mui/material";
import { CustomTextField } from "../customComponents/TextField";
import MainButton from "../customComponents/MainButton";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  ["&.${tableCellClasses.head}"]: {
    color: theme.palette.common.white,
    backgroundColor: "#0A2240",
  },
  ["&.${tableCellClasses.body}"]: {
    fontSize: "12px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    "&:hover": {
      backgroundColor: "#dedede",
    },
  },
  "&:nth-of-type(even)": {
    "&:hover": {
      backgroundColor: "#dedede",
    },
  },
}));

const FreshEPinReport = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(1); // reset page to 1 when page size changes
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentPageData =
    data && data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Grid item xs={6} md={3} sx={{ml:"20px", mt:'40px'}}>
      <TableContainer
        component={Paper}
        elevation={8}
        sx={{
          borderRadius: "0px",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          pb: "10px",

          width: "75vw",
        }}
      >
        <Box sx={{ width: "75vw", mt: "30px", }}>
          <Typography sx={{ fontSize: "20px", fontWeight: 700, m: "20px" }}>
            Fresh E Pin Report
          </Typography>
<Divider/>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignContent: "right",
              alignItems: "right",
              justifyContent: "space-between",
              mt:'20px'
            }}
          >
            <Box></Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "250px",
                gap: 3,
                mr: "30px",
                mb: "20px",
              }}
            >
              <CustomTextField placeholder="Type to search" />
              
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "block", overflowX: "auto" }}>
          <Table
            sx={{
              minWidth: 500,
            }}
            aria-label="customized table"
          >
            <TableHead
              sx={{
                bgcolor: "#5F9EA0",
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
              }}
            >
              <TableRow>
                <StyledTableCell align="left">S.No</StyledTableCell>
                <StyledTableCell align="left">Pin</StyledTableCell>
                <StyledTableCell align="left">Amount</StyledTableCell>
                <StyledTableCell align="left">
                  Reciever ID
                </StyledTableCell>
                <StyledTableCell align="left">
                Receiver Username
                </StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Create Date</StyledTableCell>
          </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                currentPageData.map((value) => (
                  <StyledTableRow>
                    <StyledTableCell scope="row">
                      {value.demandId}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ align: "left", textTransform: "capitalize" }}
                    >
                      {value.nameOfComplainant}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ align: "left", textTransform: "capitalize" }}
                    >
                      {value.nameOfComplainant}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ align: "left", textTransform: "capitalize" }}
                    >
                      {value.nameOfComplainant}
                    </StyledTableCell>

                    <StyledTableCell
                      style={{ align: "left", textTransform: "capitalize" }}
                    >
                      {value.nameOfComplainant}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ align: "left", textTransform: "capitalize" }}
                    >
                      {value.nameOfComplainant}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ align: "left", textTransform: "capitalize" }}
                    >
                      {value.nameOfComplainant}
                    </StyledTableCell>
                 
                   
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
     

        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={data && data.length}
          page={page - 1} // subtract 1 from page state variable to get zero-based cases
          onPageChange={handleChangePage}
          rowsPerPage={pageSize}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Grid>
  );
};

export default FreshEPinReport;
