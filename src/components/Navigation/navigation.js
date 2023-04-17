import React from "react";
import { Link } from "react-router-dom";
import { MenuItem, MenuList } from "@mui/material";

function Navigation({ handleClose }) {
  return (
    <nav>
      <MenuList
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightGreen",
        }}
        id="simple-menu"
        display="flex"
        flex-direction="row"
        justify-content="space-between"
        keepMounted
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={`/add-product`} style={{ textDecoration: 'none', color: 'black' }}>Create Product</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={`/edit-product`} style={{ textDecoration: 'none', color: 'inherit' }}>Edit Product</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={`/delete-product`} style={{ textDecoration: 'none', color: 'inherit' }}>Delete Product</Link>
        </MenuItem>
      </MenuList>
    </nav>
  );
}

export default Navigation;
