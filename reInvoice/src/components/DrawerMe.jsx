"use client";

import React, { useState } from "react";
import { Button, Drawer, Label, TextInput } from "flowbite-react";
import InventoryItem from "./InventoryItem";
import NewProductCreateForm from "./NewProductCreateForm";

const DrawerMe = ({ isOpen, handleInventoryBtn, products,addNewProduct }) => {
  return (
    <>
      <div className="fixed flex min-h-[50vh] items-center justify-center">
        {/* <Button color='success' onClick={handleInventoryBtn}>Show drawer</Button> */}
      </div>
      <Drawer className="flex flex-col" open={isOpen} onClose={handleInventoryBtn}>
        <Drawer.Header className="mb-5" title="Products Inventory" />
        <Drawer.Items>
          {products.map((product) => (
            <InventoryItem key={product.id} product={product}></InventoryItem>
          ))}
        </Drawer.Items>
        <NewProductCreateForm addNewProduct={addNewProduct}></NewProductCreateForm>
      </Drawer>
    </>
  );
};

export default DrawerMe;
