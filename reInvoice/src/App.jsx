import React from "react";
import { FaBeer } from 'react-icons/fa';
import { useState } from "react";
import MainHeader from "./components/MainHeader";
import SubHeading from "./components/SubHeading";
import ListCreateForm from "./components/ListCreateForm";
import ListGroup from "./components/ListGroup";
import Footer from "./components/Footer";
import Drawer from "./components/DrawerMe";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple",
      price: 388.88,
      stock: 40,
    },
    {
      id: 2,
      name: "Banana",
      price: 350.55,
      stock: 30,
    },
    {
      id: 3,
      name: "Mango",
      price: 299.99,
      stock: 10,
    },
  ]);

  const [items,setItems] = useState([
    {
      id : 1,
      product : {
        id : 1,
        name : 'Apple',
        price : 300.50,
        stock : 40
      },
      quantity : 2,
      cost : 600.99
    }
  ])

  const [isOpen, setIsOpen] = useState(false);

  const addNewProduct = (newProduct) => {
    setProducts([...products,newProduct])
  }

  const addNewItem = (newItem) => {
    setItems([...items,newItem])
  }

  const handleInventoryBtn = () => {
    setIsOpen(!isOpen);
  };

  const handleQuantity = (id,amount) => {
    setItems(items.map((item) => {
      if(item.id === id){
        item.quantity = parseInt(item.quantity) + amount;
        item.cost = parseFloat(item.product.price*item.quantity)
      }
      return item;
    }))
  }

  const HandleDelList = (id) => {
    setItems(items.filter((item) => item.id!==id 
    
  ))
  }



  return (
    <main className="min-h-screen max-w-[700px] mx-auto py-[60px] flex flex-col">
      <MainHeader></MainHeader>
      <SubHeading></SubHeading>
      <section>
        <ListCreateForm addNewItem={addNewItem} addNewProduct={addNewProduct} products={products}></ListCreateForm>
        <ListGroup HandleDelList={HandleDelList} handleQuantity={handleQuantity} items={items} products={products}></ListGroup>
      </section>
      <Footer handleInventoryBtn={handleInventoryBtn}></Footer>
      <Drawer addNewProduct={addNewProduct} products={products} isOpen={isOpen} handleInventoryBtn={handleInventoryBtn}></Drawer>
    </main>
  );
};

export default App;
