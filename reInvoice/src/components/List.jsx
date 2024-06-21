import { Table } from 'flowbite-react'
import React from 'react'

const List = ({item}) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      {item.product.name}
    </Table.Cell>
    <Table.Cell className='text-end'>$ {item.product.price}</Table.Cell>
    <Table.Cell className='text-end'>{item.quantity}</Table.Cell>
    <Table.Cell className='text-end'>$ {item.cost}</Table.Cell>
    <Table.Cell>
      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
        Remove
      </a>
    </Table.Cell>
  </Table.Row>
  )
}

export default List