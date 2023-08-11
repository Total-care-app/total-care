"use client";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";


import {
  Box,
  Paper,
  Grid,
  Typography,
  IconButton,
  Chip,
  Button,
  InputBase,
  TablePagination,
  Skeleton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";

import { useRouter } from "next/router";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: "#0A2240",
  },
  [`&.${tableCellClasses.body}`]: {
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
  const dummyData1 = [];

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5); // default page size is 5

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1); // set page state variable to new page cases + 1
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(1); // reset page to 1 when page size changes
  };

  // calculate the current page's data based on the page size and the current page

  const router = useRouter();

  // filter component
  const filterOptions = [
    { label: "Closed demands", id: 1 },
    { label: "Open demands", id: 2 },
  ];
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

  // search field state
  const [searchString, setSearchString] = useState("");
  console.log(searchString);

  const handleSearchFormChange = (e) => {
    const value = e.target.value;
    setSearchString(value);
  };

  // set table length into rtk


  // fetch  demands
  const demandsurl = `/demand`;
  const closedDemandsUrl = `/demand/closeDemand`;

  // paginate
  // const currentPageData =
  //   data && data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Grid
      item
      xs={6}
      md={3}
      sx={{
        ml: `${20}px`,
        mr: "0px",
        mt:'50px'
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 30px",
            mt: "-20px",
            boxShadow:
              "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              textTransform: "upperCase",
              color: "#0A2240",
              fontWeight: "bold",
              lineHeight: "14px",
            }}
          >
            USers
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                alignItems: "center",
                width: 250,
                display: "flex",
                height: "35px",
                boxShadow: "none",
                border: "1.5px solid #AAB5C0",
              }}
            >
              <IconButton
                sx={{ p: "10px", "&:focus": { border: "none !important" } }}
                aria-label="menu"
              >
                <SearchIcon sx={{ color: searchString ? "#FF681D" : "" }} />
              </IconButton>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  ".MuiInputBase-input": {
                    "&:focus": { border: "none !important" },
                  },
                }}
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={handleSearchFormChange}
                value={searchString}
              />

              {searchString && (
                <IconButton
                  sx={{ p: "10px", "&:focus": { border: "none !important" } }}
                  aria-label="menu"
                  onClick={() => {
                    setSearchString("");
                  }}
                >
                  <ClearIcon sx={{ color: searchString ? "#FF681D" : "" }} />
                </IconButton>
              )}
            </Paper>
           
           
            <Button
              onClick={() => {
                router.push("/addDemand").then((r) => true);
              }}
              sx={{
                display: "flex",
                flexDirection: "row",
                color: "#FFFFFF",
                background: "linear-gradient(180deg, #FF681D 0%, #AA0050 100%)",
                ml: "10px",
                height: "35px",
                textTransform: "capitalize",
                "&:hover": {
                  background:
                    "linear-gradient(-120deg, #FF681D 0%, #AA0050 100%)",
                  transition: "0.5s ease-in",
                },
                "&:focus": {
                  border: "none !important",
                },
              }}
              startIcon={<AddIcon />}
            >
              New User
            </Button>
          </Box>
        </Box>
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "0px",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            pb: "10px",
          }}
        >
          <Table sx={{ minWidth: 800 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">User ID</StyledTableCell>
                <StyledTableCell align="left">User Name</StyledTableCell>
                <StyledTableCell align="left">
                  Phone Number
                </StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Password</StyledTableCell>
                <StyledTableCell align="left">Permissions</StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {
                <StyledTableRow

                // onClick={() => {
                //   router.push(`demandDetails/${value.demandId.slice(2)}`);
                // }}
                >
                  <StyledTableCell scope="row">
                    
                      <Typography sx={{ fontSize: "12px", ml: "10px" }}>
                        {34343}
                      </Typography>
                    
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ align: "left", textTransform: "capitalize" }}
                  >
                    Hello World
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ align: "left", textTransform: "capitalize" }}
                  >
                   Hello World
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ align: "left", textTransform: "capitalize" }}
                  >
                  Hello World
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ align: "left", textTransform: "capitalize" }}
                  >
                  Hello World
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ align: "left", textTransform: "capitalize" }}
                  >
                  Hello World
                  </StyledTableCell>
                  
                </StyledTableRow>
              }
            </TableBody>
          </Table>
          {/* <Box sx={{ position: "relative", p: "0px 20px" }}>
              {data && data.length == 0 && (
               
              )}
            </Box> */}

          {/* no search result? */}

          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={20}
            page={page - 1} // subtract 1 from page state variable to get zero-based cases
            onPageChange={handleChangePage}
            rowsPerPage={pageSize}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </TableContainer>
      </Box>
    </Grid>
  );
};

export default UserListTable;
