import { Table } from "flowbite-react";
import React from "react";
import List from "./List";

const ListGroup = ({ products, items,handleQuantity,HandleDelList }) => {

  const totalCost = (items.reduce((pv,cv) => pv+parseFloat(cv.cost),0)).toFixed(2)


  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell className="text-end">Price</Table.HeadCell>
          <Table.HeadCell className="text-end">Quantity</Table.HeadCell>
          <Table.HeadCell className="text-end">Cost</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {items.map((item) => (
            <List HandleDelList={HandleDelList} handleQuantity={handleQuantity} item={item} key={item.id}></List>
          ))}

          {items.length === 0 && (
            <Table.Row>
              <Table.Cell colSpan={5} className="text-center">
                There is no record!
              </Table.Cell>
            </Table.Row>
          )}
          <Table.Row>
            <Table.Cell colSpan={3} className="text-center"> Total Cost</Table.Cell>
            <Table.Cell colSpan={1} className="text-end">$ {totalCost}</Table.Cell>
            <Table.Cell colSpan={1}></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default ListGroup;
