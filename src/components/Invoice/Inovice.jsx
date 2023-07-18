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
import Image from "next/image";
import { CustomDivider } from "../Layout";

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

const Inovice = () => {
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
    <Grid item xs={6} md={3} sx={{ mt: "50px" }}>
      <TableContainer
        component={Paper}
        elevation={8}
        sx={{
          borderRadius: "0px",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          marginTop: "20px",
          pt: "30px",
          pl: "20px",
          ml: "20px",
          width: "75vw",
        }}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={4} sx={{ mt: "-30px" }}>
              <Box>
                <Image src="/images/logo.jfif" width="150" height="150" />
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box>
                <Typography
                  sx={{ fontSize: "16px", fontWeight: 600, mb: "10px" }}
                >
                  TAX INOVICE [Purchase]
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>
                  Company Name: TOTAL CARE EUROPE
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>
                  UNIPESSOAL LDA
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box>
                <Typography
                  sx={{ fontSize: "16px", fontWeight: 700, mb: "10px" }}
                >
                  TOTAL PURCHASE
                </Typography>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    mb: "8px",
                    bgcolor: "#000",
                    p: "20px",
                    color: "#FFF",
                    textAlign: "center",
                  }}
                >
                  USD 70.00
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Divider />
          <Grid container spacing={2} sx={{ mt: "20px" }}>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Typography
                  sx={{ fontSize: "16px", fontWeight: 600, mb: "10px" }}
                >
                  Corporate Office
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>
                  TOTAL CARE EUROPE UNIPESSOAL LDA
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>
                  Lorem ipsum dolor 
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>
                  Tell:+48588658455
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Typography
                  sx={{ fontSize: "16px", fontWeight: 600, mb: "10px" }}
                >
                 INVOICE INFO
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>
                  Invoice Number: T34854485
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>
                  Invoice Date: 7-7-1998
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>
                  User ID: T85868
                </Typography>
              </Box>
            </Grid>


            
          </Grid>
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
                <StyledTableCell align="left">#</StyledTableCell>
                <StyledTableCell align="left">ITEM</StyledTableCell>
                <StyledTableCell align="left">HSN Code</StyledTableCell>
                <StyledTableCell align="left">Size</StyledTableCell>
                <StyledTableCell align="left">Unit Price</StyledTableCell>
                <StyledTableCell align="left">Qty</StyledTableCell>
                <StyledTableCell align="left">VAT Amount</StyledTableCell>
                <StyledTableCell align="left">Amount</StyledTableCell>
                <StyledTableCell align="left">Total RSV</StyledTableCell>
                <StyledTableCell align="left">Total Amount</StyledTableCell>
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
      Another table
    </Grid>
  );
};

export default Inovice;
