import React from 'react'
import em from "./assets/em.svg"

const EmptyState = () => {
  return (
    <div className="hidden flex-col items-center gap-2 first:flex">
    <img className="w-[300px]" src={em} />
    <p>There is no list</p>
  </div>
  )
}

export default EmptyState