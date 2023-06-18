import React from 'react'
import { useSelector } from 'react-redux'

// step 3 --------------------------------------------------------------------
// give rafce and className bootstrap 
//  next go to app.js 

// const Navbar = () => {
//   return (
// <div>
// <h1 className='text-center my-4 text-primary'>Project Management </h1>
//     <p className='text-center my-4'>Currently 0 task(s) Pending</p>
// </div>
//   )
// }

// export default Navbar

//-----------------------------------------------------------------------------------
// 21 
// add button click pannum bothu p tag la erukkura  task incement aaganum 
// so tasksList call pannanum  adhu taskList.js  la eruinthu kondu vanthathu 
// next go to tasksList.js

const Navbar = () => {
 
  const {tasksList} = useSelector((state)=> state.tasks)

  return (
<div>
<h1 className='text-center my-4 text-primary'>Project Management </h1>
    <p className='text-center my-4'>{`Currently ${tasksList.length} task(s) Pending`}</p>
</div>
  )
  }

export default Navbar