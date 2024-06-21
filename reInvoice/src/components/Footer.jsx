import { Button } from 'flowbite-react'
import React from 'react'

const Footer = ({handleInventoryBtn}) => {


  return (
    <div className='flex justify-end gap-3 mt-auto'>
        <Button onClick={handleInventoryBtn} color="light">Manage Inventory</Button>
        <Button color="success">Print</Button>
    </div>
  )
}

export default Footer