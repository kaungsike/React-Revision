import React, { useRef } from "react";
import { Button, Label, Select, TextInput } from "flowbite-react";

const ListCreateForm = ({ products, addNewProduct ,addNewItem }) => {

  const formRef = useRef();

  const selectRef = useRef();
  const quantityRef = useRef();

  const handleForm = (e) => {
    e.preventDefault(); 

    const productInfo = products.find((product) => 
    
      product.name ==selectRef.current.value

    )

    const cost = (productInfo.price*quantityRef.current.value).toFixed(2);

    console.log(productInfo)

    const newProduct = {
      id : Date.now(),
      product : productInfo,
      quantity : quantityRef.current.value,
      cost : cost,
    }

    addNewItem(newProduct)


    

  formRef.current.reset();
  };

  return (
    <form ref={formRef} action="#" className="mb-7">
      <div className="grid grid-cols-5 gap-3">
        <div className="max-w-md col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="Select Product" />
          </div>
          <Select ref={selectRef} name="product-name" id="countries" required>
            {products.map((product) => (
              <option key={product.id} id={product.id}>{product.name}</option>
            ))}
          </Select>
        </div>
        <div className="col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="base" value="Quantity" />
          </div>
          <TextInput ref={quantityRef} id="quantity" type="number" sizing="md" />
        </div>
        <Button
          onClick={handleForm}
          type="submit"
          className="col-span-1 flex justify-center mt-[30px] items-center"
          color="success"
        >
          Buy
        </Button>
      </div>
    </form>
  );
};

export default ListCreateForm;
