import { Button, Label, TextInput } from "flowbite-react";
import React, { useRef } from "react";

const NewProductCreateForm = ({ addNewProduct }) => {
  const formRef = useRef();

  const nameRef = useRef();

  const priceRef = useRef();

  const stockRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();

    const newProduct = {
        id : Date.now(),
        name : nameRef.current.value,
        price : priceRef.current.value,
        stock : stockRef.current.value
    }

    addNewProduct(newProduct)


    formRef.current.reset();
  };
  return (
    <div className="mt-auto">
      <form ref={formRef} action="#">
        <div className="grid grid-cols-4 gap-x-3">
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Name" />
            </div>
            <TextInput ref={nameRef} id="password1" type="text" required />
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Price" />
            </div>
            <TextInput ref={priceRef} id="password1" type="number" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Stock" />
            </div>
            <TextInput ref={stockRef} id="password1" type="number" required />
          </div>
          <Button
            onClick={handleForm}
            type="submit"
            className="col-span-3 mt-auto"
            color="success"
          >
            Success
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewProductCreateForm;
