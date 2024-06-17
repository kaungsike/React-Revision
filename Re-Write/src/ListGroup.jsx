import React from 'react'
import em from "./assets/em.svg";
import List from './List';

const ListGroup = () => {
  return (
    <div id="listGroup" className="w-full h-full">
    {/*list  */}
    {/* <div class="list border group border-teal-400 w-full h-[65px] flex justify-between items-center px-3 text-teal-800 overflow-hidden hover:scale-105 duration-200 mb-2">
                  <aside class="flex items-center h-full gap-2">
                      <input type="checkbox" name="check-box"
                          id="check-box"
                          class="list-check-box w-4 h-4 accent-teal-200 outline-none border border-teal-400">
                      <label for="check-box">Apple</label>
                  </aside>
                  <aside
                      class="h-full flex items-center gap-2 translate-x-[115%] group-hover:translate-x-[5%] duration-300">
                      <button
                          class="border border-teal-400 w-[50px] h-[50px] flex items-center justify-center active:scale-90">
                          <svg xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24" fill="currentColor"
                              class="w-6 h-6 pointer-events-none">
                              <path fill-rule="evenodd"
                                  d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                                  clip-rule="evenodd" />
                          </svg>
                      </button>
                      <button
                          class="border border-teal-400 w-[50px] h-[50px] flex items-center justify-center active:scale-90">
                          <svg xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24" fill="currentColor"
                              class="w-6 h-6 pointer-events-none">
                              <path
                                  d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                              <path
                                  d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                          </svg>
                      </button>
                  </aside>
              </div> */}
              <List/>
    <div className="hidden flex-col items-center gap-2 first:flex">
      <img className="w-[300px]" src={em} />
      <p>There is no list</p>
    </div>
  </div>
  )
}

export default ListGroup