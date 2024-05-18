import React from 'react'

const EmptyState = () => {
  return (
    <div className="hidden flex-col items-center gap-2 first:flex">
    <img className="w-[300px]" src="./src/emptyList.svg" />
    <p>There is no list</p>
  </div>
  )
}

export default EmptyState