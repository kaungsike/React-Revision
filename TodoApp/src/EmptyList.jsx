import React from 'react'

const EmptyList = () => {
  return (
    <div className="hidden flex-col items-center gap-2 first:flex">
    <img
      className="w-[300px]"
      src="https://todo-app-java-script-tailwindcss.vercel.app/src/undraw_selection_re_ycpo.svg"
      alt="empty state image"
    />
    <p>There is no list</p>
  </div>
  )
}

export default EmptyList