import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addTaskToList } from '../slices/taskSlices';
import {useDispatch}  from "react-redux"
import TaskList from './TasksList';
//----------------------------------------------------------
// step 5 
// go to bootstrap FORM DATA AND ENTER HERE 
// AND CHANGE SOME DETAILS
// next go to App.js 


// const AddTask = () => {
//   return (
//     <>
//      <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Task title</Form.Label>
//         <Form.Control type="email" placeholder="Enter taxt Title" />    
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Task Description</Form.Label>
//         <Form.Control type="text" placeholder="Enter Task Description" />
//       </Form.Group>
      
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </>
//   )
// }

// export default AddTasx

//------------------------------------------------------------------------------------------------------
// 7.
// div kulla button kodukkanum and className kodukkanum 
// useState use Pannanum and form kulla   value={title} onChange={(e)=>setTitle(e.target.value)} kodukkanum 
// new va div create panni <div> kulla <button> tag kodukkanum 
// button ku jsx write pannanum e.preventDefault() koduthu console panna text feild la type pandrathu console la kattum 
//  SO LOCAL STATE LA WORK AGUTHU 
// return kulla erukkuratha Section tag kulla kodukkanum 
// NEXT create TaskList.js and go to TaskList.js



// const AddTask = () => {
//     const [title, setTitle] = useState("")
//     const [description, setDescription] = useState("")

//      const addTask = (e) =>{
//     e.preventDefault()
//     console.log({title, description})
//         }

//     return (
//      <section className='my-5'>
//           <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Task Title</Form.Label>
//           <Form.Control type="text" placeholder="Enter text Title"
//            value={title} onChange={(e)=>setTitle(e.target.value)}/>    
//         </Form.Group>
  
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Task Description</Form.Label>
//           <Form.Control type="text" placeholder="Enter Task Description" 
//            value={description} onChange={(e)=>setDescription(e.target.value)}/>
//         </Form.Group>
        
//        <div className='text-end' >
//        <Button variant="primary" type="submit" onClick={(e)=> addTask(e)}>
//           Add Task
//         </Button>
//        </div>
//       </Form>
//      </section>
//     )
//   }
  
//   export default AddTask

//--------------------------------------------------------------------------------------------------------------------------
// 20 
// import add task and useDpatch also 
// dispatch panna vendiyathu 
// title ,describtion thaan dispatch panna porom 
// addTask la dispatch pannanum 
// like dispatch(addTaskToList({title, description}))
// console la check panna enna write pannamo adha pakka mudium 
// redux status la true + data vum varum with id yoda 
// next go to Navbar.js component 


// const AddTask = () => {
//   const dispatch = useDispatch("")
//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")

//    const addTask = (e) =>{
//   e.preventDefault()
//   console.log({title, description})
//   dispatch(addTaskToList({title, description}))
//       }

//   return (
//    <section className='my-5'>
//         <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Task Title</Form.Label>
//         <Form.Control type="text" placeholder="Enter text Title"
//          value={title} onChange={(e)=>setTitle(e.target.value)}/>    
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Task Description</Form.Label>
//         <Form.Control type="text" placeholder="Enter Task Description" 
//          value={description} onChange={(e)=>setDescription(e.target.value)}/>
//       </Form.Group>
      
//      <div className='text-end' >
//      <Button variant="primary" type="submit" onClick={(e)=> addTask(e)}>
//         Add Task
//       </Button>
//      </div>
//     </Form>
//    </section>
//   )
// }
// export default AddTask

//------------------------------------------------------------------------------------------------------
// 24 
//setTitle("")
// setDescription("") call panni erukkom so display la write panni addTask click pannum bothu 
// kila show aagidum mela normal type ku varum 
// but update task open panna show aagathu so 
// next go to TaskList.js 

const AddTask = () => {
  const dispatch = useDispatch("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

   const addTask = (e) =>{
  e.preventDefault()
  console.log({title, description})
  dispatch(addTaskToList({title, description}))    //-----action payload
     setTitle("")
     setDescription("")

}

  return (
   <section className='my-5'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" placeholder="Enter text Title"
         value={title} onChange={(e)=>setTitle(e.target.value)}/>    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Task Description" 
         value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </Form.Group>
      
     <div className='text-end' >
     <Button variant="primary" type="submit" onClick={(e)=> addTask(e)}>
        Add Task
      </Button>
     </div>
    </Form>
   </section>
  )
}

export default AddTask
