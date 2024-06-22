import { Table } from 'flowbite-react'
import React from 'react'
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi2";

const List = ({item ,handleQuantity,HandleDelList}) => {

  const addQuantityBtn = () => {
    handleQuantity(item.id,+1)
  }

  const subQuantityBtn = () => {
    if(item.quantity>1){
      handleQuantity(item.id,-1)
    }
    
  }

  const listDelBtn = () => {
    if(confirm("Are you sure to delete it?")){
      HandleDelList(item.id)
    }
  }

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      {item.product.name}
    </Table.Cell>
    <Table.Cell className='text-end'>$ {item.product.price}</Table.Cell>
    <Table.Cell className='text-end'>
      <div className='flex items-center justify-end gap-2'>
        <button onClick={addQuantityBtn} className='active:scale-75 duration-200'>
        <HiOutlinePlusCircle  />
        </button>
        {item.quantity}
        <button onClick={subQuantityBtn} className='active:scale-75 duration-200'>
        <HiOutlineMinusCircle />
        </button>
      </div>
      
      </Table.Cell>
    <Table.Cell className='text-end'>$ {item.cost}</Table.Cell>
    <Table.Cell>
      <button onClick={listDelBtn} href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
        Remove
      </button>
    </Table.Cell>
  </Table.Row>
  )
}

export default List