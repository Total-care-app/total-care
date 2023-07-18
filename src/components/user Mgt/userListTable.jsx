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

const UserListTable = () => {
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
    <Grid
      item
    //  this
      sx={{
        mt: "50px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* this */}
      <Box sx={{display:"flex", justifyContent:'right' }}>
        <MainButton float="right" text="Export in Excell" />
      </Box>
      <TableContainer
        component={Paper}
        elevation={8}
        sx={{
          borderRadius: "0px",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          bgcolor: "#dedede",
          ml:'10px',
       flex:1,
          marginTop: "20px",
          pt: "30px",
          pl: "20px",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
            User List
          </Typography>

          <Stack
            direction="row"
            width="60%"
            spacing={2}
            marginBottom={"20px"}
            marginTop={"20px"}
          >
            <CustomTextField placeholder="Enter start Date" />
            <CustomTextField placeholder="Enter end Date" />
            <MainButton width="400px" text="Submit" />
          </Stack>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignContent: "right",
              alignItems: "right",
              justifyContent: "space-between",
            }}
          >
            <Box></Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "400px",
                gap: 3,
                pr: "50px",
                marginBottom: "20px",
              }}
            >
              <CustomTextField placeholder="Type to search" />
              <MainButton width="200px" text="Submit" />
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "block", overflowX: "auto" }}>
          <Table
            sx={{
              minWidth: 900,
              tableLayout: "fixed",
             
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
                <StyledTableCell align="left">User ID</StyledTableCell>
                <StyledTableCell align="left">User Name</StyledTableCell>
                <StyledTableCell align="left">Password</StyledTableCell>
                <StyledTableCell align="left">Full Name</StyledTableCell>
                <StyledTableCell align="left">Position</StyledTableCell>
                <StyledTableCell align="left">User Type</StyledTableCell>
                <StyledTableCell align="left">Package</StyledTableCell>
                <StyledTableCell align="left">User Rank</StyledTableCell>
                <StyledTableCell align="left">Sponsor ID</StyledTableCell>
                <StyledTableCell align="left">Phone No.</StyledTableCell>
                <StyledTableCell align="left">
                  Registration Date
                </StyledTableCell>
                <StyledTableCell align="left">Activation Date</StyledTableCell>
                <StyledTableCell align="left">Edit</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
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
                      {value.causeOfAction}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ align: "left", textTransform: "capitalize" }}
                    >
                      {value.quantumOfClaim}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ align: "left", textTransform: "capitalize" }}
                    >
                      {value.assignedTo}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ align: "left", textTransform: "capitalize" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Chip label={value.stageOfDemand} size="small" />
                        <ArrowForwardIosIcon
                          sx={{
                            color: "#000000",
                            fontSize: "14px",
                            "&:hover": {
                              color: "#0A2240",
                              cursor: "pointer",
                              transform: "scale(1.4)",
                              transitionDelay: "1s",
                            },
                          }}
                        />
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
        {/* <Box sx={{ position: "relative", p: "0px 20px" }}>
          {data && data.length == 0 && (
           
          )}
        </Box> */}

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

export default UserListTable;
