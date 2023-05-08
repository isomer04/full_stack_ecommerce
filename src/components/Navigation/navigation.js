// import React from "react";
// import { Link } from "react-router-dom";
// import { MenuItem, MenuList } from "@mui/material";

// function Navigation({ handleClose }) {
//   return (
//     <nav>
//       <MenuList
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "lightGreen",
//         }}
//         id="simple-menu"
//         display="flex"
//         flex-direction="row"
//         justify-content="space-between"
//         keepMounted
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose}>
//           <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link to={`/add-product`} style={{ textDecoration: 'none', color: 'black' }}>Create Product</Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link to={`/edit-product`} style={{ textDecoration: 'none', color: 'inherit' }}>Edit Product</Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link to={`/delete-product`} style={{ textDecoration: 'none', color: 'inherit' }}>Delete Product</Link>
//         </MenuItem>
//       </MenuList>
//     </nav>
//   );
// }

// export default Navigation;

/** @format */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { MenuLink, MenuBar } from "./styled";
import AuthProvider from "../AuthProvider";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";

const pages = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Product",
    url: "/product-list",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Account",
    url: "/login",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = (props) => {
  return (
    <MenuBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <MenuLink
                to={page.url}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                {page.name}
              </MenuLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </MenuBar>
  );
};

export default Header;
