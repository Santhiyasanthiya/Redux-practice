import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./UpdateTask";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTask } from "../slices/taskSlices";
import { removeTaskFormList } from "../slices/taskSlices";
//--------------------------------------------------------------------------------
// 8
// create and
// https://react-bootstrap.netlify.app/docs/components/table/
// next go to app.js component

// const TaskList = () => {
//   return (
//     <div>
//           <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Title</th>
//           <th>Description</th>
//  <th>Action</th>

//         </tr>
//       </thead>
//       <tbody>

//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>

//       </tbody>
//     </Table>
//     </div>
//   )
// }

// export default TaskList

//----------------------------------------------------------------------
// 10
// button add pannanum so bootstrap la search pannanum
// antha button icon ah replace pannanum so search https://icons.getbootstrap.com/
// next create UpdateTask.js and go to UpdateTask.js

// const TaskList = () => {

//     const updateTask = () => {
//         console.log("update Task")
//     }
//     const deleteTask = () => {
//         console.log("delete Task")
//     }
//     return (
//       <div>
//             <Table striped bordered hover>
//         <thead>
//           <tr className='text-center'>
//             <th>#</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>

//           <tr className='text-center'>
//             <td>2</td>
//             <td>Jacob</td>
//             <td>Jacob</td>
//            <td>
//              <Button variant="primary" className='mx-3' onClick={()=>updateTask()}><i className="bi bi-pencil-square"></i></Button>
//              <Button variant="primary"><i className="bi bi-trash3" onClick={()=>deleteTask()}></i></Button>
//              </td>

//           </tr>

//         </tbody>
//       </Table>
//       </div>
//     )
//   }

//   export default TaskList

//----------------------------------------------------------------------------------
// 12
// give MyVerticallyCenteredModal here and oru useState usepandreen
// useStatee la default ah false la kodukkanum
// next go to UpdateTask.js

// const TaskList = () => {

//   const updateTask = () => {
//       console.log("update Task")
//       setModalShow(true)
//   }
//   const deleteTask = () => {
//       console.log("delete Task")
//   }
//   const [modalShow, setModalShow] =useState(false)
//   return (
//     <div>
//           <Table striped bordered hover>
//       <thead>
//         <tr className='text-center'>
//           <th>#</th>
//           <th>Title</th>
//           <th>Description</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>

//         <tr className='text-center'>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Jacob</td>
//          <td>
//            <Button variant="primary" className='mx-3' onClick={()=>updateTask()}><i className="bi bi-pencil-square"></i></Button>
//            <Button variant="primary"><i className="bi bi-trash3" onClick={()=>deleteTask()}></i></Button>
//            </td>

//         </tr>

//       </tbody>
//     </Table>
//     <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </div>
//   )
// }

// export default TaskList

//------------------------------------------------------------------------------------------------------
// 23
// display mattum thaan pandrom adhanala state change aaga porathu ella
//  only read thaan pann apporom
// import userSelector here
// store la enna keyname kodukkuromo antha name thaan inga kodukkanum so task nu kodukkanum
// conditional rendring pandrom means eppo tasksList la value erukko appo mattum display pandra concept
// use map and index
// display la enna type pandramo adhu appadiye varum refresh panna delete aagidum
// next Addtask.js component

// const TasksList = () => {

//   const {tasksList} = useSelector((state)=> state.tasks) // store la enna key name kodukkuromo antha name thaan inga kodukkanum so task nu kodukkanum

//   const updateTask = () => {
//       console.log("update Task")
//       setModalShow(true)
//   }
//   const deleteTask = () => {
//       console.log("delete Task")
//   }
//   const [modalShow, setModalShow] =useState(false)
//   return (
//     <div>
//           <Table striped bordered hover>
//       <thead>
//         <tr className='text-center'>
//           <th>#</th>
//           <th>Title</th>
//           <th>Description</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>

//        {
// tasksList && tasksList.map((task, index) =>{
// return(
//   <tr className='text-center' key={task.id}>
//   <td>{index + 1}</td>
//   <td>{task.title}</td>
//   <td>{task.description}</td>
//  <td>
//    <Button variant="primary" className='mx-3' onClick={()=>updateTask()}><i className="bi bi-pencil-square"></i></Button>
//    <Button variant="primary"><i className="bi bi-trash3" onClick={()=>deleteTask()}></i></Button>
//    </td>

// </tr>
// )
// })
//        }
//       </tbody>
//     </Table>
//     <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </div>
//   )
// }

// export default TasksList

//---------------------------------------------------------
// 25
// updateTask handle panna porom so state change agum so state pandrathunaala
// reducer thevaipadum
// dispatch valiya than task pass pannum
// already action create panniyachi adhai taskSlices la eruinthu   import setSelectorTask
// ui la show aagiyachi but update task la varala
// button  la updateTask(task)} mention pannanum
// next go to updateTask.js component

// const TasksList = () => {

//   const {tasksList} = useSelector((state) => state.tasks) // store la enna keyname kodukkuromo antha name thaan inga kodukkanum so task nu kodukkanum
//    const dispatch = useDispatch()

//   const updateTask = (task) => {
//       console.log("update Task")
//       setModalShow(true);
//       dispatch(setSelectedTask(task))
//   }
//   const deleteTask = () => {
//       console.log("delete Task")
//   }
//   const [modalShow, setModalShow] =useState(false)
//   return (
//     <div>
//           <Table striped bordered hover>
//       <thead>
//         <tr className='text-center'>
//           <th>#</th>
//           <th>Title</th>
//           <th>Description</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>

//        {
// tasksList && tasksList.map((task, index) =>{
// return(
//   <tr className='text-center' key={task.id}>
//   <td>{index + 1}</td>
//   <td>{task.title}</td>
//   <td>{task.description}</td>
//  <td>
//    <Button variant="primary" className='mx-3' onClick={()=>updateTask(task)}><i className="bi bi-pencil-square"></i></Button>
//    <Button variant="primary"><i className="bi bi-trash3" onClick={()=>deleteTask()}></i></Button>
//    </td>

// </tr>
// )
// })
//        }
//       </tbody>
//     </Table>
//     <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </div>
//   )
// }

// export default TasksList

//---------------------------------------------------------------------------------------
// 28
// import setSelecteTask, and removeTaskFromList
// delete and update panniyachi
// next create server folder and {29} db.json but json la comment panna mudiyala component after go to tasksSlices.js component 

const TasksList = () => {
  const { tasksList } = useSelector((state) => state.tasks); // store la enna keyname kodukkuromo antha name thaan inga kodukkanum so task nu kodukkanum
  const dispatch = useDispatch();

  const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true);
    dispatch(setSelectedTask(task));
  };
  const deleteTask = (task) => {
    console.log("delete Task");
    dispatch(removeTaskFormList(task));
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasksList &&
            tasksList.map((task, index) => {
              return (
                <tr className="text-center" key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <Button
                      variant="primary"
                      className="mx-3"
                      onClick={() => updateTask(task)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button variant="primary">
                      <i
                        className="bi bi-trash3"
                        onClick={() => deleteTask(task)}
                      ></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default TasksList;
